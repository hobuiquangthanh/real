import React, { useState } from "react";
import Property from "../Property/Property";

// css
import "./News.css";

const News = props => {
    const [properties, setProperties] = useState([1, 2, 3, 4, 5, 6]);

    return (
        <section className="section news">
            <div className="container">
                <h2 className="section__title">Recent News</h2>

                <div className="d-flex justify-content-between mt-3 news__items flex-wrap">


                    {
                        properties.map((item) => {
                            return (
                                <div key={item} className="news__items--item my-2">
                                    <Property />
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </section>
    );
};

News.propTypes = {};

export default News;
