import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { Link } from 'react-router-dom';
import Alert from '../layout/Alert';

const Register = ({ setAlert }) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('password does not match');
    }
    console.log(formData);
  };
  return (
    <section>
      <h1> Sign Up</h1>
      <p> Create Your Account </p>
      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <small>
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email
        </small>
        <div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

export default connect(null, { setAlert })(Register);
