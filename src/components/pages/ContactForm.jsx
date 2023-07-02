import React, { useState } from "react";
import { Typography, TextField, Grid, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const StyledListItem = styled(ListItem)(() => ({
  fontFamily: "Roboto",
  color: properties.style.primary.grey,
  fontSize: "16px",
}));

function ContactForm(props) {
  const { titleText, submitBtnText, requireMessage } = props;

  const [confimation, setConfirmation] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setEmailError(false);
    setMessageError(false);

    console.log(requireMessage)

    if (email.length > 0) {
      if (email.includes("@")) {
        const splitEmail = email.split("@");
        if (splitEmail[1].includes(".")) {
            if (requireMessage && message.length <= 0) {
                setMessageError(true);
                return;
            } else {
                setConfirmation(true);
                return;
            }
        }
      }
    }
    
    if (!(requireMessage && message.length > 0)) {
        setMessageError(true);
    }

    setEmailError(true);
  };

  return (
    <div>
      {confimation ? (
        <div>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Success!</SplashPageTitle>
          <SplashPageBody sx={{ pt: 2, pb: 1, ml: 3 }}>
            Thank you for your interest. We will get back to you in 1-2 business
            days.
          </SplashPageBody>

          <SplashPageBody sx={{ pt: 2, pb: 1, ml: 3 }}>
            Submission details
          </SplashPageBody>
          <StyledListItem sx={{ ml: 3 }}>Email: {email}</StyledListItem>
          <StyledListItem sx={{ ml: 3 }}>
            Other comments: {message}
          </StyledListItem>
        </div>
      ) : (
        <div>
          <SplashPageTitle sx={{ pt: 4, pb: 2, ml: 3 }}>
            {titleText}
          </SplashPageTitle>
          <Grid sx={{ pb: 3 }} container>
            <TextField
              sx={{ ml: 3, width: 400 }}
              label="Enter your work email..."
              variant="filled"
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? "Please enter a valid email." : ""}
            />
          </Grid>
          <Grid sx={{ pb: 3 }}>
            <TextField
              sx={{ ml: 3, width: 600 }}
              label="Questions or comments?"
              variant="filled"
              multiline
              rows={5}
              onChange={handleMessageChange}
              error={messageError}
              helperText={messageError ? "Please enter your message." : ""}
            />
          </Grid>
          <ThemedButton
            sx={{ ml: 3 }}
            btnText={submitBtnText}
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
}

export default ContactForm;
