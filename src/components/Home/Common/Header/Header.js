import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// css
import "./Header.css";

// libs
import { Link, useRouteMatch } from "react-router-dom";

const Header = props => {
  const { url, path } = useRouteMatch();
  const [user, setUser] = useState(null)
  useEffect(() => {
    const user = localStorage.getItem("auth")
    setUser(JSON.parse(user))
    // const userID = JSON.stringify(user)
    console.log(user);
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setUser(null)
  }

  return (
    <header className="header py-3 shadow-sm">
      <nav className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <ul className="header__links ">
            <li className="mr-5">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="mr-5">
              <Link to={`/collections/1`}>Buy</Link>
            </li>
            <li className="mr-5">
              <Link to={`/collections/2`}>Rent</Link>
            </li>
          </ul>

          <i className="header__icons fas fa-bars .d-none .d-sm-block .d-md-none"></i>

          <div className="flex-fill text-center header__logo">
            <h2>Logo</h2>
          </div>
          {
            !user ? (<ul className="header__auth">
              <li className="mr-5">
                <Link to={`/login`}>Signin</Link>
              </li>
              <li className="mr-5">
                <Link to={`/login`}>Register</Link>
              </li>
            </ul>) : (<ul className="header__auth">
              <li className="mr-5">
                <div className="dropdown">
                  <span>
                    {user.ho_ten}
                  </span>
                  <div className="dropdown-content">
                    <p className="p-link"><Link to={`/wishlish`}>Your Wishlish</Link></p>
                    <p className="p-link"><a href={`http://localhost:3000/admin/` + `${user.id}`}>Dashboard</a></p>
                  </div>
                </div>
              </li>
              <li className="mr-5">
                <a onClick={handleLogout} href="#">Logout</a>
              </li>
            </ul>)
          }

          <i className="header__icons fas fa-user-friends"></i>
        </div>
      </nav>
    </header >
  );
};

Header.propTypes = {};

export default Header;
