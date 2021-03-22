import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

SideBar.propTypes = {
    
};

function SideBar(props) {
    return (
        <div>
        {/* ========== Left Sidebar Start ========== */}
            <div className="left-side-menu">
            <div className="user-box">
                <div className="float-left">
                <img src="images/users/avatar-1.jpg" alt="" className="avatar-md rounded-circle" />
                </div>
                <div className="user-info">
                <Link to="/admin">Stanley Jones</Link>
                <p className="text-muted m-0">Quản Trị Viên</p>
                </div>
            </div>
            {/*- Sidemenu */}
            <div id="sidebar-menu">
                <ul className="metismenu" id="side-menu">
                <li className="menu-title">Navigation</li>
                <li>
                    <Link to="/admin">
                    <i className="ti-home" />
                    <span> Bảng Điều Khiển </span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/user">
                    <i className="ti-paint-bucket" />
                    <span> Người Dùng </span>
                    <span className="badge badge-primary float-right">11</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/products">
                    <i className="ti-pie-chart" />
                    <span>  Sản Phẩm</span>
                    <span className="badge badge-primary float-right">5</span>
                    </Link>
                </li>
                </ul>
            </div>
            {/* End Sidebar */}
            <div className="clearfix" />
            </div>
            {/* Left Sidebar End */}

        </div>
    );
}

export default SideBar;