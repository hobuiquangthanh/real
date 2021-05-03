import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Nav.css";
import { useHistory } from "react-router-dom";
// scss

const Nav = ({ handleSearch, isWish }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const handleRentRoute = () => {
    // history.push('/collections/2')
    if (isWish) {
      window.location = "http://localhost:3000/wishlish?type=2";
      return;
    }
    window.location = "http://localhost:3000/collections/2";
  };

  const handleSellRoute = () => {
    // history.push('/collections/1'
    if (isWish) {
      window.location = "http://localhost:3000/wishlish?type=1";
      return;
    }
    window.location = "http://localhost:3000/collections/1";
  };

  const handleAllRoute = () => {
    if (isWish) {
      window.location = "http://localhost:3000/wishlish";
      return;
    }
    window.location = "http://localhost:3000/collections";
  };
  return (
    <div className="nav">
      <div className="container-fluid">
        <div className="nav__list">
          <div className="nav__list--search">
            <input
              type="text"
              value={search}
              placeholder="Tìm kiếm theo quận"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <i
              className="fas fa-search pointer-event"
              onClick={() => {
                handleSearch(search);
              }}
            ></i>
          </div>
          <div className="nav__list--filter">
            <button onClick={handleAllRoute}>Tất cả</button>
          </div>
          {/*<div className="nav__list--filter">*/}
          {/*  <button onClick={handleAllRoute}>Tất cả</button>*/}
          {/*</div>*/}
          <div className="nav__list--filter">
            <button onClick={handleRentRoute}>Nhà cho thuê</button>
          </div>
          <div className="nav__list--filter">
            <button onClick={handleSellRoute}>Nhà bán</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
