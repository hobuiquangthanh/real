import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

Product.propTypes = {
    product : PropTypes.object.isRequired,
};

function Product ({ product  }) {
    return (


        <div className="text-center card-box ribbon-box">
            <div className="member-card">

                <div className="avatar-xl member-thumb mx-auto">
                    <img src={product.PicUrl} className="rounded-circle img-thumbnail"
                        alt="profile-image" />
                    <i className="mdi mdi-information-outline member-star text-success"
                        title="verified product "></i>
                </div>

                <div className="mt-3">
                    <h5 className="mt-2">{product.Name}</h5>
                    <p className="text-muted">Địa Chỉ <span> | </span> <span> <a href="#"
                        className="text-pink">{product.Phone}</a> </span></p>
                </div>

                <p classNameName="text-muted font-13">
                    {product.Info}
                </p>

                <Link to="/admin/:detail"><button type="button" className="btn btn-primary btn-sm mt-2 mr-1">Chi Tiết</button></Link>
                <button type="button" className="btn btn-danger btn-sm mt-2">Xóa</button>

                <ul className="social-links list-inline mt-4 pt-2 mb-0">
                    <li className="list-inline-item">
                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#"
                            data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="#"
                            data-original-title="Twitter"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a title="" data-placement="top" data-toggle="tooltip" classNameName="tooltips" href="#"
                            data-original-title="Skype"><i className="fab fa-skype"></i></a>
                    </li>
                </ul>

                <div className="checkbox checkbox-success" style={{ float: "left" }}>
                    <input id={product.id} type="checkbox" />
                    <label for={product.id}>

                    </label>
                </div>

            </div>

        </div>



    );
}

export default Product ;