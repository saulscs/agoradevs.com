import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div class="profile__about bgCard bgCard--modifier">
    {bio && (
      <Fragment>
        <h2 class="text-primary">{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </Fragment>
    )}
    <h2 class="text-primary">Skill set</h2>
    <div class="profile__about--skills">
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check' /> {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
