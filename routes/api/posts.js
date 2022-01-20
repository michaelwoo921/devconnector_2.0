const express = require('express');
const { body, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
const User = require('../../models/User');

const router = express.Router();

//@route GET /api/posts
// @desc Get all posts
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().populate({
      path: 'user',
      select: ['name', 'avatar'],
    });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

//@route POST /api/posts
// @desc create a post
// @access Private

router.post(
  '/',
  auth,
  body('text').notEmpty().withMessage('text is required'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');
      const { name, avatar } = user;

      const newPost = new Post({
        user: req.user.id,
        text: req.body.text,
        name,
        avatar,
      });

      await newPost.save();
      console.log(newPost);
      res.json(newPost);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
