import React, {useEffect, useState} from "react";
import Property from "../Property/Property";

// css
import "./News.css";
import axios from "axios";
import {API_KEY} from "../../../shared/_constant";

const News = props => {
    const [properties, setProperties] = useState([1, 2, 3, 4, 5, 6]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const realData = await axios.get(`${API_KEY}/nha`);
                setProperties(realData.data.nha.splice(0,6))
                setLoading(false)
            } catch(e) {
                console.log(e)
            }
        }

        fetchApi()
    }, [])

    return (
        <section className="section news">
            <div className="container">
                <h2 className="section__title">Recent News</h2>
                {
                    loading && (
                        <div style={{width: '10rem', height: '10rem', margin: '20px auto'}} className="spinner-border text-primary mx-auto" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )
                }
                {
                    !loading && (
                        <div className="d-flex justify-content-between mt-3 news__items flex-wrap">


                            {
                                properties.map((item) => {
                                    return (
                                        <div key={item.id_nha} className="news__items--item my-2">
                                            <Property  item={item} />
                                        </div>
                                    )
                                })

                            }
                        </div>
                    )
                }
            </div>
        </section>
    );
};

News.propTypes = {};

export default News;
