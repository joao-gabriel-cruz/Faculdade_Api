var jwt = require('jsonwebtoken');

export function generateToken(item: {}) {
  return jwt.sign(item, process.env.SECRET, {
    expiresIn: 86400,
  });
}
