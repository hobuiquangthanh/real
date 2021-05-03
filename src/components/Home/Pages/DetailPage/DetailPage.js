import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import ReactMapGL, { Marker } from "react-map-gl";

// scss
import "./DetailPage.css";

// components
import Header from "../../Common/Header/Header";
import {
  API_IMAGES,
  API_KEY,
  MAPBOX_TOKEN,
} from "../../../../shared/_constant";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const DetailPage = (props) => {
  let history = useHistory();
  const [images, setImages] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [realData, setRealData] = useState({});
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const [viewport, setViewport] = useState({
    latitude: 10.8007178,
    longitude: 106.6880956,
    scrollZoom: true,
    zoom: 16,
    maxZoom: 20,
    width: "100%",
    height: "200px",
  });

  const [marker, setMarker] = useState({
    latitude: 10.8007178,
    longitude: 106.6880956,
  });
  const params = useParams().propertyId;

  useEffect(() => {
    const fetchApi = async () => {
      const data = await axios.get(`${API_KEY}/nha/${params}`);
      const user = await axios.get(
        `${API_KEY}/khach_hang/${data.data.nha.id_khach_hang}`
      );
      setUserData(user.data);
      setRealData(data.data);

      const imgs = data.data.nha.hinh.split(",");
      setImages(imgs);
      setLoading(false);
      setMarker({
        latitude: Number(data.data.nha.lat),
        longitude: Number(data.data.nha.lon),
      });
      setViewport({
        ...viewport,
        latitude: Number(data.data.nha.lat),
        longitude: Number(data.data.nha.lon),
      });
    };

    fetchApi();
  }, []);

  const handleWishlish = async () => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user) {
      const body = {
        id_nha: realData.nha.id_nha,
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

  return (
    <div className="detail page">
      <Header />

      <div className={`container-fluid ${loading ? "text-center" : ""}`}>
        {loading && (
          <div
            style={{ width: "10rem", height: "10rem", margin: "20px auto" }}
            className="spinner-border text-primary"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {!loading && (
          <main className="detail__content">
            <div className="detail__content--img">
              {images.map((image, index) => {
                return (
                  <div
                    className={`detail__images-wrapper ${
                      index === 0 ? "main" : ""
                    }`}
                    key={index}
                  >
                    <img src={`${API_IMAGES}/${image}`} alt="property images" />
                  </div>
                );
              })}
            </div>

            <div className="detail__content--detail container-fluid">
              <div className="detail__detail--header d-flex justify-content-between align-items-center py-3">
                <div className="logo">
                  <h2>Logo</h2>
                </div>

                {/* filter */}
                <ul className="socials d-flex">
                  <li onClick={handleWishlish} className="socials__item mr-3">
                    <i className="far fa-heart mr-2"></i>
                    Lưu
                  </li>

                  <li className="socials__item">
                    <i className="fas fa-ellipsis-h mr-2"></i>{" "}
                    <a href={`mailto:${userData.khach_hang.email}`}>Liên hệ</a>
                  </li>
                </ul>
              </div>
              {/* info */}
              <div className="detail__detail--header py-3">
                <h3 className="property__infor--name h2 text-dark">
                  {realData.nha.so_nha +
                    " " +
                    realData.nha.duong +
                    " / " +
                    realData.nha.quan}
                </h3>

                <p className=" property__infor--address text-dark">
                  {realData.nha.thanh_pho}
                </p>
              </div>

              {/* maps */}
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/khanhnguyen3009/ckhonyzfk14ez1alak9oox2qe"
                onViewportChange={(viewport) => setViewport(() => viewport)}
              >
                {/* marker */}
                <Marker {...marker} offsetLeft={-20} offsetTop={-10}>
                  <img src="/images/record.png" />
                </Marker>
              </ReactMapGL>

              <div className="detail__detail--header mt-5">
                <h2 className="text-dark  h2">Thông tin nhà</h2>
              </div>
              <div className="detail__detail--content mt-3">
                <p className="detail__description">{realData.nha.mo_ta}</p>
              </div>

              <div className="detail__detail--header mt-5">
                <h2 className="text-dark  h2">Chi tiết nhà</h2>
              </div>

              <div className="detail__detail--fact mt-3 row justify-content-between">
                <div className="fact col-lg-6 ">
                  <span>
                    <i className="fas fa-home"></i>
                    <span className="ml-2 font-24 font-weight-bold">
                      Diện Tích:{""}
                    </span>
                  </span>
                  <span>{realData.nha.dien_tich}m2</span>
                </div>
                <div className="fact col-lg-6">
                  <span>
                    <i className="fas fa-home"></i>
                    <span className="ml-2 font-24 font-weight-bold">
                      Diện Tích:{" "}
                    </span>
                  </span>
                  <span>{realData.nha.dien_tich}</span>
                </div>
                <div className="fact col-lg-6 my-4">
                  <span>
                    <i className="fas fa-restroom"></i>
                    <span className="ml-2 font-24 font-weight-bold">
                      Số toilet:{" "}
                    </span>
                  </span>
                  <span>{realData.nha.so_toilet}</span>
                </div>
                <div className="fact col-lg-6 my-4">
                  <span>
                    <i className="fas fa-house-user"></i>
                    <span className="ml-2 font-24 font-weight-bold">
                      Số phòng:{" "}
                    </span>
                  </span>
                  <span>{realData.nha.so_phong}</span>
                </div>
                <div className="fact col-lg-6">
                  <span>
                    <i className="fas fa-clock"></i>
                    <span className="ml-2 font-24 font-weight-bold">
                      Ngày đăng:{" "}
                    </span>
                  </span>
                  <span>{realData.nha.ngay_tao}</span>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

DetailPage.propTypes = {};

export default DetailPage;
