import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles.js";

import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import OurWOrk from "./pages/OurWork/OurWork.js";
import Nav from "./components/nav/Nav.js";
import MovieDetail from "./pages/MovieDetails/MovieDetails.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route exact path="/work">
          <OurWOrk />
        </Route>
        <Route exact path="/work/:id">
          <MovieDetail />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
