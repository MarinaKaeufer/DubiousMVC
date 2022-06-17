const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/',withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.create({
        title: req.body.post_title,
        content: req.body.post_content,
        user_id: req.session.loggedIn,
        created: '2022-06-12'
      });
    res.status(200).json(dbPostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //Deletes post 
  router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(post => {
        if (!post) {
          res.status(404).json({ message: 'No record found with this id!' });
          return;
        }
        res.json(post);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  //Edit post 
  router.put('/:id', withAuth, (req, res) => {
    Post.update({
      title: req.body.post_title,
      content: req.body.post_content
    },
    {
      where: {
        id: req.params.id
      }
    })
      .then(post => {
        if (!post) {
          res.status(404).json({ message: 'No record found with this id!' });
          return;
        }
        res.json(post);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  module.exports = router;