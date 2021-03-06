import React from "react";
import logo4 from "../assets/logo4.png";
import CardFeature from "../side-components/card-features";
import carla from "../assets/carla.jpg";
import {
  makeStyles,
  Button,
  Grid,
  Typography,
  Box,
  Link,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import { ABOUT, PROJECT } from "../controller/nav-controller";

const homeStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  proposition: {
    background: "#f6eeea",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "40% 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  startButton: {
    backgroundColor: "#455954",
  },
  featureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  imgBrand: {
    objectFit: "contain",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "400px",
      margin: "0 2vw 0 2vw",
    },
  },

  resourcesListContainer: {
    width: "100vw",
    height: "75vh",
    backgroundRepeat: "repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto auto auto",
  },
  resourcesList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "2rem auto 0 auto",
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
  resourcesPaper: {
    borderRadius: "5px",
    backgroundColor: "#fffafa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60vw",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "auto",
    },
  },

  nextStep: {
    backgroundRepeat: "repeat",
    display: "flex",

    justifyContent: "center",
    color: "white",
    padding: "3rem",
  },
  nextStepContent: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "5vh",
  },
  buttonContainer: {
    marginTop: "5vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  btnCont: {
    width: "100vw",
    height: "4rem",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  footer: {
    height: "50vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "5rem",
    background: "#f6eeea",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  button: {
    marginTop: "-11rem",
    fontSize: "1.5rem",
    marginLeft: "-580px",
    marginBottom: "45px",
  },
}));
const Home = (props) => {
  const classes = homeStyles();
  const setParentDisplay = (value) => {
    props.setDisplay(value);
  };
  return (
    <>
      <div>
        {/* Image with me and my name  */}
        <Grid item xs={12} className={classes.proposition}>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box className={classes.box}>
              <img className={classes.imgBrand} alt="logo" src={logo4} />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Home;
