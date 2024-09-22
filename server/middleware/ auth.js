const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.json({ message: "No token. Authorization Failed" });
  }

  try {
    const decoded = jwt.decode(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.json({ message: "Token is not valid" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.json({ message: "Access denied" });
  }
  next();
};

module.exports = { auth, adminOnly };
