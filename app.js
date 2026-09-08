const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');     // must export router
const protectedRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());

// Public routes
app.use('/auth', authRoutes);             // ✅ no parentheses

// Protected routes
app.use('/api', protectedRoutes);

app.listen(3000, () => console.log('Demo running on http://localhost:3000'));

app.get('/', (req, res) => {
  res.send('AuthZ Assessment Demo is running!');
});
