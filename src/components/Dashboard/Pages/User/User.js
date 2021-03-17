import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserList from '../../Components/User/UserList/UserList';


User.propTypes = {
    
};

function User(props) {
    return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div>
                                    <h4 className="header-title mb-3">Người Dùng</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">                                
                            <div className="mt-5">
                                    <h5 className="font-14">Bảng thống kê người dùng</h5>
                                    <p className="sub-header">
                                        This example shows the multi option. Note how a click on a row will toggle its selected state without effecting other rows, unlike the os and single options shown in other examples.
                                    </p>
                                    <UserList/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default User;