import React from 'react';
import PropTypes from 'prop-types';

UserItems.propTypes = {
    userItem: PropTypes.object.isRequired,
};

function UserItems({userItem}) {
    return (
        <tr>
            <td>{userItem.name}</td>
                <td>{userItem.email}</td>
                <td>
                    <div className="switchery-demo">
                        <input type="checkbox" checked data-plugin="switchery" data-color="#2b3d51"   />
                    </div>
               </td>
                <td>
                    <div className="button-list">
                        <button className="btn btn-icon btn-danger"> <i className="fas fa-times"></i> </button>
                    </div>
                </td>
        </tr>
    );
}

export default UserItems;