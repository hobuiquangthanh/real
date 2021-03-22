import React from 'react';
import PropTypes from 'prop-types';
import Owner from './Owner';

OwnerList.propTypes = {
    ownerInfo: PropTypes.array,
};

function OwnerList({ownerInfo}) {
    return (
        <div>
            <div>
                {ownerInfo.map(owner => (
                    <div key={owner.id}>
                        <Owner owner={owner} />
                    </div>         
                ))}
            </div>
        </div>
    );
}

export default OwnerList;