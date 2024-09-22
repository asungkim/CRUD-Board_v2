const express = require("express");
const router = express.Router();
const bcrpyt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// 회원가입
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  const hashPassword = await bcrpyt.hash(password, 10);

  const user = new User({
    username,
    password: hashPassword,
    role,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ message: "Id already exists" });
    }
    res.json({ message: "Failed to saved User" });
  }
});

// 로그인
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const findUser = await User.findOne({ username });
  if (!findUser) return res.json({ message: `Can't find User` });

  const isMatch = await bcrpyt.compare(password, findUser.password);
  if (!isMatch) return res.json({ message: "Incorrect Password" });

  const token = jwt.sign(
    { id: findUser._id, role: findUser.role, username: findUser.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;
