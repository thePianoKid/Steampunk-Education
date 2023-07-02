import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import ThemedButton from "../ThemedButton";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function Booking() {
  return (
    <div>
      <Navbar />
      <SplashPageTitle sx={{ pt: 2 }}>Fake Booking Page :)</SplashPageTitle>
      <SplashPageBody sx={{ pt: 2 }}>
        When this site is put into use by Steampunk, pressing on a workshop will
        lead the user to the external site of the education centre, where they can book
        the workshop.
      </SplashPageBody>
      <SplashPageBody sx={{ pt: 2, pb: 4 }}>
        Booking a workshop is outside of Steampunk's domain, so it is not included in this demo site.
      </SplashPageBody>
      <Link to="/">
        <ThemedButton btnText="Go back home" />
      </Link>
    </div>
  );
}

export default Booking;
