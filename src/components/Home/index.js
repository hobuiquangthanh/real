import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// styles
import "./scss/index.css";

// libs
import { Switch, Route, useRouteMatch } from "react-router-dom";

// components
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import Test from "./Pages/test";
import HomePage from "./Pages/HomePage/HomePage";
import SearchBar from "./SearchBar/SearchBar";


// libs
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Index = () => {


  const { path } = useRouteMatch;

  const [hideOnScroll, setHideOnScroll] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y < -80;
    setHideOnScroll(isShow);
  }, [hideOnScroll])
  return (
    <div>
      { hideOnScroll && <SearchBar />}
      <Header />
      <Switch>
        <Route exact path={path}>
          <HomePage />
        </Route>

        <Route exact path={`${path}/:topicId`}>
          <Test />
        </Route>

      </Switch>
      <Footer />
    </div>
  )
}



export default Index
