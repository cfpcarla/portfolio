import React from "react";
import { makeStyles, Grid, Typography, Box, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const footerStyle = makeStyles((theme) => ({
  root: {},

  footer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "",
    marginLeft: "0",
    background: "#fbeaeb",
  },
  footerHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2vh",
  },
  footerContentContainer: {
    display: "flex",
    height: "auto",
    width: "100vw",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: "2vh",
    paddingBottom: "4vh",
    background: "#fbeaeb",
  },
  footerContent: {
    width: "70vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
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
            <Grid container className={classes.footerContent}>
              <Typography
                variant="h4"
                style={{ fontWeight: "bold", color: "black" }}
              >
                Follow Me
              </Typography>
              <Typography variant="h5">
                <Link color="black">
                  <GitHubIcon />
                </Link>
              </Typography>
              <Typography variant="h5">
                <Link color="black">
                  <LinkedInIcon />
                </Link>
              </Typography>
              <Typography variant="h5">
                <Link color="black">
                  <InstagramIcon />
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
