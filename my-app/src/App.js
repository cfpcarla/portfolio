import React, { useState } from "react";
import "./App.css";
import { theme } from "./styles/theme";
import { Box, ThemeProvider } from "@material-ui/core";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/home";
import Service from "./components/Service";

import { HOME, ABOUT, CONTACT, SERVICE } from "./controller/nav-controller";
import Footer from "./components/footer";

function App() {
  //SET WHICH TAB YOU WANT TO WORK IN
  const [display, setDisplay] = useState(HOME);
  return (
    <ThemeProvider theme={theme}>
      <Navigation setDisplay={setDisplay}></Navigation>
      <div>
        <Box display={display === HOME ? "block" : "none"}>
          <Home setDisplay={setDisplay} />
        </Box>
        <Box display={display === ABOUT ? "block" : "none"}>
          <About />
        </Box>
        <Box display={display === CONTACT ? "block" : "none"}>
          <Contact />
        </Box>
        <Box display={display === SERVICE ? "block" : "none"}>
          <Service />
        </Box>
      </div>
      <Footer setDisplay={setDisplay} />
    </ThemeProvider>
  );
}

export default App;
