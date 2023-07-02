import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ThemedButton from "../ThemedButton";
import { properties } from "../../properties";
import servicesImage from "../../resources/images/services-page-img.jpeg";
import { Link } from "react-router-dom";

const ServicesTitle = styled(Typography)(() => ({
  margin: "auto",
  textAlign: "center",
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const StyledParagraph = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontSize: "18px",
}));

function Services() {
  return (
    <div id="servicesAnchor">
      <ServicesTitle sx={{ pt: 10 }}>Why Steampunk?</ServicesTitle>
      <Grid container spacing={0}>
        <Grid xs={5} sx={{ pt: 20, ml: "70px" }}>
          <StyledParagraph variant="p">
            Steampunk provides the hardware, educators and infrastructure
            required to run a successful STEM education program
          </StyledParagraph>

          <br />
          <br />

          <StyledParagraph variant="p">
            Whether you're planning a half-day workshop, or a multi-year
            initiative to improve STEM education, we provide course content and
            hardware that that is tailored to your needs.
          </StyledParagraph>
          <Container sx={{ pb: "30px" }}></Container>
          <Link to="/servicespagehome">
            <ThemedButton btnText={"Request a Quote"} />
          </Link>
        </Grid>
        <Grid xs={6} sx={{ pt: 5 }}>
          <img
            src={servicesImage}
            style={{ width: "70%" }}
            alt="Service page"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
