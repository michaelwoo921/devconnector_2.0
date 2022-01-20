import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPosts } from '../../actions/post';
import PostForm from './PostForm';
import PostItem from './PostItem';
const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  console.log(posts);
  if (loading) {
    return <div> Loading...</div>;
  }
  return (
    <section className="container">
      <h1 className="large text-primary"> Posts</h1>
      <p className="lead">Welcome to the community</p>
      <PostForm />

      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Posts);
