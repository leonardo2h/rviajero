import React from 'react';

const BlogPost = ({ route }) => {
  const content = require(`../../blogposts/${route}/post.md`);

};

export default BlogPost;
