import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import Spinner from '../layout/Spinner';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);
  if (loading || !post) return <Spinner />;
  return (
    <section className="container">
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />

      <div className="comments">
        {post.comments.map((comment) => (
          <div key={comment._id}>
            <CommentItem comment={comment} postId={post._id} />
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
