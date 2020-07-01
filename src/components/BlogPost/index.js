import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import wrapMarkup from '../../hooks/useMarkdown';
import { Article } from './styles';

const BlogPost = ({ route }) => {
  const url = `https://leonardo2h.github.io/rviajero-blog-posts/${route}/post.md`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(url).then((resp) => {
      setPost(resp.data);
      setLoading(false);
      setError('');
    }).catch((error) => {
      setError(error);
      setLoading(false);
      setPost(null);
    });
  }, [route]);

  return (
    <>
      {loading && (
        <Article>
          <h1><Skeleton /></h1>
          <p><Skeleton count={20} /></p>
        </Article>
      )}
      {post && <Article dangerouslySetInnerHTML={{ __html: wrapMarkup(post) }} />}
      {error && <h1>error</h1>}
    </>
  );
};

BlogPost.propTypes = {
  route: PropTypes.string,
};

export default BlogPost;
