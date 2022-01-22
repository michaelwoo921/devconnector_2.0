import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="post-form">
      <h3 className="bg-primary p"> Say Something...</h3>

      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          rows="5"
          cols="30"
          name="text"
          value={text}
          onChange={onChange}
          placeholder="Create a post"
          required
        ></textarea>

        <input type="submit" value="Submit" className="btn btn-dark my-1" />
      </form>
    </div>
  );
};

export default connect(null, { addPost })(PostForm);
