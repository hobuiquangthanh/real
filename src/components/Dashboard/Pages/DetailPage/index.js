import React from 'react';
import PropTypes from 'prop-types';
import OwnerList from './OwnerInfo/OwnerList';
import EstateInfo from './EstateInfo/EstateInfo';

Detail.propTypes = {
    
};

function Detail(props) {
    const ownerInfo = [
        {
            id: 1,
            avatar: "images/users/avatar-3.jpg",
            address: "Địa Chỉ Bất Động Sản<",
            ownerName: "Tên Chủ Sở Hữu",
            about: "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
        }
    ]
    return (
        <div>
            <OwnerList ownerInfo={ownerInfo} />
            <div classname="mt-5">
                <ul classname="nav nav-tabs tabs-bordered">
                    <li classname="nav-item">
                    <a href="#home-b1" data-toggle="tab" aria-expanded="false" classname="nav-link active">
                        Thông Tin
                    </a>
                    </li>
                    <li classname="nav-item">
                    <a href="#profile-b1" data-toggle="tab" aria-expanded="true" classname="nav-link">
                        Chỉnh Sửa
                    </a>
                    </li>
                </ul>
                <div classname="tab-content">
                    <div classname="tab-pane active" id="home-b1">
                        <EstateInfo />
                    </div></div></div>
                    <div classname="tab-pane" id="profile-b1">
                        
                    </div>


        </div>
    );
}

export default Detail;