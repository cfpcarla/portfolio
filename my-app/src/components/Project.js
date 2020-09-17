import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";

import CardFeature from "../side-components/card-features";

const serviceStyle = makeStyles((theme) => ({
  serviceHeader: {
    paddingTop: "5vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  serviceHeaderImg: {
    width: "30vw",
    height: "50vh",
    [theme.breakpoints.down("md")]: {
      width: "40vw",
      height: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
      height: "max-content",
    },
  },
  btnPrimary: {
    padding: "1.5rem",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  btnSecondary: {
    padding: "1.5rem",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  generalFeatureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  Container: {
    display: "flex",
    paddingBottom: "5vh",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px 10px 0 0",
  },
  contentFeatureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  Content: {
    margin: "5vh 2vw 0 2vw",
  },
  btnShow: {
    margin: "5vh 0 0 0",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const Project = () => {
  const classes = serviceStyle();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className={classes.serviceHeader}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              align="center"
              variant="h3"
              style={{ margin: "2vh 0 2vh 0" }}
            >
              One platform for a library of jobs and educations
            </Typography>
            <Typography align="center" variant="h4">
              All feature has their purpose in helping you pursuit your next
              career
            </Typography>
          </Grid>
        </Box>

        <Grid>
          <Button
            className={classes.btnPrimary}
            color="primary"
            variant="contained"
          >
            Start now
          </Button>
          <Button
            className={classes.btnSecondary}
            color="secondary"
            variant="contained"
            href="#service-header"
          >
            See all features
          </Button>
        </Grid>

        <Grid id="service-header" item xs={12} style={{ marginBottom: "2vh" }}>
          <Typography variant="h4" align="center" style={{ marginTop: "2rem" }}>
            Glaukopis provided features
          </Typography>
          <Grid item xs={12} className={classes.generalFeatureList}>
            <CardFeature
              title="Educational Programs"
              desc="Our online course selection has been vetted and verified to provide you with the industry’s most renowned learning materials. Our up to date programs are actively implemented and will help to give you a leading edge in your field of interest."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#edu-section"
            />
            <CardFeature
              title="Job Opportunities"
              desc="Our in house bulletin boards are made to be the first stop on your employment pursuits. We offer links to job search engines, companies hiring around you, and business postings for both contract and internship availabilities."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#job-section"
            />
            <CardFeature
              title="Community Hub"
              desc="Our community hub is a gateway for teachers, students, businesses, and individuals - All working, learning, and improving as one."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#com-section"
            />
            <CardFeature
              title="Professional Workshop"
              desc="Job in mind? Strengthen your skills and ace your next job interview with ease!"
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#pro-section"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Project;
