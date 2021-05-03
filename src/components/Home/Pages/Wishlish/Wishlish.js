import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useHistory, useLocation } from "react-router-dom";

// component
import Nav from "../../Nav/Nav";
import Header from "../../Common/Header/Header";
import Property from "../../Property/Property";

import {
  API_IMAGES,
  API_KEY,
  MAPBOX_TOKEN,
} from "../../../../shared/_constant";

// scss
import "../CollectionsPage/CollectionsPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const WishlishPage = (props) => {
  let history = useHistory();
  let query = useQuery();

  const [searchResult, setSearchResult] = useState(Array.from(new Array(20)));
  const [loading, setLoading] = useState(true);
  const { collectionType } = useParams();
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    scrollZoom: true,
    zoom: 15,
    width: "100%",
    height: "100%",
  });
  //
  // useEffect(() => {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //         setViewport(prevState => {
  //             return {
  //                 ...prevState,
  //                 latitude: position.coords.latitude,
  //                 longitude: position.coords.longitude
  //             };
  //         });
  //     });
  // }, []);

  useEffect(() => {
    const type = query.get("type");
    const search = query.get("search");

    const fetchData = async () => {
      try {
        const auth = JSON.parse(localStorage.getItem("auth"));
        setLoading(true);
        const data = await axios.get(`${API_KEY}/nha/yeu_thich/${auth.id}`);
        const realData = await axios.get(`${API_KEY}/nha`);
        if (data.data.status === "error") {
          setSearchResult([]);
          setLoading(false);
          return;
        }

        const wishlish = [...data.data.nha].map((item) => {
          return realData.data.nha.find((real) => real.id_nha === item.id_nha);
        });
        console.log(wishlish);
        if (type && !search) {
          console.log("ccccccc");
          let searchResult = [...wishlish].filter((item) => {
            return item.hinh_thuc === Number(type);
          });

          setSearchResult(searchResult);
          if (searchResult.length === 0) {
            setLoading(false);
            return;
          }
          setViewport((prevState) => ({
            ...prevState,
            latitude: Number(searchResult[0].lat),
            longitude: Number(searchResult[0].lon),
          }));
          setLoading(false);
          return;
        }

        if (type && search) {
          console.log("bbbbb");
          let searchResult = [...wishlish].filter((item) => {
            if (
              item.hinh_thuc === Number(type) &&
              item.quan.toLowerCase() === search.toLowerCase()
            ) {
              return item;
            }
            return false;
          });
          setSearchResult(searchResult);
          if (searchResult.length === 0) {
            setLoading(false);
            return;
          }
          setViewport((prevState) => ({
            ...prevState,
            latitude: Number(searchResult[0].lat),
            longitude: Number(searchResult[0].lon),
          }));
          return;
        }
        if (!type && search) {
          console.log("aaaaaaaaaaa");
          let searchResult = [...wishlish].filter((item) => {
            if (item.quan.toLowerCase() === search.toLowerCase()) {
              return item;
            }
            return false;
          });
          setSearchResult(searchResult);
          setLoading(false);

          if (searchResult.length === 0) {
            return;
          }
          setViewport((prevState) => ({
            ...prevState,
            latitude: Number(searchResult[0].lat),
            longitude: Number(searchResult[0].lon),
          }));

          return;
        }
        setSearchResult(wishlish);
        if (searchResult.length === 0) {
          setLoading(false);
          return;
        }
        setViewport((prevState) => ({
          ...prevState,
          latitude: Number(wishlish[0].lat),
          longitude: Number(wishlish[0].lon),
        }));
        setLoading(false);
      } catch (e) {
        console.log(e, "1111111");
      } finally {
      }
    };
    return fetchData();
  }, []);

  // useEffect(() => {
  // }, [viewport]);

  //
  const handleMarkerClick = (item) => {
    history.push(`/detail/${item.id_nha}`);
  };

  const onSearch = (search) => {
    const type = query.get("type");
    if (type) {
      window.location = `http://localhost:3000/wishlish?search=${search}&type=${type}`;
      return;
    }
    window.location = `http://localhost:3000/wishlish?search=${search}`;
  };
  return (
    <div className="collections page">
      <Header />
      <Nav handleSearch={onSearch} isWish={true} />
      <div className="collections__content">
        {loading && (
          <div
            style={{ width: "10rem", height: "10rem", margin: "0 auto" }}
            className="spinner-border text-primary"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {!loading && (
          <Fragment>
            {/* map */}
            <div className="collections__content-map">
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/khanhnguyen3009/ckhonyzfk14ez1alak9oox2qe"
                onViewportChange={(viewport) => setViewport(() => viewport)}
              >
                {searchResult.map((item, index) => {
                  return (
                    <Marker
                      key={item.id_nha}
                      className="marker"
                      offsetTop={-20}
                      offsetLeft={-10}
                      latitude={Number(item.lat)}
                      longitude={Number(item.lon)}
                    >
                      <img src="/images/record.png" />
                      <div
                        className={"custom-popup"}
                        onClick={() => handleMarkerClick(item)}
                      >
                        <img src={`${API_IMAGES}/${item.banner}`} alt="" />
                        <p>{item.duong}</p>
                      </div>
                    </Marker>
                  );
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
                <h3 className="search-result__title">Wishlish của bạn</h3>

                <div className="d-flex justify-content-between">
                  <p>{searchResult.length} Wishlish item</p>
                </div>

                {/* properties */}
                <div className="d-flex justify-content-between mt-3 flex-wrap">
                  {searchResult.map((item, index) => {
                    return (
                      <div key={index} className="search-result__item my-2">
                        <Property hideWish={true} item={item} />
                      </div>
                    );
                  })}
                </div>
                {/* end properties */}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

WishlishPage.propTypes = {};

export default WishlishPage;
