import React, { useState } from "react";
import PropTypes from "prop-types";

// scss
import "./Categories.css";
import Category from "./Category/Category";

const Categories = (props) => {
  // default data
  const initialState = [
    {
      id: 1,
      title: "Buy a home",
      description:
        "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
      buttonTitle: "Search homes",
      imgUrl: "https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.png",
      url: "http://localhost:3000/collections/1",
    },
    {
      id: 3,
      title: "Rent a home",
      description:
        "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
      buttonTitle: "Find rentals",
      imgUrl: "https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.png",
      url: "http://localhost:3000/collections/2",
    },
  ];
  const [categories, setCategories] = useState(initialState);

  return (
    <section className="section categories">
      <div className="container">
        <h2 className="section__title">
          We have the most listings and constant updates.
          <br />
          So you'll never miss out
        </h2>
        <div className="categories__line"></div>

        <div className="categories__list mt-5 row">
          {categories.map((item) => {
            return (
              <div
                className="col-lg-4 col-md-12 sm-12 xs-12 col-12"
                key={item.id}
              >
                <Category item={item} />
              </div>
            );
          })}
        </div>
        <div className="categories__line mt-5"></div>
      </div>
    </section>
  );
};

Categories.propTypes = {};

export default Categories;
