import React from 'react';
import PropTypes from 'prop-types';
import Product from '../ProductsItems';
import "./style.css";



ListProduct.propTypes = {
    productList: PropTypes.array.isRequired,
};
ListProduct.defaultProps = {
    productList: [],
};
function ListProduct({ productList }) {
    return (
        <div className="listProduct">
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-8">
                                <div className="float-left">
                                    <h2 className="header-title mb-3">Danh sách người dùng</h2>
                                </div>
                            </div>
                            <div className="col-4">
                                <button type="button" className="btn btn-danger btn-rounded float-right">Xóa Đã Chọn</button>
                            </div>
                        </div>
                        <div className="row">
                            { productList.map(product => (
                                <div className="col-lg-4" key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ListProduct;