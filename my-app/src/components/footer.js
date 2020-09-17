import React from "react";
import { makeStyles, Grid, Typography, Box, Link } from "@material-ui/core";
// import { ReactComponent as Owl } from "../assets/svg/owl.svg";
// import Chalkboard from "../assets/photo/chalkboard.jpg";
import { CONTACT } from "../controller/nav-controller";
const footerStyle = makeStyles((theme) => ({
  root: {},

  footer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "",
    marginLeft: "0",
    color: "white",
  },
  footerHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2vh",
    borderRight: "solid white 2px",
  },
  footerContentContainer: {
    // background:
    //   "linear-gradient(248.24deg, rgba(0, 0, 0, 0.473434) 0.31%, rgba(0, 0, 0, 0.441699) 20.56%, rgba(0, 0, 0, 0.437494) 77.15%, rgba(0, 0, 0, 0.447353) 99.8%, rgba(10, 10, 10, 0) 99.96%, rgba(126, 126, 126, 0) 99.97%, rgba(0, 0, 0, 0.5) 99.98%), url(" +
    //   Chalkboard +
    //   ")",

    backgroundRepeat: "repeat",
    display: "flex",
    height: "auto",
    width: "100vw",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: "2vh",
    paddingBottom: "4vh",
  },
  footerContent: {
    width: "70vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
}));
const Footer = (props) => {
  const classes = footerStyle();
  const setParentDisplay = (value) => {
    props.setDisplay(value);
  };
  return (
    <>
      <Box className={classes.footer}>
        <Box xs={12} className={classes.footerContentContainer}>
          <Grid item md={3} lg={3} xs={12} className={classes.footerHeader}>
            <Grid className={classes.logo} item xs={12} sm={12} md={3}>
              {/* <Owl className="logo" style={{ fill: "#ffffff" }} /> */}
            </Grid>
            <Typography variant="h4"> Glaukopis Wisdom</Typography>
            <Typography align="center" variant="h6">
              Perfect your professional portfolio
            </Typography>
          </Grid>
          <Grid container className={classes.footerContent}>
            <Grid item xs={3}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Location
              </Typography>
              <Typography variant="h5">
                169 Somewhere Street, Toronto, ON - CA
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Follow us
              </Typography>
              <Typography variant="h5">
                <Link color="secondary"> Twitter </Link>
              </Typography>
              <Typography variant="h5">
                <Link color="secondary"> LinkedIn </Link>
              </Typography>
              <Typography variant="h5">
                <Link color="secondary"> Instagram </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                align="center"
                variant="h4"
                style={{ fontWeight: "bold" }}
              >
                Reach us
              </Typography>
              <Typography variant="h5">(647)-465-1767</Typography>
              <Typography variant="h5">
                <Link
                  color="secondary"
                  onClick={() => setParentDisplay(CONTACT)}
                >
                  or Contact us
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
