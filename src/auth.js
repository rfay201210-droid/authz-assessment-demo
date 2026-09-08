const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET = 'demo-secret';
const users = {
  'user@example.com': { password: 'pass123', role: 'user' },
  'admin@example.com': { password: 'admin123', role: 'admin' }
};

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users[email];
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ email, role: user.role }, SECRET, { expiresIn: '15m' });
  res.json({ token });
});

// Refresh route
router.post('/refresh', (req, res) => {
  const { token } = req.body;
  try {
    const payload = jwt.verify(token, SECRET);
    const newToken = jwt.sign({ email: payload.email, role: payload.role }, SECRET, { expiresIn: '15m' });
    res.json({ token: newToken });
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
});

module.exports = router;
