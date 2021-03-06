import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <div>
        {/* Topbar Start */}
            <div className="navbar-custom">
            <ul className="list-unstyled topnav-menu float-right mb-0">
                <li className="dropdown d-none d-lg-block">
                <a className="nav-link dropdown-toggle mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="images/flags/us.jpg" alt="user-image" className="mr-2" height={12} /> <span className="align-middle">English <i className="mdi mdi-chevron-down" /> </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="images/flags/spain.jpg" alt="user-image" className="mr-2" height={12} /> <span className="align-middle">Spanish</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="images/flags/italy.jpg" alt="user-image" className="mr-2" height={12} /> <span className="align-middle">Italian</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="images/flags/french.jpg" alt="user-image" className="mr-2" height={12} /> <span className="align-middle">French</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="images/flags/russia.jpg" alt="user-image" className="mr-2" height={12} /> <span className="align-middle">Russian</span>
                    </a>
                </div>
                </li>
                <li className="dropdown notification-list">
                <a className="nav-link dropdown-toggle nav-user mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="images/users/avatar-1.jpg" alt="user-image" className="rounded-circle" />
                    <span className="pro-user-name ml-1">
                    Maxine K  <i className="mdi mdi-chevron-down" /> 
                    </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                    {/* item*/}
                    <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                    </div>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="mdi mdi-account-outline" />
                    <span>Profile</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="mdi mdi-settings-outline" />
                    <span>Settings</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="mdi mdi-lock-outline" />
                    <span>Lock Screen</span>
                    </a>
                    <div className="dropdown-divider" />
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="mdi mdi-logout-variant" />
                    <span>Logout</span>
                    </a>
                </div>
                </li>
                <li className="dropdown notification-list">
                <a href="javascript:void(0);" className="nav-link right-bar-toggle">
                    <i className="mdi mdi-settings-outline noti-icon" />
                </a>
                </li>
            </ul>
            {/* LOGO */}
            <div className="logo-box">
                <a href="index.html" className="logo text-center logo-dark">
                <span className="logo-lg">
                    <img src="images/logo-dark.png" alt="" height={26} />
                    {/* <span class="logo-lg-text-dark">Simple</span> */}
                </span>
                <span className="logo-sm">
                    {/* <span class="logo-lg-text-dark">S</span> */}
                    <img src="images/logo-sm.png" alt="" height={22} />
                </span>
                </a>
                <a href="index.html" className="logo text-center logo-light">
                <span className="logo-lg">
                    <img src="images/logo-light.png" alt="" height={26} />
                    {/* <span class="logo-lg-text-light">Simple</span> */}
                </span>
                <span className="logo-sm">
                    {/* <span class="logo-lg-text-light">S</span> */}
                    <img src="images/logo-sm.png" alt="" height={22} />
                </span>
                </a>
            </div>
            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                <li>
                <button className="button-menu-mobile">
                    <i className="mdi mdi-menu" />
                </button>
                </li>
                <li className="d-none d-sm-block">
                <form className="app-search">
                    <div className="app-search-box">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..." />
                        <div className="input-group-append">
                        <button className="btn" type="submit">
                            <i className="fas fa-search" />
                        </button>
                        </div>
                    </div>
                    </div>
                </form>
                </li>
            </ul>
            </div>
            {/* end Topbar */}

        </div>
    );
}

export default Header;