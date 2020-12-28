import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BtnPrimary from '../Constants/buttons'
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="container form">
        <h1 className="title__app text-primary fadeInDown">Sign In</h1>
        <p className="subtitle__app fadeInDown"><i className="bx bxs-user"></i>Sign into your acount</p>
      <form className="form__box" onSubmit={onSubmit}>
        
          <input
            className="form__box--input"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
       
        
          <input
            className="form__box--input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        
        <BtnPrimary title='Login'/>
      </form>
      <p>Dont have an account ? <Link to="/register" className ="text-primary" >Sign Up</Link></p>
      </section>
     
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
