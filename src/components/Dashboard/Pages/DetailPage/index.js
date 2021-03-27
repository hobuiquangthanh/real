import React from 'react';
import PropTypes from 'prop-types';
import OwnerList from './OwnerInfo/OwnerList';
import EstateInfo from './EstateInfo/EstateInfo';
import EditInfo from './EditInfo/EditInfo';

Detail.propTypes = {
    
};

function Detail(props) {
    const ownerInfo = [
        {
            id: 1,
            avatar: "images/users/avatar-3.jpg",
            address: "Địa Chỉ Bất Động Sản",
            ownerName: "Tên Chủ Sở Hữu",
            about: "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
        }
    ]

    const estateInfo = [
        {
            id: 1,
            name: "Mark A. McKnight",
            phone: "(123) 123 1234",
            email: "johnath@domain.com",
            address: "123 Quang Trung, Q.12, Tp.HCM",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
    ]

    const editInfo = [
        {
            id: 1,
            name: "Mark A. McKnight",
            phone: "(123) 123 1234",
            email: "johnath@domain.com",
            address: "123 Quang Trung, Q.12, Tp.HCM",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
    ]
    return (
        <div className="content-page">
            <OwnerList ownerInfo={ownerInfo} />
            <div className="mt-5">
                <ul className="nav nav-tabs tabs-bordered">
                    <li className="nav-item">
                    <a href="#home-b1" data-toggle="tab" aria-expanded="false" className="nav-link active">
                        Thông Tin
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#profile-b1" data-toggle="tab" aria-expanded="true" className="nav-link">
                        Chỉnh Sửa
                    </a>
                    </li>
                </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane active" id="home-b1">
                        <EstateInfo estateInfo={estateInfo} />
                    </div>
                    <div className="tab-pane" id="profile-b1">
                        <EditInfo editInfo={editInfo} />
                    </div></div>
        </div>
    );
}

export default Detail;