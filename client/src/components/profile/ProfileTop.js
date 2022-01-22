import React from 'react';

const ProfileTop = ({
  profile: {
    user: { name, avatar },
    website,
    company,
    status,
    location,
    social,
  },
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img src={avatar} alt="avatar" className="round-img my-1" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {' '}
        {status} {company ? <span> at {company}</span> : null}
      </p>
      <p>{location ? <span>{location}</span> : null}</p>
      <div className="icons my-1">
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x"></i>
          </a>
        ) : null}
        {Object.entries(social)
          .filter(([_, v]) => v)
          .map(([key, value]) => (
            <a key={key} href={value} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${key} fa-2x`}></i>
            </a>
          ))}
      </div>
    </div>
  );
};

export default ProfileTop;
