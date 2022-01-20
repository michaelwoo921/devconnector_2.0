import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="post">
      <div>
        <a href="#!">
          <img src={post.avatar} alt="avatar" />
          <h4> {post.name}</h4>
        </a>
      </div>
      <div>
        <p>{post.text}</p>
        <p> Posted on 04/16/2019</p>
        <div>
          <button type="button" className="btn btn-light">
            up
          </button>
          <button type="button" className="btn btn-light">
            down
          </button>
          <Link to="/post" className="btn btn-primary">
            Discussion
          </Link>
          <button type="button" className="btn btn-danger">
            <i>x</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
