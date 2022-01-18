const express = require('express');
const { body, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const router = express.Router();

// @route GET /api/users
// @desc test user route
// @access public
router.get('/', (req, res) => {
  res.send('users test route');
});

router.post(
  '/',
  body('email').isEmail().withMessage('Provide a valid email'),
  body('password')
    .isLength({ min: 5 })
    .withMessage('must be at least 5 characters'),
  body('name').notEmpty().withMessage('name is required'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name } = req.body;
    try {
      const avatar = gravatar.url(email, { s: '200', r: 'pg', d: '404' });
      let user = await User.findOne({ email });
      if (user) {
        // user already exists
        return res.status(400).json({
          errors: [{ msg: 'User already exists' }],
        });
      }

      user = new User({ email, password, name, avatar });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      jwt.sign(
        { user: { id: user._id } },
        process.env.jwtSecret,
        { expiresIn: '3 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
