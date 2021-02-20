import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// scss
import "./Property.css";

const Property = props => {
    const history = useHistory();

    const handeLinkToDetail = productId => {
        history.push(`/detail/${productId}`);
    };
    return (
        <div
            className="property shadow"
            onClick={() => handeLinkToDetail("someId")}
        >
            <div className="property__top position-relative">
                <span className="property__top-time position-absolute">
                    9 days ago
                </span>
                <i className="property__top-wish far fa-heart position-absolute"></i>
                <img
                    src="https://photos.zillowstatic.com/p_e/IS76c3x3zt75q30000000000.jpg"
                    alt="property image"
                    className="img-fluid"
                />

                <p className="property__top-name position-absolute">
                    PMI New Orleans
                </p>
            </div>

            <div className="property__information p-3">
                <div className="property__information-heading d-flex justify-content-between">
                    <p className="property__information-price font-weight-bold">
                        $950/mo
                    </p>
                    <ul className="property__information-detail d-flex">
                        <li className="px-3">
                            <strong>1</strong> bd
                        </li>
                        <li className="px-3">
                            <strong>1</strong> ba
                        </li>
                        <li className="px-3">
                            <strong>600</strong> sqft
                        </li>
                    </ul>
                </div>

                <p className="property__information-address">
                    3201 Cleary Ave #2, Metairie, LA 70002
                </p>
                <div className="property__information-type">
                    <span className="property__information-status"></span>
                    <span className="property__information-text-status">
                        Apartment for rent
                    </span>
                </div>
            </div>
        </div>
    );
};

Property.propTypes = {};

export default Property;
