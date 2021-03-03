import React from "react";
import about from "../assets/about.png";
import carla from "../assets/carla.jpg";
import SchoolIcon from "@material-ui/icons/School";
import female_developer from "../assets/female_developer.jpg";

import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Button,
} from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import CodeIcon from "@material-ui/icons/Code";
import GavelIcon from "@material-ui/icons/Gavel";

// import DeveloperCard from "./side-components/developer-card";
const AboutStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#FEFEFE",
    height: "auto",
  },
  media: {
    width: "100%",
  },
  imageGrid: {
    textAlign: "center",
  },
  content: {
    padding: "20px",
  },
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const About = () => {
  const classes = AboutStyle();
  return (
    <Box>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography
            color="primary"
            variant="h3"
            style={{
              color: "black",
              marginLeft: "-25vw",
              textAlign: "center",
              background: "f5f3f4",
            }}
          >
            About Me
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  {/* <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    I am a passionate full-stack developer that is always looking to increase my knowledge and experience.
                     Creative problem solver bringing a new vision of development, Self-motivating and resilient team player with an eye for organizing and planning.
                  </Typography> */}
                  <Typography>
                  I am a passionate full-stack developer that is always looking to increase my knowledge and experience. Creative problem solver bringing a new vision of development, Self-motivating and resilient team player with an eye for organizing and planning.

                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    Experience
                  </Typography>
                  <Typography>
                    July in 2019 was where I decided to change my career and do something that I love and make me happy. 
                    That was when I decided to become a software developer. I took some online JavaScript courses, 
                    UX design and soon after that, I took a full-time Bootcamp at Lighthouse Labs in web development  
                    in which I gained a lot of experience. 

                </Typography>     
                </Paper>
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <CodeIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography> Posterior to that, I did several projects in React with material UI, and participated in volunteer
                     work as a full stack developer. I'm curious and passionate about programming and solving real problems. 
                   </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        <Grid item xs={12} md={4} className={classes.imageGrid}>
          <img src={female_developer} className={classes.media} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
