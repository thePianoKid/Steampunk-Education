import React from "react";
import Navbar from "../Navbar";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";
import { Link } from "react-router-dom";
import service1Image from "../../resources/images/service1-img.jpeg";
import service2Image from "../../resources/images/service2-img.jpeg";
import service3Image from "../../resources/images/service3-img.jpeg";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function PitchPage(props) {
  const { titleText } = props;

  return (
    <div>
      <Navbar />
      <SplashPageTitle sx={{ pt: 4, ml: 3 }}>{titleText}</SplashPageTitle>
      <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
        Here are the services we suggest for your education centre.
      </SplashPageBody>
      <Grid
        container
        spacing={2}
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item xs={4}>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>
            {properties.services.service1}
          </SplashPageTitle>
          <img
            src={service1Image}
            style={{ width: "70%", marginLeft: "25px", borderRadius: "5px" }}
            alt="Service 1"
          />
          <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
            The workshop attendees will design and build a small robot whose
            goal is to wrestle their opponent’s robot out a 4ft “sumo ring”.
          </SplashPageBody>
          <Link to="/quote?service=service1">
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>
            {properties.services.service2}
          </SplashPageTitle>
          <img
            src={service2Image}
            style={{ width: "80%", marginLeft: "25px", borderRadius: "5px" }}
            alt="Service 2"
          />
          <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
            This workshop introduces the attendants to the basics of app
            development in VR. The goal of this workshop is to give a sense of
            what it is like to create three dimensional objects and render them
            in VR.
          </SplashPageBody>
          <Link to="/quote?service=service2">
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>
            {properties.services.service3}
          </SplashPageTitle>
          <img
            src={service3Image}
            style={{ width: "80%", marginLeft: "25px", borderRadius: "5px" }}
            alt="Service 3"
          />
          <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
            This workshop teaches the fundamentals of design, material
            selection, and printing techniques, as our expert instructors guide
            you through hands-on projects.
          </SplashPageBody>
          <Link to="/quote?service=service3">
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default PitchPage;
