import React from "react";
import logo from "../assets/logo.png";
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
    height: "70vh",
    background: "#624a59",
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
    backgroundColor: "#ffffffc4",
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
    background: "#624a59",
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
            sm={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box className={classes.box}>
              <img className={classes.imgBrand} alt="logo" src={logo} />
            </Box>
            <Button
              style={{ marginTop: "2rem", fontSize: "1.5rem" }}
              variant="contained"
            >
              See my Work
            </Button>
          </Grid>
        </Grid>

        {/* About Me */}
        <Grid>
          <Box xs={12} display="flex" flexWrap="wrap">
            <Grid
              item
              xs={12}
              lg={6}
              md={6}
              style={{ margin: "2rem auto 2rem auto", paddingLeft: "1rem" }}
            >
              <Typography variant="h2">About Me</Typography>
              <Typography variant="h4" style={{ marginTop: "2rem" }}>
                My name is Carla. I am from Brazil but currently I live in
                Toronto Canada, I am married, I have 2 cats, I love swimming,
                cycling and going out with my friends.
              </Typography>
              <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
                I had previous background in Law which gave me a lot of
                experience in different types of companies, which allowed me to
                understand the complexity and dynamics of the corporate
                environment, develop soft skills and generate results for the
                teams in which I participated.
              </Typography>
              <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
                When me and my husband decided to come to Canada I decided to
                change my career and do something that I love and make me happy.
                That was when I decided to become a software developer. I took
                some online JavaScript courses, and soon after that I did a
                full-time Bootcamp at Lighthouse Labs in web development ​in
                which I gained a lot of experience​.
              </Typography>
              <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
                After that, I did several projects, participated in volunteer
                work, and now I just finished the Prepr FUN program. I'm curious
                and passionate about programming and solving real problems. I'm
                always looking for new knowledge and challenges.
              </Typography>
              <Button variant="contained" color="primary">
                Download my resume
              </Button>
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
            </Grid>
          </Box>
        </Grid>

        {/* My projects */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" style={{ marginTop: "2rem" }}>
            Provided Features
          </Typography>
          <Grid item xs={12} className={classes.featureList}>
            <CardFeature
              title="Educational Programs"
              desc="Our online course selection has been vetted and verified to provide you with the industry’s most renowned learning materials. Our up to date programs are actively implemented and will help to give you a leading edge in your field of interest."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Job Opportunities"
              desc="Our in house bulletin boards are made to be the first stop on your employment pursuits. We offer links to job search engines, companies hiring around you, and business postings for both contract and internship availabilities."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Community Hub"
              desc="Our community hub is a gateway for teachers, students, businesses, and individuals - All working, learning, and improving as one."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Hiring Workshop"
              desc="Job in mind? Strengthen your skills and ace your next job interview with ease!"
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Home;
