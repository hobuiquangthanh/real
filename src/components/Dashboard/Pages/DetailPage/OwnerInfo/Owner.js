import React from 'react';
import PropTypes from 'prop-types';

Owner.propTypes = {
    owner: PropTypes.object,
};

function Owner({owner}) {
    return (
        <div>
            <div classname="content-page">
                <div classname="content">
                    <div classname="container-fluid">
                    <div classname="row">
                        <div classname="col-md-12">
                        <div classname="p-0 text-center">
                            <div classname="member-card">
                            <div classname="avatar-xxl member-thumb mb-2 center-page mx-auto">
                                <img src={owner.avatar} classname="rounded-circle img-thumbnail" alt="profile-image" />
                                <i classname="mdi mdi-star-circle member-star text-success" title="verified user">
                                </i></div><i classname="mdi mdi-star-circle member-star text-success" title="verified user">
                                <div classname>
                                <h5 classname="mt-3">{owner.address}</h5>
                                <p classname="text-muted">{owner.ownerName}</p>
                                </div>
                                <p classname="text-muted mt-2">
                                    {owner.about}
                                </p>
                            </i></div><i classname="mdi mdi-star-circle member-star text-success" title="verified user">
                            </i></div><i classname="mdi mdi-star-circle member-star text-success" title="verified user">
                        </i></div><i classname="mdi mdi-star-circle member-star text-success" title="verified user">
                        </i></div><i classname="mdi mdi-star-circle member-star text-success" title="verified user">
                    </i></div></div></div>

        </div>
    );
}

export default Owner;