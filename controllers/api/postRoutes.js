const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/',withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.create({
        title: req.body.post_title,
        content: req.body.post_content,
        user_id: req.session.user_id,
        created: '2022-06-12'
      });
    res.status(200).json(dbPostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;