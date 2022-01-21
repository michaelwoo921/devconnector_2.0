import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../layout/Alert';

const Register = ({ setAlert, register }) => {
  const navigate = useNavigate();
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
      setAlert('password does not match', 'danger');
    } else {
      register(formData);
      navigate('/');
    }
  };
  return (
    <section className="container">
      <h1 className="large text-primary"> Sign Up</h1>
      <p className="lead"> Create Your Account </p>
      <form className="form" onSubmit={submitForm}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
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
        <div className="form-group">
          <input
            type="text"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

export default connect(null, { setAlert, register })(Register);
