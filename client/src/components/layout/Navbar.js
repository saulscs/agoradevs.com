import React, {useState ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isActive, SetIsACtive] = useState(false);

  const authLinks = (
    <ul className={`navbar__menu ${isActive ? 'active' : ''}`}>
        <li>
            <Link to="/posts" className="navbar__links navbar__item">
                    <i className="bx bxs-home hide-sm"></i>{''}
                    <span>Posts</span>
            </Link>
        </li>
        <li>
            <Link to="/post" className="navbar__links navbar__item">
                    <i className="bx bxs-plus-circle hide-sm"></i>{''}
                    <span>Post</span>
            </Link>
        </li>
        <li>
            <Link to="/profile" className="navbar__links navbar__item">
                    <i className="bx bxs-user-circle hide-sm" ></i>{''}
                    <span>Profile</span>
            </Link>
        </li>
        <li>
            <Link to="/dashboard" className="navbar__links navbar__item">
                    <i className="bx bxs-cog hide-sm"></i>{''}
                    <span>Dashboard</span>
            </Link>
        </li>
        <li>
            <Link onClick={logout}  className="navbar__links navbar__item">
            <i className="bx bx-log-out hide-sm"></i>{''}
            <span>Logout</span>
            </Link>
        </li>
    </ul>
);


const guestLinks = (
    <ul className={`navbar__menu ${isActive ? 'active' : ''}`}>
        <li className="fadeInDown navbar__item">
            <Link to="/profiles" className="navbar__links">Developers</Link>
        </li>
        <li className=" fadeInDown navbar__item">
            <Link to="login" className="navbar__links">Login</Link>
        </li>
        <li className="fadeInDown navbar__btn">
            <Link to="register" className="navbar__btn--modifier">Sign Up</Link>
        </li>
    </ul>
);


return (
    <nav className="navbar">
        <div className="navbar__container">
            <div className="fadeInDown">
                <Link to="/" className="main__logo"><i className="fas fa-book-reader"></i>Agora Devs</Link>
            </div>
            <div className={`navbar__toggle ${isActive ? 'is-active' : ''} `} 
                type="button" 
                onClick={() => SetIsACtive(!isActive)}
            >
                    <span className="bar"></span> <span className="bar"></span>
                    <span className="bar"></span>
            </div>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks }</Fragment>) 
            }
            </div>
        </nav>
)
}


Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
