const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { auth } = require("../middleware/ auth");

// 글 작성
router.post("/", auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;
    const post = new Post({
      title,
      content,
      userId,
    });
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// 모든 글 조회
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "username"); // Post 의 userId 부분에 username을 추가하는 것
    /**
     * 적용 전 : userId: "" 형태
     * 적용 후 : userId: {"_id": "", "username":""}
     */

    res.json(posts);
  } catch (err) {
    res.json({ message: "Failed to find Posts" });
  }
});

// 특정 글 조회
router.get("/:postId", auth, (req, res) => {});
// 글 수정

// 글 삭제
