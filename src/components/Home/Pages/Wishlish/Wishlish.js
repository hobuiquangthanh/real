import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useHistory } from "react-router-dom";


// component
import Nav from "../../Nav/Nav";
import Header from "../../Common/Header/Header";
import Property from "../../Property/Property";

import {API_KEY, MAPBOX_TOKEN} from '../../../../shared/_constant';

// scss
import "../CollectionsPage/CollectionsPage.css";
import {useParams} from "react-router-dom";
import axios from "axios";

const WishlishPage = props => {
    let history = useHistory();

    const [searchResult, setSearchResult] = useState(Array.from(new Array(20)));
    const [loading, setLoading] = useState(true);
    const { collectionType } = useParams();
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        scrollZoom: true,
        zoom: 15,
        width: "100%",
        height: "100%"
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setViewport(prevState => {
                return {
                    ...prevState,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
            });
        });
    }, []);

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await axios.get(`${API_KEY}/nha`)
                setSearchResult(data.data.nha)
                console.log(data)
                setLoading(false)

            } catch(e) {
                console.log(e)
            } finally {
            }
        }
        return fetchData();
    }, [])

    // useEffect(() => {
    // }, [viewport]);

    //
    const handleMarkerClick = (item) => {
        history.push(`/detail/${item.id_nha}`);
    }
    return (
        <div className="collections page">
            <Header />
            <Nav />
            <div className="collections__content">
                {
                    loading && (
                        <div style={{width: '10rem', height: '10rem', margin: '0 auto'}} className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )
                }
                {
                    !loading && (
                        <Fragment>
                            {/* map */}
                            <div className="collections__content-map">
                                <ReactMapGL
                                    {...viewport}
                                    mapboxApiAccessToken={
                                        MAPBOX_TOKEN
                                    }
                                    mapStyle="mapbox://styles/khanhnguyen3009/ckhonyzfk14ez1alak9oox2qe"
                                    onViewportChange={viewport =>
                                        setViewport(() => viewport)
                                    }
                                >
                                    {searchResult.map((item, index) => {
                                        return (
                                            <Marker
                                                key={item.id_nha}
                                                className="marker"
                                                offsetTop={-20}
                                                offsetLeft={-10}
                                                latitude={Number(item.lat)}
                                                longitude={Number(item.lon)}>
                                                <img src="/images/record.png" />
                                                <div className={"custom-popup"}
                                                     onClick={() => handleMarkerClick(item)}
                                                >
                                                    <img src="https://photos.zillowstatic.com/p_e/IS76c3x3zt75q30000000000.jpg" alt=""/>
                                                    <p>{item.mo_ta}</p>
                                                </div>
                                            </Marker>
                                        )
                                    })}
                                    {/*<Marker*/}
                                    {/*    className="marker"*/}
                                    {/*    offsetTop={-20}*/}
                                    {/*    offsetLeft={-10}*/}
                                    {/*    latitude={10.751955737869146}*/}
                                    {/*    longitude={106.6716568534461}>*/}
                                    {/*    <img src="https://img.icons8.com/color/40/000000/marker.png" />*/}
                                    {/*    <div className={"custom-popup"}*/}
                                    {/*         onClick={handleMarkerClick}*/}
                                    {/*    >*/}
                                    {/*        <img src="https://photos.zillowstatic.com/p_e/IS76c3x3zt75q30000000000.jpg" alt=""/>*/}
                                    {/*        <p>lorem</p>*/}
                                    {/*    </div>*/}
                                    {/*</Marker>*/}

                                </ReactMapGL>
                            </div>

                            {/* search result */}
                            <div className="collections__content-result">
                                <div className="search-result p-3">
                                    <h3 className="search-result__title">
                                        TPHCM - District 2 Listing
                                    </h3>

                                    <div className="d-flex justify-content-between">
                                        <p>1,557 result</p>
                                        <div className="search-result__sort">
                                <span className="h3 font-weight-bold">
                                    Sort By:{" "}
                                </span>
                                            <div className="search-result__select border px-2 d-inline-block">
                                                <span>Newest</span>
                                                <i className="ml-2 fas fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* properties */}
                                    <div className="d-flex justify-content-between mt-3 flex-wrap">
                                        {searchResult.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="search-result__item my-2"
                                                >
                                                    <Property hideWish={true} item={item} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* end properties */}
                                </div>
                            </div>
                        </Fragment>
                    )
                }
            </div>
        </div>
    );
};

WishlishPage.propTypes = {};

export default WishlishPage;