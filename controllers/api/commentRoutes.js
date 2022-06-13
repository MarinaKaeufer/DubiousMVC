const router = require('express').Router();
const { Comment } = require('../../models');


const withAuth = require('../../utils/auth');

// CREATE new comment
router.post('/',withAuth, async (req, res) => {
    try {
      const dbCommentData = await Comment.create({
        post_id: req.body.comment_post_id,
        content: req.body.comment_content,
        user_id: req.session.loggedIn,
        created: '2022-06-13' // TODO fix this later. 
      });
    res.status(200).json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;