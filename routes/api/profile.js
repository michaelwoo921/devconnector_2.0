const express = require('express');
const Profile = require('../../models/Profile');
const auth = require('../../middleware/auth');
const { body, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const router = express.Router();

// @routes GET /api/profile
// @desc get all profiles
// @access Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate({
      path: 'user',
      select: ['name', 'avatar'],
    });
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @routes POST /api/profile
// @desc create or update user profile
// @access Private
router.post(
  '/',
  body('status').notEmpty().withMessage('status is required'),
  body('skills').notEmpty().withMessage('skills is required'),
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // validate body and get request body

    const {
      website,
      skills,
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
      ...rest
    } = req.body;
    //TODO build profile field and normalize url
    const profileFields = {
      user: req.user.id,
      website:
        website && website !== ''
          ? normalize(website, { forceHttps: true })
          : '',
      skills: Array.isArray(skills)
        ? skills
        : skills.split(',').map((skill) => ' ' + skill.trim()),
      ...rest,
    };

    // build social field object
    const socialFields = { youtube, twitter, instagram, linkedin, facebook };

    for (const [k, v] of Object.entries(socialFields)) {
      if (v && v.length > 0) {
        socialFields[k] = normalize(v, { forceHttps: true });
      }
    }
    profileFields.social = socialFields;

    // find and update profile
    try {
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        {
          $set: profileFields,
        },
        { new: true, upsert: true }
      );
      return res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
