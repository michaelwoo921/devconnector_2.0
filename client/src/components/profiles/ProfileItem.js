import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile }) => {
  return (
    <div className="profile bg-light">
      <img className="round-img" src={profile.user.avatar} alt="avatar" />
      <div>
        <h2>{profile.user.name}</h2>
        <p>
          {profile.status}{' '}
          {profile.company && <span> at {profile.location}</span>}
        </p>

        <Link to={`/profile/${profile.user._id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        <li> HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </div>
  );
};

export default ProfileItem;
