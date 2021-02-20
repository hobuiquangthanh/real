import React, { useState } from "react";
import PropTypes from "prop-types";

import ReactMapGL, { Marker } from "react-map-gl";

// scss
import "./DetailPage.css";

// components
import Header from "../../Common/Header/Header";

const DetailPage = props => {
    const [images, setImages] = useState([1, 2, 3, 4, 5, 6, 7]);

    const [viewport, setViewport] = useState({
        latitude: 10.8007178,
        longitude: 106.6880956,
        scrollZoom: true,
        zoom: 16,
        maxZoom: 20,
        width: "100%",
        height: "200px"
    });

    const [marker, setMarker] = useState({
        latitude: 10.8007178,
        longitude: 106.6880956
    });

    console.log(images);
    return (
        <div className="detail page">
            <Header />

            <div className="container-fluid">
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
                                    <img
                                        src="https://photos.zillowstatic.com/p_e/IS76c3x3zt75q30000000000.jpg"
                                        alt="property images"
                                    />
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
                                <li className="socials__item mr-3">
                                    <i className="far fa-heart mr-2"></i>
                                    Save
                                </li>

                                <li className="socials__item mr-3">
                                    <i className="fas fa-share mr-2"></i>
                                    Share
                                </li>
                                <li className="socials__item">
                                    <i className="fas fa-ellipsis-h mr-2"></i>{" "}
                                    More
                                </li>
                            </ul>
                        </div>
                        {/* info */}
                        <div className="detail__detail--header py-3">
                            <h3 className="property__infor--name h2 text-dark">
                                5161 W Sunset Blvd
                            </h3>

                            <p className=" property__infor--address text-dark">
                                Los Angeles, CA 90027
                            </p>

                            <div className="property__infor mt-4 d-flex">
                                <button className="base-btn mr-2 w-50">
                                    Request to apply
                                </button>
                                <button className="base-btn w-50">
                                    Request a tour
                                </button>
                            </div>
                        </div>

                        {/* maps */}
                        <ReactMapGL
                            {...viewport}
                            mapboxApiAccessToken={
                                process.env.MIX_REACT_APP_MAPBOX_TOKEN
                            }
                            mapStyle="mapbox://styles/khanhnguyen3009/ckhonyzfk14ez1alak9oox2qe"
                            onViewportChange={viewport =>
                                setViewport(() => viewport)
                            }
                        >
                            {/* marker */}
                            <Marker
                                {...marker}
                                offsetLeft={-20}
                                offsetTop={-10}
                            >
                                <i className="fas fa-map-marker-alt text-primary h1"></i>
                            </Marker>
                        </ReactMapGL>

                        <div className="detail__detail--header mt-5">
                            <h2 className="text-dark  h2">Nearby apartment</h2>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

DetailPage.propTypes = {};

export default DetailPage;
