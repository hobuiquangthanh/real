import React from 'react';
import PropTypes from 'prop-types';

OwnerList.propTypes = {
    ownerInfo: PropTypes.array,
};

OwnerList.defaultProp = {
    ownerInfo: [],
};

function OwnerList({ownerInfo}) {
    return (
        <div>
            <div>
                {ownerInfo.map(owner => (
                    <div key={owner.id}>
                        <div>
            <div className="content-page">
                <div>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="p-0 text-center">
                            <div className="member-card">
                            <div className="avatar-xxl member-thumb mb-2 center-page mx-auto">
                                <img src={owner.avatar} className="rounded-circle img-thumbnail" alt="profile-image" />
                                <i className="mdi mdi-star-circle member-star text-success" title="verified user">
                                </i></div><i className="mdi mdi-star-circle member-star text-success" title="verified user"></i>
                                <div className>
                                <h5 className="mt-3">{owner.address}</h5>
                                <p className="text-muted">{owner.ownerName}</p>
                                </div>
                                <p className="text-muted mt-2">
                                    {owner.about}
                                </p>
                                </div></div></div></div></div></div></div></div>
                    </div>         
                ))}
            </div>
        </div>
    );
}

export default OwnerList;