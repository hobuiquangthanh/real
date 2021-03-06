import React from 'react';
import PropTypes from 'prop-types';

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
                <a href="#">Stanley Jones</a>
                <p className="text-muted m-0">Quản Trị Viên</p>
                </div>
            </div>
            {/*- Sidemenu */}
            <div id="sidebar-menu">
                <ul className="metismenu" id="side-menu">
                <li className="menu-title">Navigation</li>
                <li>
                    <a href="index.html">
                    <i className="ti-home" />
                    <span> Bảng Điều Khiển </span>
                    </a>
                </li>
                <li>
                    <a href="user-table.html">
                    <i className="ti-paint-bucket" />
                    <span> Người Dùng </span>
                    <span className="badge badge-primary float-right">11</span>
                    </a>
                </li>
                <li>
                    <a href="product-table.html">
                    <i className="ti-pie-chart" />
                    <span>  Sản Phẩm</span>
                    <span className="badge badge-primary float-right">5</span>
                    </a>
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