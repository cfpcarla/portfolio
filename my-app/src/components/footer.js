import React from "react";
import { makeStyles, Grid, Typography, Box, Link } from "@material-ui/core";
const footerStyle = makeStyles((theme) => ({
  root: {},

  footer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "",
    marginLeft: "0",
    color: "#ffe9ef",
    background: "#624a59",
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
    background: "#624a59",
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
                style={{ fontWeight: "bold", color: "#ffe9ef" }}
              >
                Follow Me
              </Typography>
              <Typography variant="h5">
                <Link color="#ffe9ef"> Github </Link>
              </Typography>
              <Typography variant="h5">
                <Link color="#ffe9ef"> LinkedIn </Link>
              </Typography>
              <Typography variant="h5">
                <Link color="#ffe9ef"> Instagram </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
