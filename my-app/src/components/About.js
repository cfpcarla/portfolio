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
} from "@material-ui/core";

// import DeveloperCard from "./side-components/developer-card";
const AboutStyle = makeStyles((theme) => ({
  missionStatement: {
    display: "flex",
    background: "#ffe9ef",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  },
}));

const About = () => {
  const classes = AboutStyle();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Grid container className={classes.missionStatement}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              color: "#624a59",
              marginLeft: "2vw",
              textDecoration: "underline",
              textAlign: "center",
            }}
          >
            About Me
          </Typography>
        </Grid>
        <Box>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../assets/carla.jpg"
                title="Carla"
              />
            </CardActionArea>
          </Card>
        </Box>
        <Grid>
          <Typography
            variant="p"
            style={{
              color: "#624a59",
              marginLeft: "2vw",
              fontSize: "14",
              textAlign: "center",
            }}
          >
            My name is Carla. I am from Brazil but currently I live in Toronto
            Canada, I am married, I have 2 cats, I love swimming, cycling and
            going out with my friends.
            <br></br>I had previous background in Law which gave me a lot of
            experience in different types of companies, which allowed me to
            understand the complexity and dynamics of the corporate environment,
            develop soft skills and generate results for the teams in which I
            participated.
            <br></br>
            When me and my husband decided to come to Canada I decided to change
            my career and do something that I love and make me happy. That was
            when I decided to become a software developer. I took some online
            JavaScript courses, and soon after that I did a full-time Bootcamp
            at Lighthouse Labs in web development ​in which I gained a lot of
            experience​.
            <br></br>
            After that, I did several projects, participated in volunteer work,
            and now I just finished the Prepr FUN program. I'm curious and
            passionate about programming and solving real problems. I'm always
            looking for new knowledge and challenges.
          </Typography>
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
