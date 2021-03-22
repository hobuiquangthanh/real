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

    const estateInfo = [
        {
            id: 1,
            ownerName: "Mark A. McKnight",
            phone: "(123) 123 1234",
            email: "johnath@domain.com",
            address: "123 Quang Trung, Q.12, Tp.HCM",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
                        <EstateInfo estateInfo={estateInfo} />
                    </div></div></div>
                    <div classname="tab-pane" id="profile-b1">
                        
                    </div>


        </div>
    );
}

export default Detail;