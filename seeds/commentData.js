const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Great stuff...',
    user_id: 1,
    created: 06/11/2022,
    post_id: 1,
  },
  {
    content: 'Great stuff...',
    user_id: 1,
    created: 06/11/2022,
    post_id: 2,
  },
  {
    content: 'Great stuff...',
    user_id: 1,
    created: 06/11/2022,
    post_id: 3,
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
