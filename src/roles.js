const jwt = require('jsonwebtoken');
const SECRET = 'demo-secret';

function authorize(requiredRole) {
  return (req, res, next) => {
    const header = req.headers['authorization'];
    if (!header) return res.status(401).json({ error: 'No token' });

    try {
      const token = header.split(' ')[1];
      const payload = jwt.verify(token, SECRET);
      if (requiredRole && payload.role !== requiredRole) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      req.user = payload;
      next();
    } catch {
      res.status(401).json({ error: 'Invalid token' });
    }
  };
}

module.exports = { authorize };
