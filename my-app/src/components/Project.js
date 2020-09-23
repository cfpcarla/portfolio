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
              I am Proficient...
            </Typography>
            <Typography align="center" variant="h4">
              in React, Redux, Rest API, NodeJS, Express, Git, Ruby on Rails,
              Javascript, Clojure, Storybook, Jest, HTML5, CSS and Python.
              <br></br>I always look forward to finding ways to integrate new
              tools and languages into my projects. You can take a look at my
              Github repositories.
            </Typography>
          </Grid>
        </Box>

        <Grid>
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
          <Grid item xs={12} className={classes.generalFeatureList}>
            <CardFeature
              title="Booklist"
              desc="I developed this project as a platform in which you can search for books and save them to read later.
              Building a React application with a NodeJS and API back-end. ​Also use Trello to manage and organize better the tasks and VS code to develop the app."
              btn={true}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="#edu-section"
            />
            <CardFeature
              title="Task-Scheduling"
              desc="I developed this Project and the purpose is a Task Scheduling App for Dispatcher/ Driver.
              Use React with MaterialUI, also use Trello to manage and organize better the tasks and VS code to develop the app.
              You can take a look on the website here: ​https://task-scheduling-project.vercel.app/"
              btn={true}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="​https://task-scheduling-project.vercel"
            />
            <CardFeature
              title="Glaukopis Wisdom"
              desc="We use React with Material UI, also use Trello to manage and organize better the tasks and VS code to develop the website."
              btn={true}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="https://glaukopis-wisdom.vercel.app/"
            />
            <CardFeature
              title="CommitED"
              desc="This app closes the gap by providing a platform to host a network of Service Providers and volunteers who want to give back or fulfill a mandatory commitment.
              I used NodeJS
              Express
              BodyParser
              Node-fetch
              Heroku deployment
              Google maps API
              React with materialUI
              Bcrypt
              Nodemailer
              PostgreSQL
              Cors
              Axios, also use Trello to manage and organize better the tasks and VS code to develop the app "
              btn={true}
              maxWidth={600}
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
