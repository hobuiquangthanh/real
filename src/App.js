import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Dashboard";
import CollectionsPage from "./components/Home/Pages/CollectionsPage/CollectionsPage";
import DetailPage from "./components/Home/Pages/DetailPage/DetailPage";
import { Login } from "./components/Home/Auth/Login"
import "./App.css";
import './index.css';
import Wishlish from "./components/Home/Pages/Wishlish/Wishlish";
import ChangePassword from "./components/Home/Auth/ChangePassword";
import ForgotPassword from "./components/Home/Auth/ForgotPassword";
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {true ? <Redirect to="/home" /> : <Redirect to="/admin" />}
                </Route>
                <Route path={`/collections/:collectionType`}>
                    <CollectionsPage />
                </Route>
                <Route path="/detail/:propertyId">
                    <DetailPage />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/wishlish">
                    <Wishlish />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/changepass/:id">
                    <ChangePassword />
                </Route>
                <Route path="/forgotpass/:id">
                    <ForgotPassword />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}