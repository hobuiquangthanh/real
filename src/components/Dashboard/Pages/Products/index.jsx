import React from 'react';
import PropTypes from 'prop-types';
import Products from './ListProducts';

ListProducts.propTypes = {

};

function ListProducts(props) {
    const productList = [
        {
            id: 1,
            Name: "Tên Chủ Sở Hữu",
            Phone: "Phone Number",
            Info: "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            PicUrl: "https://hanhtrinhmouoc2018.thanhnien.vn/img/general/none-avatar.png",
        },
        {
            id: 2,
            Name: "Mark A. McKnight",
            Phone: "Phone Number",
            Info: "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            PicUrl: "https://hanhtrinhmouoc2018.thanhnien.vn/img/general/none-avatar.png",
        },
        {
            id: 3,
            Name: "Robert E. Schroth",
            Phone: "Phone Number",
            Info: "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            PicUrl: "https://hanhtrinhmouoc2018.thanhnien.vn/img/general/none-avatar.png",
        },
        {
            id: 4,
            Name: "Robert E. Schroth",
            Phone: "Phone Number",
            Info: "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            PicUrl: "https://hanhtrinhmouoc2018.thanhnien.vn/img/general/none-avatar.png",
        },
        {
            id: 5,
            Name: "Robert E. Schroth",
            Phone: "Phone Number",
            Info: "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            PicUrl: "https://hanhtrinhmouoc2018.thanhnien.vn/img/general/none-avatar.png",
        },
        {
            id: 6,
            Name: "Robert E. Schroth",
            Phone: "Phone Number",
            Info: "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            PicUrl: "https://hanhtrinhmouoc2018.thanhnien.vn/img/general/none-avatar.png",
        },
    ]
    return (
        <div>
            <Products productList={productList} />
        </div>
    );
}

export default ListProducts;