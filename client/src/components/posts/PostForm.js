import React from 'react';

const PostForm = () => {
  return (
    <div className="post-form">
      <h3 className="bg-primary p"> Say Something...</h3>

      <form className="form my-1">
        <textarea
          rows="5"
          cols="30"
          name="text"
          placeholder="Create a post"
          required
        ></textarea>

        <input type="submit" value="Submit" className="btn btn-dark my-1" />
      </form>
    </div>
  );
};

export default PostForm;
