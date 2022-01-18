import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section>
      <h1> Sign In</h1>
      <p> Sign into Your Account </p>
      <form>
        <div>
          <input type="text" placeholder="Email" name="email" />
        </div>

        <div>
          <input type="text" placeholder="Password" name="password" />
        </div>

        <input type="submit" value="Login" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default Login;
