import React from "react";
// import ThanhQuan from "../assets/photo/ThanhQuan.JPG";
// import CarlaMedeiros from "../assets/photo/CarlaMedeiros.JPG";
import about from "../assets/about.png";
import carla from "../assets/carla.jpg";

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

// import DeveloperCard from "./side-components/developer-card";
const AboutStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
    height: "auto",
  },
  media: {
    width: "80%",
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
            variant="h3"
            style={{
              color: "black",
              marginLeft: "2vw",
              textAlign: "center",
              background: "f5f3f4",
            }}
          >
            About Me
          </Typography>
        </Grid>

        <Grid item xs={12} md={8} className={classes.content}>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Feb/2020
                  </Typography>
                  <Typography>
                    Finished Bootcamp in web development at Lighthouse Labs
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <CodeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Code
                  </Typography>
                  <Typography>
                    I developed the booklist is as a platform in which you can
                    search for books and save them to read later.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Sleep
                  </Typography>
                  <Typography>Because you need rest</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <RepeatIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Repeat
                  </Typography>
                  <Typography>Because this is the life you love!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        <Grid item xs={12} md={4} className={classes.imageGrid}>
          <img src={carla} className={classes.media} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ marginLeft: "2vw", marginRight: "2vw" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default About;
