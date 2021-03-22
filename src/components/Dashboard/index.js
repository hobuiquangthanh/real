import React from "react";
import PropTypes from "prop-types";
import Header from "./Common/Header/Header";
import SideBar from "./Common/Side Bar/SideBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import Products from "./Pages/Products"
import Detail from "./Pages/DetailPage";
import User from "./Pages/User/User";

const index = props => {
    return (
        <div>
            <Header />
            <SideBar />
            {/* <Detail /> */}
            <Switch>
                <Route path="/admin" exact>
                </Route>
                <Route path="/admin/user">
                    <User/>
                </Route>
                <Route path="/admin/products">
                    <Products />
                </Route>
                <Route path="/admin/:detail" exact>
                    <Detail />
                </Route>
            </Switch>
        </div>
    );;
};

export default index;
