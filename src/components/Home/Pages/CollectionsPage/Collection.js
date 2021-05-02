import React, {useState, useEffect, Fragment, useLayoutEffect, useRef} from "react";
import PropTypes from "prop-types";

import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useHistory, useLocation } from "react-router-dom";


// component
import Nav from "../../Nav/Nav";
import Header from "../../Common/Header/Header";
import Property from "../../Property/Property";

import {API_KEY, MAPBOX_TOKEN} from '../../../../shared/_constant';

// scss
import "./CollectionsPage.css";
import {useParams} from "react-router-dom";
import axios from "axios";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const CollectionsPage = props => {
    let history = useHistory();
    let query = useQuery();
    const LIMIT = 10
    const SKIP = 10

    const [searchResult, setSearchResult] = useState(Array.from(new Array(20)));
    const [realData, setRealData] = useState([])
    const [loading, setLoading] = useState(true);
    const [loadmore, setLoadmore] = useState(false);
    const { collectionType } = useParams();
    const [searchStr, setSearchStr] = useState(null)
    const [page, setPage] = useState(1)
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        scrollZoom: true,
        zoom: 15,
        width: "100%",
        height: "100%"
    });

    useEffect(() => {
        const search = query.get('search')

        if(search) return
        navigator.geolocation.getCurrentPosition(function(position) {
            setViewport(prevState => {
                return {
                    ...prevState,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,

                };
            });
        });
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true)
            const data = await axios.get(`${API_KEY}/nha`)
            setRealData(data.data.nha)
            setSearchResult([...data.data.nha].splice(page - 1, LIMIT))
            setLoading(false)

            return data.data.nha;
        } catch(e) {
            console.log(e)
        }
    }

    //fetch home
    useEffect(() => {
        const search = query.get('search')
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await axios.get(`${API_KEY}/nha`)
                if(search) {
                    const searchData = [...data.data.nha].filter((item) => {
                        const district = item.quan.toLowerCase()
                        if(district === search.toLowerCase()) {
                            return item
                        }
                    })

                    setRealData(searchData)
                    setSearchResult([...searchData].splice(0, LIMIT))
                    setSearchStr(search)
                    setLoading(false)
                    setViewport(prevState => {
                        return {
                            ...prevState,
                            latitude: Number(searchData[0].lat),
                            longitude: Number(searchData[0].lon)

                        };
                    });
                    return
                }
                setSearchResult(null)
                setRealData(data.data.nha)
                setSearchResult([...data.data.nha].splice(page - 1, LIMIT))
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

    const handleLoadMore = () => {
        setPage(page + 1)
    }

    const firstUpdate = useRef(true)
    useLayoutEffect(() => {
        if(firstUpdate.current) {
            console.log('first update')
            firstUpdate.current = false;
            return;
        }
        setLoadmore(true)
        const data = setTimeout(() => {
            const dataFetch = [...realData].splice(SKIP * (page - 1), LIMIT)
            const data = searchResult.concat([...dataFetch]);
            setSearchResult(data)
            if(dataFetch.length > 0) {
                setViewport({
                    ...viewport,
                    zoom: 15,
                    latitude: Number(dataFetch[0].lat),
                    longitude: Number(dataFetch[0].lon)
                })
            }
            setLoadmore(false)
        }, 1500)

        return () => { clearTimeout(data) }

    }, [page])



    const onSearch = async (search) => {
        window.location = `http://localhost:3000/collections?search=${search}`
        // if(!search) {
        //     setPage(1)
        //     await fetchData();
        //     return
        // }
        // const data = await fetchData()
        // const searchData = [...data].filter((item) => {
        //     const district = item.quan.toLowerCase()
        //     if(district === search.toLowerCase()) {
        //         return item
        //     }
        // })
        // setSearchStr(search)
        // setSearchResult([...searchData].splice(0, LIMIT))
        // setRealData(searchData)
        // setPage(1)
        // if(searchData.length > 0) {
        //     setViewport({
        //         ...viewport,
        //         latitude: Number(searchData[0].lat),
        //         longitude: Number(searchData[0].lon)
        //     })
        // }
    }
    return (
        <div className="collections page">
            <Header />
            <Nav handleSearch={onSearch} />
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
                                    { searchStr !== null &&  <div className="d-flex justify-content-between">
                                        <p>{ realData.length } Kết quả</p>
                                    </div>  }

                                    {/* properties */}
                                    <div className="d-flex justify-content-between mt-3 flex-wrap">
                                        {searchResult.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="search-result__item my-2"
                                                >
                                                    <Property item={item} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* end properties */}

                                    {
                                        loadmore
                                            ?
                                            (
                                                <div style={{width: '5rem', height: '5rem', margin: '0 auto', display: 'block'}} className="spinner-border text-primary" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            )
                                            :
                                            (
                                                <div className="loadmore-section mt-3 mx-auto text-center">
                                                    <p className="mb-2">Bạn đã xem {searchResult.length} trên {realData.length} bất động sản</p>
                                                    { searchResult.length !== realData.length && <button onClick={handleLoadMore} className="loadmore-btn mx-auto">Load More</button> }
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </Fragment>
                    )
                }
            </div>
        </div>
    );
};

CollectionsPage.propTypes = {};

export default CollectionsPage;
