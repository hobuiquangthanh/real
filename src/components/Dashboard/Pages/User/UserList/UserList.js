import React from 'react';
import PropTypes from 'prop-types';
import UserItems from '../UserItems/UserItems';

UserList.propTypes = {
    user: PropTypes.array.isRequired,
};
UserList.defaultProps = {
    user: [],
}

function UserList({user}) {
    return (
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
                                    <table
                                        id="selection-datatable"
                                        className="table table-bordered dt-responsive nowrap"
                                        style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}
                                        >
                                        <thead>
                                            <tr>
                                            <th>Họ Và Tên</th>
                                            <th>Email</th>
                                            <th>Vai Trò</th>
                                            <th>Chức Năng</th>
                                            </tr>
                                        </thead>

                                            {user.map(userItem =>(
                                                <tbody key={userItem.id}>
                                                    <UserItems userItem={userItem} />
                                                </tbody>
                                                        ))}
                                                
                                            
                                        </table>
                                </div>
                        </div>
                    </div>
                </div>
    );
}

export default UserList;