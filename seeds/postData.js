const { Post } = require('../models');

const postdata = [
  {
    title: 'JavaScript Versus Java',
    content: 'Coming soon...',
    user_id: 1,
    created: 06/11/2022
  },
  {
    title: 'The Future of Ruby on Rails',
    content: 'Coming soon...',
    user_id: 1,
    created: 06/11/2022
  },
  {
    title: 'Best Front-End Framework',
    content: 'Coming soon...',
    user_id: 1,
    created: 06/11/2022
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
