import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // this is where role is attached
    // console.log(req.user)
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};


export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const { role } = req.user;
    if (!roles.includes(role)) {
      return res.status(403).json({ message: 'Access denied: insufficient role' });
    }

    next();
  };
};
