import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// scss
import "./Property.css";

const Property = ({item, hideWish  }) => {
    const history = useHistory();

    const handeLinkToDetail = productId => {
        history.push(`/detail/${productId}`);
    };

    const handleWishClick = (e, item) => {
        e.stopPropagation();
        const user = localStorage.getItem('auth');
        if(user) {
            history.push('/wishlish');
        } else {
            history.push('/login')
        }
    }
    return (
        <div
            className="property shadow"
            onClick={() => handeLinkToDetail(item.id_nha)}
        >
            <div className="property__top position-relative">
                <span className="property__top-time position-absolute">
                    9 days ago
                </span>
                {
                  !hideWish && <i onClick={(e) => handleWishClick(e,item)} className="property__top-wish far fa-heart position-absolute"></i>
                }
                <img
                    src="https://photos.zillowstatic.com/p_e/IS76c3x3zt75q30000000000.jpg"
                    alt="property image"
                    className="img-fluid"
                />

                <p className="property__top-name position-absolute">
                    { item.quan + '/ ' + item.thanh_pho }
                </p>
            </div>

            <div className="property__information p-3">
                <div className="property__information-heading d-flex justify-content-between">
                    <p className="property__information-price font-weight-bold">
                        { item.gia } VND
                    </p>
                    <ul className="property__information-detail d-flex">
                        <li className="px-3">
                            Phòng <strong>{item.so_phong}</strong>
                        </li>
                        <li className="px-3">
                            Toilet <strong>{item.so_toilet}</strong>
                        </li>
                        <li className="px-3">
                            Diện Tích <strong>{item.dien_tich}</strong>
                        </li>
                    </ul>
                </div>

                <p className="property__information-address">
                    {`${item.so_nha} ${item.duong} Q.${item.quan} Tp.${item.thanh_pho}`}
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
