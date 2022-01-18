import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Link } from 'react-router-dom';

const Login = ({ login }) => {
  const initialState = { email: '', password: '' };
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();

    login(email, password);
  };
  return (
    <section>
      <h1> Sign In</h1>
      <p> Sign into Your Account </p>
      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <input type="submit" value="Login" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default connect(null, { login })(Login);
