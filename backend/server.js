require("dotenv").config({ path: __dirname + "/.env" });

console.log("ENV FILE EXISTS:", require("fs").existsSync(__dirname + "/.env"));
console.log("ENV CHECK:", process.env.MONGO_URI);

const express  = require("express");
const mongoose = require("mongoose");
const cors     = require("cors");
const bcrypt   = require("bcryptjs");

const User          = require("./models/User");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

// ─── DB Connect ───────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err.message));


// ================= REGISTER =================
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, phone, projectType } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // ✅ Direct save — User.js pre('save') auto hash chestundi
    const user = new User({
      name,
      email,
      password,
      phone,
      projectType,
      role: "user"
    });

    await user.save();
    res.json({ message: "Registered Successfully" });

  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ error: err.message });
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

    let isMatch = false;
    
    // Check if the password was saved as plaintext (before the hashing pre-hook)
    if (user.password && !user.password.startsWith('$2a$') && !user.password.startsWith('$2b$')) {
      isMatch = (password === user.password);
      
      // Auto-migrate standard plaintext to Bcrypt Hash inside the DB for future secure logins
      if (isMatch) {
        user.password = password;
        await user.save();
      }
    } else {
      isMatch = await bcrypt.compare(password, user.password);
    }

    if (!isMatch) {
      return res.status(400).json({ error: "Wrong password" });
    }

    res.json({
      message: "Login Success",
      role: user.role,
      name: user.name || user.email
    });

  } catch (err) {
    console.error("Login error:", err.message);
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
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});