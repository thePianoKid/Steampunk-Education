import React, { useState } from "react";
import Navbar from "../Navbar";
import { FormControl, FormHelperText, FormLabel, Typography } from "@mui/material";
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

function QuizContent() {
  const [checkboxState, setCheckboxState] = useState({
    ans1: false,
    ans2: false,
    ans3: false,
  });

  const handleChange = (event) => {
    console.log(error);
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  const { ans1, ans2, ans3 } = checkboxState;
  const error = [ans1, ans2, ans3].filter((v) => v).length === 0;

  return (
    <div>
      <Navbar
        aboutTitle="About"
        servicesTitle="Services"
        contactTitle="Contact"
        workshopTitle="Find workshops near you..."
        lang="en"
      />
      <SplashPageTitle sx={{ pt: 4, ml: 3 }}>
        Which workshop theme(s) resonates with you?
      </SplashPageTitle>
      <FormControl required error={error} sx={{ ml: 4, mt: 2 }}>
        <FormLabel component="legend">Question 1 of 1</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={ans1} onChange={handleChange} name="ans1" />
            }
            label="Robotics 🤖"
          />
          <FormControlLabel
            control={
              <Checkbox checked={ans2} onChange={handleChange} name="ans2" />
            }
            label="VR game design 👾"
          />
          <FormControlLabel
            control={
              <Checkbox checked={ans3} onChange={handleChange} name="ans3" />
            }
            label="3D prining 📐"
          />
        </FormGroup>
        <FormHelperText sx={{ m: 0 }}>Select one or more</FormHelperText>
      </FormControl>
      <div />
      <Link to={error ? "" : "/servicespagequiz"}>
        <ThemedButton sx={{ mt: 4, ml: 3 }} btnText="Next" />
      </Link>
    </div>
  );
}

export default QuizContent;
