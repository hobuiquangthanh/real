import React, { useEffect } from "react";
import PropTypes from "prop-types";

// css
import "./SearchBar.css";

const SearchBar = ({ show }) => {
    return (
        <div className={`search ${show ? "show" : ""}`}>
            <div className="search__wrapper position-relative">
                <input
                    type="text"
                    className="search__input custom-input"
                    placeholder="Enter district, city or zip code"
                />
                <i className="fas fa-search position-absolute"></i>
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    show: PropTypes.bool
};

SearchBar.defaultProps = {
    show: false
};

export default SearchBar;
