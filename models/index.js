const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };

// Post
// title 
// content
// author / creator (foreign key)
// date created

// Comment
// author / creator (foeign key)
// date created
// content