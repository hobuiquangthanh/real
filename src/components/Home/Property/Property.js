import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import axios from "axios";
// scss
import "./Property.css";
import { API_IMAGES, API_KEY } from "../../../shared/_constant";

const Property = ({ item, hideWish }) => {
  const history = useHistory();

  const handeLinkToDetail = (productId) => {
    history.push(`/detail/${productId}`);
  };

  const handleWishClick = async (e, item) => {
    e.stopPropagation();
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user) {
      const body = {
        id_nha: item.id_nha,
        id_khach_hang: user.id,
      };
      try {
        await axios.post(`${API_KEY}/nha/yeu_thich`, body);
        alert("them thanh cong");
      } catch (e) {
        console.log(e);
      }
    } else {
      history.push("/login");
    }
  };

  let addressStr = `${item.so_nha} ${item.duong} ${item.quan} Tp.${item.thanh_pho}`;

  return (
    <div
      className="property shadow"
      onClick={() => handeLinkToDetail(item.id_nha)}
    >
      <div className="property__top position-relative">
        <span className="property__top-time position-absolute">9 days ago</span>
        {!hideWish && (
          <i
            onClick={(e) => handleWishClick(e, item)}
            className="property__top-wish far fa-heart position-absolute"
          ></i>
        )}
        <img
          src={`${API_IMAGES}/${item.banner}`}
          alt="property image"
          className="img-fluid banner-img"
        />

        <p className="property__top-name position-absolute">
          {item.quan + "/ " + item.thanh_pho}
        </p>
      </div>

      <div className="property__information p-3">
        <div className="property__information-heading d-flex justify-content-between">
          <p className="property__information-price font-weight-bold">
            {item.gia} VND
          </p>
          <ul className="property__information-detail align-items-center d-flex">
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
          {addressStr.length > 38
            ? addressStr.slice(0, 38) + "..."
            : addressStr}
        </p>
        <div className="property__information-type">
          <span
            className="property__information-status"
            style={{ background: item.hinh_thuc === 1 ? "red" : "blue" }}
          ></span>
          <span className="property__information-text-status">
            {item.hinh_thuc === 1 ? "Nhà bán" : "Nhà cho thuê"}
          </span>
        </div>
      </div>
    </div>
  );
};

Property.propTypes = {};

export default Property;
