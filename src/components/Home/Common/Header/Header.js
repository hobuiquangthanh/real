import React from "react";
import PropTypes from "prop-types";

// css
import "./Header.css";

// libs
import { Link, useRouteMatch } from "react-router-dom";

const Header = props => {
  const { url, path } = useRouteMatch();

  return (
    <header className="header py-3 shadow-sm">
      <nav className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <ul className="header__links ">
            <li className="mr-5">
              <Link to={`${url}`}>Home</Link>
            </li>
            <li className="mr-5">
              <Link to={`${url}/buy`}>Buy</Link>
            </li>
            <li className="mr-5">
              <Link to={`${url}/sell`}>Sell</Link>
            </li>
            <li className="mr-5">
              <Link to={`${url}/rent`}>Rent</Link>
            </li>
          </ul>

          <i className="header__icons fas fa-bars .d-none .d-sm-block .d-md-none"></i>

          <div className="flex-fill text-center header__logo">
            <h2>Logo</h2>
          </div>
          <ul className="header__auth">
            <li className="mr-5">
              <Link to={`${url}/signin`}>Signin</Link>
            </li>
            <li className="mr-5">
              <Link to={`${url}/register`}>Register</Link>
            </li>
          </ul>

          <i className="header__icons fas fa-user-friends"></i>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
