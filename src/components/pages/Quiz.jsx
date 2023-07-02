import React from "react";
import Navbar from "../Navbar";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";
import { Link } from "react-router-dom";
import { useQuery } from "./Quote";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const TimeRemaining = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const pageContent = {
  educator: {
    pageBody:
      "Steampunk's mission is to improve proficicy in core STEM concepts in evey education center in Canada. " + 
      "Steampunk provides the curriculm, hardware and staff to run STEM programs. " + 
      "The education centers provide the space and adversize the programs. " + 
      "If you would like your education centre to host a Steampunk workshops, " + 
      "fill out the follow quiz to see which program is best suited your needs.",
  },
  student: {
    pageBody: "A STEM workshop run by Steampunk is unlike anything taught in the classroom. " + 
    "Take this quiz to find out which Steampunk workshop you are best suited for.",
  },
  parent: {
    pageBody: "Steampunk has the highest standards for STEM education; " + 
    "we work with education centers across Ontario and Québec to run engaging STEM workshops for students of all ages.",
  },
};

function Quiz() {
  let query = useQuery();
  const userType = query.get("usertype");

  return (
    <div>
      <Navbar />
      <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Quiz Time!</SplashPageTitle>
      <SplashPageBody sx={{ pt: 2, pb: 3, ml: 3 }}>
        {pageContent[userType]["pageBody"]}
      </SplashPageBody>
      <TimeRemaining sx={{ pb: 2, ml: 3 }}>
        Time to complete: <strong>2 min</strong>
      </TimeRemaining>
      <Link to="/quizcontent">
        <ThemedButton sx={{ ml: 3 }} btnText="Start Quiz" />
      </Link>
    </div>
  );
}

export default Quiz;
