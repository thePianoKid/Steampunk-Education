import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from 'react';
import { Link } from "react-router-dom";
import { properties } from "../../properties";
import Navbar from '../Navbar';
import ThemedButton from '../ThemedButton';

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <SplashPageTitle sx={{ pt: 2, pl: 3 }}>Page Not Found!</SplashPageTitle>
      <SplashPageBody sx={{ pt: 2, pb: 2, pl: 3 }}>
        We've looked everywhere (even between the couch cushions), but we couldn't find the page you are looking for. 
      </SplashPageBody>
      <Link to="/">
        <ThemedButton btnText="Home Page" sx={{ ml: 3 }} />
      </Link>
    </div>
  )
}

export default PageNotFound