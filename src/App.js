import React from "react";
import GlobalStyle from "./GlobalStyles.js";

import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Nav from "./components/nav/Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
