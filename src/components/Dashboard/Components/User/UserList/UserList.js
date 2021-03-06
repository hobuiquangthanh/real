import React from 'react';
import PropTypes from 'prop-types';

UserList.propTypes = {
    
};

function UserList(props) {
    return (
        <table id="selection-datatable"  className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}  >
                                        <thead>
                                            <tr>
                                                <th>Họ Và Tên</th>
                                                <th>Email</th>
                                                <th>Vai Trò</th>
                                                <th>Chức Năng</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Họ và tên người dùng</td>
                                                <td>Email người dùng @mail.com</td>
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
                                            
                                        </tbody>
                                    </table>
    );
}

export default UserList;