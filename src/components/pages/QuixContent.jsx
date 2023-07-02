import React from "react";
import Navbar from "../Navbar";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function QuizContent() {
  return (
    <div>
      <Navbar />
      <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Example question!</SplashPageTitle>
      <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
        Question 1 of 5
      </SplashPageBody>
      <FormGroup sx={{ ml: 5 }}>
        <FormControlLabel
          sx={{ color: properties.style.primary.grey }}
          control={<Checkbox />}
          label="Example Question"
        />
        <FormControlLabel
          sx={{ color: properties.style.primary.grey }}
          control={<Checkbox />}
          label="Example Question"
        />
        <FormControlLabel
          sx={{ color: properties.style.primary.grey }}
          control={<Checkbox />}
          label="Example Question"
        />
        <FormControlLabel
          sx={{ color: properties.style.primary.grey }}
          control={<Checkbox />}
          label="Example Question"
        />
      </FormGroup>
      <Link to="/servicespagequiz">
        <ThemedButton sx={{ mt: 4, ml: 3 }} btnText="Next" />
      </Link>
    </div>
  );
}

export default QuizContent;
