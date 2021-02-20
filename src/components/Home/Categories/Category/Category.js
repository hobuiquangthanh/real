import React from "react";
import PropTypes from "prop-types";

// scss
import "./Category.css";

const Category = ({ item }) => {
    return (
        <div className="shadow category">
            <div className="category__img">
                <img
                    className="img-fluid"
                    src={item.imgUrl}
                    alt="category-img"
                />
            </div>
            <div className="category__information">
                <h3 className="category__information--title">{item.title}</h3>
                <p className="category__information--description">
                    {item.description}
                </p>
                <button className="category__information--button base-btn">
                    {item.buttonTitle}
                </button>
            </div>
        </div>
    );
};

Category.propTypes = {
    item: PropTypes.object
};
Category.defaultProps = {
    item: {
        id: 1,
        title: "Buy a home",
        description:
            "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
        buttonTitle: "Search homes",
        imgUrl: "https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.png"
    }
};

export default Category;
