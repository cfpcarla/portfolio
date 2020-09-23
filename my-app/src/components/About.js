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

// import DeveloperCard from "./side-components/developer-card";
const AboutStyle = makeStyles((theme) => ({
  missionStatement: {
    display: "flex",
    background: "#b7e4c7",
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
}));

const About = () => {
  const classes = AboutStyle();
  return (
    <Box>
      <Grid container className={classes.missionStatement}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{
              color: "588b8b",
              marginLeft: "2vw",
              textAlign: "Left",
              background: "f5f3f4",
            }}
          >
            About Me
          </Typography>
        </Grid>

        <Grid item xs={12} md={8} className={classes.content}>
          <Typography variant="h4" style={{ marginTop: "2rem" }}>
            My name is Carla. I am from Brazil but currently I live in Toronto
            Canada, I am married, I have 2 cats, I love swimming, cycling and
            going out with my friends.
          </Typography>
          <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
            I had previous background in Law which gave me a lot of experience
            in different types of companies, which allowed me to understand the
            complexity and dynamics of the corporate environment, develop soft
            skills and generate results for the teams in which I participated.
          </Typography>
          <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
            When me and my husband decided to come to Canada I decided to change
            my career and do something that I love and make me happy. That was
            when I decided to become a software developer. I took some online
            JavaScript courses, and soon after that I did a full-time Bootcamp
            at Lighthouse Labs in web development ​in which I gained a lot of
            experience​.
          </Typography>
          <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
            After that, I did several projects, participated in volunteer work,
            and now I just finished the Prepr FUN program. I'm curious and
            passionate about programming and solving real problems. I'm always
            looking for new knowledge and challenges.
          </Typography>
          <Button variant="contained" color="primary">
            Download my resume
          </Button>
        </Grid>

        <Grid item xs={12} md={4} className={classes.imageGrid}>
          <img src={carla} className={classes.media} />
          {/* <Box>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={carla}
                  title="Carla"
                />
                xunda <br></br>
              </CardActionArea>
            </Card>
          </Box> */}
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
