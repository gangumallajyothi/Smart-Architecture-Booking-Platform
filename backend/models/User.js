const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name:        { type: String },
  email:       { type: String, required: true, unique: true },
  password:    { type: String, required: true },
  phone:       { type: String },
  projectType: { type: String },
  role:        { type: String, default: "user" },
  status:      { type: String, default: "active" }   // ← ADD THIS
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);