import React,{Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from './Hero'
import About from './About'
import Benefict from './Benefits'
import Testimony from './Testimony'
import Download from './Downloads'
import Footer from './Footer'
import './landing.css'

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <Hero/>
      <About/>
      <Benefict/>
      <Testimony/>
      <Download/>
      <Footer/>
    </Fragment>
    
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
