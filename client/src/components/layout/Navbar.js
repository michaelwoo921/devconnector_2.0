import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isAuthenticated } = auth;

  const AuthRoutes = () => (
    <ul>
      <li>
        <Link to="/profiles"> Developers</Link>
      </li>
      <li>
        <Link to="/posts"> Posts</Link>
      </li>
      <li>
        <Link to="/dashboard"> Dashboard</Link>
      </li>
      <li>
        <a href="#!" onClick={() => dispatch(logout())}>
          {' '}
          Logout
        </a>
      </li>
    </ul>
  );
  const GuestRoutes = () => (
    <ul>
      <li>
        <Link to="/profiles"> Developers</Link>
      </li>

      <li>
        <Link to="/register"> Register</Link>
      </li>
      <li>
        <Link to="/login"> Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"> DevConnector</Link>
      </h1>
      {isAuthenticated ? <AuthRoutes /> : <GuestRoutes />}
    </nav>
  );
};

export default Navbar;
