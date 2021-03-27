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
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {true ? <Redirect to="/home" /> : <Redirect to="/admin" />}
                </Route>
                <Route path={`/collections/:location`}>
                    <CollectionsPage />
                </Route>
                <Route path="/detail/:propertyId">
                    <DetailPage />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}