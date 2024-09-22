const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { auth } = require("../middleware/auth");

// 글 작성
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;
  try {
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
router.get("/:postId", auth, async (req, res) => {
  try {
    const findPost = await Post.findById(req.params.postId).populate(
      "userId",
      "username"
    );
    res.json(findPost);
  } catch (err) {
    res.json({ message: `Can't find specific Post` });
  }
});
// 글 수정
router.patch("/:postId", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate(
      "userId",
      "username"
    );
    if (!post) return res.json({ message: "Post not found" });

    const { title, content } = req.body;

    console.log(post.userId.username);
    console.log(req.user);
    // 작성자만 수정 가능
    if (post.userId.username === req.user.username) {
      post.title = title;
      post.content = content;

      const updatedPost = await post.save();
      res.json(updatedPost);
    } else {
      res.json({ message: `You don't have a permission` });
    }
  } catch (err) {
    res.json({ message: "Failed to updated post" });
  }
});

// 글 삭제
router.delete("/:postId", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate(
      "userId",
      "username role"
    );
    if (!post) return res.json({ message: "Post not found" });

    if (
      post.userId.username === req.user.username ||
      post.userId.role === "admin"
    ) {
      await post.deleteOne();
      res.json({ message: "Deleted post successfully" });
    } else {
      res.json({ message: `You don't have permission` });
    }
  } catch (err) {
    res.json({ message: "Failed to delete post" });
  }
});

module.exports = router;
