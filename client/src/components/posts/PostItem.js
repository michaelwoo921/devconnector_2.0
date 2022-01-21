import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

const PostItem = ({ post: { _id, user, text, name, avatar, date } }) => {
  return (
    <div className="post bg-white my-1 p-1">
      <div>
        <Link to={`/profile/${user._id}`}>
          <img src={avatar} alt="avatar" className="round-img" />
          <h4> {name}</h4>
        </Link>
      </div>
      <div>
        <p>{text}</p>
        <p className="post-date"> Posted on {formatDate(date)}</p>
        <div>
          <button type="button" className="btn btn-light">
            up 3
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
