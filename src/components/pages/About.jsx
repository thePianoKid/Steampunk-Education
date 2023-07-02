import React, { forwardRef } from "react";
import "../../style/fonts/roboto.css";
import { styled } from "@mui/material/styles";
import { Grid, ListItem, Typography, Container } from "@mui/material";
import ThemedButton from "../ThemedButton";
import { properties } from "../../properties";
import aboutUsImage from "../../resources/images/about-us-img.jpeg";
import { Link } from "react-router-dom";

const AboutTitle = styled(Typography)(() => ({
  margin: "auto",
  textAlign: "center",
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const StyledListItem = styled(ListItem)(() => ({
  fontFamily: "Roboto",
  fontSize: "18px",
}))

function About() {
  return (
    <div id="aboutAnchor">
      <AboutTitle sx={{ pt: 18 }}>How can we help?</AboutTitle>
      <Grid container spacing={0}>
        <Grid xs={5}>
          <img style={{ width: "100%" }} src={aboutUsImage} alt="Girl looking at user; artistic equations decorate the frame" />
        </Grid>
        <Grid xs={7} sx={{ pt: 15 }}>
          <StyledListItem sx={{ display: "list-item" }}>
            Steampunk creates programs that teach the basics of STEM
          </StyledListItem>
          <StyledListItem sx={{ display: "list-item" }}>
            Each program is created to fit the specific needs of your education
            centre
          </StyledListItem>
          <StyledListItem sx={{ display: "list-item" }}>
            Steampunk has partnered with schools, libraries & community centres
            across Ontario & Québec
          </StyledListItem>
          <Container sx={{ pb: "30px" }}></Container>
          <Link to="/quizeducator">
            <ThemedButton btnText={"Educators, start here"} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default forwardRef(About);
