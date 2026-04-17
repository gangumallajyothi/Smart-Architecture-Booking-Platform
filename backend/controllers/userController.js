const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ✅ REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, projectType } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = new User({ name, email, password, phone, projectType });
    await user.save(); // auto hash avutundi

    res.json({ message: '✅ Registered Successfully' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: '❌ Email not found' });
    }

    let isMatch = false;

    // Handle legacy plaintext passwords
    if (user.password && !user.password.startsWith('$2a$') && !user.password.startsWith('$2b$')) {
      isMatch = (password === user.password);
      if (isMatch) {
        user.password = password;
        await user.save();
      }
    } else {
      isMatch = await bcrypt.compare(password, user.password);
    }

    if (!isMatch) {
      return res.status(401).json({ message: '❌ Password incorrect' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: '✅ Login successful!',
      token,
      user: { name: user.name, email: user.email, role: user.role }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};