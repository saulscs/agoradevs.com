import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className="profile__hero profiles__card bgCard bgCard--modifier">
     <div><img src={avatar} alt="" /></div>
     <div className="profile__hero--intro">
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
     </div>
      <div className="profile__hero--social">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        )}
        {social &&
          Object.entries(social)
            .filter(([key, value]) => value)
            .map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${key} fa-2x`}></i>
              </a>
            ))}
      </div>
      <div className="profile__hero--more">
        <a href="#" target="blank" rel="noopener noreferrer">320 Conections</a>
        <a href="#" target="blank" rel="noopener noreferrer">More</a>
        <Link to="/edit-profile">Edit Profile </Link>    
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
