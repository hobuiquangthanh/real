import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList/UserList';



User.propTypes = {};


function User(props) {
    const user = [
        {
            id: 1,
            name: 'Tung Vu1',
            email: 'vuvantung1@gmail.com',
        },
        {
            id: 2,
            name: 'Tung Vu1',
            email: 'vuvantung1@gmail.com',
        },
        {
            id: 3,
            name: 'Tung Vu1',
            email: 'vuvantung1@gmail.com',
        },
        {
            id:4,
            name: 'Tung Vu1',
            email: 'vuvantung1@gmail.com',
        },
        {
            id: 5,
            name: 'Tung Vu1',
            email: 'vuvantung1@gmail.com',
        },
        {
            id: 6,
            name: 'Tung Vu1',
            email: 'vuvantung1@gmail.com',
        },
        {
            id: 7,
            name: 'Tung Vu1',
            email: 'vuvantung1@gmail.com',
        }
        ]
    return (
            <div className="content-page">
                <UserList user={user}/>                
            </div>
            

    );
}

export default User;