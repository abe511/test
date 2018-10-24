import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {props.branding}
        </Link>
        <div>
          <ul className="nav mb-auto mr-auto">
            <li className="nav-item list-inline-item">
              <Link to="/" className="navlink">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item list-inline-item">
              <Link to="/contact/add" className="navlink">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item list-inline-item">
              <Link to="/about" className="navlink">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

Header.defaultProps = {
  branding: 'React App'
};
