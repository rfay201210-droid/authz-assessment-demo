const express = require('express');
const { authorize } = require('./roles');
const router = express.Router();

// User-only route
router.get('/records', authorize('user'), (req, res) => {
  res.json({ message: `Records for ${req.user.email}` });
});

// Admin-only route
router.get('/admin/data', authorize('admin'), (req, res) => {
  res.json({ message: 'Sensitive admin data' });
});

module.exports = router;
