import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const navigate = useNavigate();

  const initialState = { email: '', password: '' };
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();

    login(email, password);
    navigate('/');
  };

  return (
    <section className="container">
      <h1 className="large text-primary"> Sign In</h1>
      <p className="lead"> Sign into Your Account </p>
      <form className="form" onSubmit={submitForm}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default connect(null, { login })(Login);
