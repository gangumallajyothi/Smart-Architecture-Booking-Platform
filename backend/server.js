const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/architectureDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ================= REGISTER =================
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, phone, projectType } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new User({ name, email, password, phone, projectType, role: "user" });
    await user.save();

    res.json({ message: "Registered Successfully" });

  } catch (err) {
    res.status(500).json({ error: "Registration Failed" });
  }
});


app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Wrong password" });
    }

    console.log("User found:", user); 

    res.json({ 
      message: "Login Success", 
      role: user.role, 
      name: user.name || user.email  
    });

  } catch (err) {
    res.status(500).json({ error: "Login Failed" });
  }
});
// ================= GET ALL USERS =================
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});