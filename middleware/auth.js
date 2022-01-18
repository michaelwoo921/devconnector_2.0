const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) return res.status(401).json({ msg: 'not authenticated' });
  const tokenParts = authorization.split(' ');
  if (tokenParts[0].toLowerCase() !== 'bearer' || tokenParts.length !== 2)
    return res.status(401).json({ msg: 'Invalid token' });
  const token = tokenParts[1];
  jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
    if (err) return res.status(401).json({ msg: 'Invalid token' });
    req.user = decoded.user;
    next();
  });
};

module.exports = auth;
