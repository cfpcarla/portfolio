import React, { useState } from "react";
import "./App.css";
import { theme } from "./styles/theme";
import { Box, ThemeProvider } from "@material-ui/core";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Post from "./components/Post";
import Home from "./components/home";
import Project from "./components/Project";
import Contact from "./components/Contact";

import {
  HOME,
  ABOUT,
  POST,
  PROJECT,
  CONTACT,
} from "./controller/nav-controller";
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
        <Box display={display === POST ? "block" : "none"}>
          <Post />
        </Box>
        <Box display={display === PROJECT ? "block" : "none"}>
          <Project />
        </Box>
        <Box display={display === CONTACT ? "block" : "none"}>
          <Contact />
        </Box>
      </div>
      <Footer setDisplay={setDisplay} />
    </ThemeProvider>
  );
}

export default App;
