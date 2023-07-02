import React from "react";
import "../../style/fonts/josefin-sans.css";
import Navbar from "../Navbar";
import ThemedButton from "../ThemedButton";
import About from "./About";
import Services from "./Services";
import WorkshopSearchCity from "../WorkshopSearch";
import Grid from "@mui/system/Unstable_Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import { Link } from "react-router-dom";
import spashPageImage from "../../resources/images/splash-page-img.jpeg";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const Home = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid xs={6}>
          <img
            style={{ paddingTop: "50px", width: "100%" }}
            src={spashPageImage}
            alt="Spash Page"
          />
        </Grid>
        <Grid xs={6}>
          <SplashPageTitle sx={{ pt: 23 }}>
            Unlock the potential of future <strong>scientists</strong> and{" "}
            <strong>engineers</strong>
          </SplashPageTitle>
          <SplashPageBody sx={{ pt: 2, pb: 3 }}>
            Revolutionize your education centre with educational resources and
            passionate instructors who specialize in teaching STEM.
          </SplashPageBody>
          <Link to="/quiz?usertype=educator">
            <ThemedButton sx={{ mr: "40px" }} btnText={"Educators"} />
          </Link>
          <Link to="/quiz?usertype=student">
            <ThemedButton sx={{ mr: "40px" }} btnText={"Students"} />
          </Link>
          <Link to="/quiz?usertype=parent">
            <ThemedButton btnText={"Parents"} />
          </Link>
        </Grid>
      </Grid>
      <About />
      <Services />
      <WorkshopSearchCity />
    </div>
  );
};

export default Home;