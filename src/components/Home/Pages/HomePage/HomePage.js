import React from "react";
import PropTypes from "prop-types";
import Banner from "../../Banner/Banner";
import Categories from "../../Categories/Categories";
import News from "../../News/News";

const HomePage = props => {
    return (
        <div className="page">
            <Banner />
            <Categories />
            <News />
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
