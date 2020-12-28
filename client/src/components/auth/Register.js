import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import BtnPrimary from '../Constants/buttons'
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="form container ">
      <h1 className="title__app text-primary fadeInDown">Sign Up</h1>
      <p className="subtitle__app fadeInDown"><i className="bx bxs-user"></i>Create your acount</p>
      <form className="form__box" onSubmit={onSubmit}>
        
          <input
           className="form__box--input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        
        
          <input
           className="form__box--input"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />

          <small className="form__text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        
        
          <input
             className="form__box--input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        
        
          <input
           className="form__box--input"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        
        <BtnPrimary title='Register'/>
      </form>
      <p>Already have an account ? <Link to="/login" className="text-primary" >Sign In</Link></p>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
