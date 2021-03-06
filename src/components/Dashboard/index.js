import React from "react";
import PropTypes from "prop-types";
import Header from "./Common/Header/Header";
import SideBar from "./Common/Side Bar/SideBar";
import { Route, Switch } from "react-router-dom";
import Detail from "./Pages/DetailPage";

const index = props => {
    return (
        <div>
            <Header />
            <SideBar />
            {/* <Detail /> */}
            <Switch>
                <Route path="/admin">

                </Route>
                <Route path="/admin/user">

                </Route>
                <Route path="/admin/products">

                </Route>
            </Switch>
        </div>
    );;
};

export default index;
