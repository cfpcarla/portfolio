import React from "react";
// import ThanhQuan from "../assets/photo/ThanhQuan.JPG";
// import CarlaMedeiros from "../assets/photo/CarlaMedeiros.JPG";
// import Mission from "../assets/photo/mission.jpg";

import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

// import DeveloperCard from "./side-components/developer-card";
const AboutStyle = makeStyles((theme) => ({
  missionStatement: {
    marginTop: "2vh",
    marginBottom: "2vh",
    display: "flex",

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
          <img
            style={{ width: "auto", height: "40vh" }}
            // src={Mission}
            alt="mission statement"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ marginLeft: "2vw", marginRight: "2vw" }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Our mission
          </Typography>
          <Typography variant="h4">
            Glaukopis Wisdom is a community Software as a service, welcoming
            people from every discipline and culture who aim is to seek a better
            career path for themselves through education and knowledge. We
            believe that with our dedicated library of search engines and
            community hub, we can help our customers achieve just that and more.
            On Glaukopis Wisdom, we are building a headquarter of free knowledge
            gather around the world - along with building a dedicated community
            of curious individual who love to engage with ideas and each other
            to improve themselves and other, both online and offline at events
            that we searches.
          </Typography>
        </Grid>
      </Grid>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width={"100%"}
        mt={6}
      >
        <Typography variant="h3" gutterBottom>
          {" "}
          Meet our team{" "}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            {/* <DeveloperCard
              // img={ThanhQuan}
              name={"Thanh Quan"}
              position={"Junior Software Developer"}
              workExperiences={"None"}
              desc={
                "Graduated George Brown College student passionate about developing web application, bringing best user experiences " +
                "and design along with implementing best coding practices. Experiences in developing Full Stack Application - looking " +
                "for a position where I can express my skill and knowledge in hoping to sharpen my skill and contribute to the mission "
              }
              link={[
                {
                  portfolio: "http://thomasquan.now.sh/",
                  linkedin: "https://www.linkedin.com/in/thanh-quan-355912169/",
                  github: "https://github.com/ThomasQuan",
                },
              ]}
              developer={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DeveloperCard
              // img="https://ca.slack-edge.com/T0189RYGD4M-U018PUWDS81-59f061f98f59-512"
              name={"Shaun Correia"}
              position={"Digital Marketer"}
              workExperiences={"None"}
              link={[
                {
                  portfolio: "",
                  linkedin: "",
                  github: "",
                },
              ]}
              developer={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DeveloperCard
              // img={CarlaMedeiros}
              name={"Carla Medeiros"}
              position={"Junior Full Stack Developer"}
              desc={
                "My name is Carla I am full stack developer, very curious and passionate about programming computer. Previously I consolidated my 5 years of experience in law and in different types of companies, which allowed me to understand the complexity and dynamics of the corporate environment, develop soft skills and generate results for the teams in which I participated."
              }
              link={[
                {
                  portfolio: "",
                  linkedin:
                    "https://www.linkedin.com/in/carla-fabricia-medeiros/",
                  github: "https://github.com/cfpcarla",
                },
              ]}
              developer={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DeveloperCard
              // img="https://media-exp1.licdn.com/dms/image/C5603AQGTnpnukarJbQ/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=lM9QJ0hSI0bO1k7_nCCgNA0yITouwIfachHTvhvlRfY"
              name={"Mamatha Sri"}
              position={"Full Stack Developer"}
              desc={
                "Energetic full stack developer over 3 year's experience in application layers, presentation layers, and databases. Fully involved in both front end and back end development, including the implementation of new code and redevelopment of existing program structure. Developed Web-based Applications using Microsoft .NET Framework and SQL Server with Agile and Waterfall Development Methodology."
              }
              link={[
                {
                  portfolio: "",
                  linkedin: "https://www.linkedin.com/in/mamatha-sri-3a97b861/",
                  github: "https://github.com/Mamatha94/",
                },
              ]}
              developer={true}
            /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
