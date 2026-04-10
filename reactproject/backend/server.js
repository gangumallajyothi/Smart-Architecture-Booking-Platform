const express  = require("express");
const mongoose = require("mongoose");
const cors     = require("cors");
const bcrypt   = require("bcryptjs");          // ✅ NEW

const User          = require("./models/User");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRoutes);

// ─── DB Connect ───────────────────────────────────────────
mongoose
  .connect("mongodb+srv://gangumallajyothi07_db_user:Jyothi%400276@cluster0.ohrogox.mongodb.net/architectureDB?appName=Cluster0")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// ================= REGISTER =================
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, phone, projectType } = req.body;

    // ── Duplicate check ──────────────────────────────────
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      password: hashedPassword,   
      phone,
      projectType,
      role: "user"
    });

    await user.save();
    res.json({ message: "Registered Successfully" });

  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Registration Failed" });
  }
});

// ================= LOGIN =================
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Wrong password" });
    }

    console.log("✅ Login success:", user.email);

    res.json({
      message: "Login Success",
      role:    user.role,
      name:    user.name || user.email
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login Failed" });
  }
});

// ================= GET ALL USERS =================
app.get("/api/users", async (req, res) => {
  try {
    
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// ================= DELETE USER =================
app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// ─── Start Server ─────────────────────────────────────────
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});