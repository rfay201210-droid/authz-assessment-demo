const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const protectedRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());

// Public routes
app.use('/auth', authRoutes);

// Protected routes
app.use('/api', protectedRoutes);

app.listen(3000, () => console.log('Demo running on http://localhost:3000'));
module.exports = router;
