import React from "react";
import { Button } from "@mui/material";
import { properties } from "../properties";

function ThemedButton(props) {
  const { btnText, ...other } = props;

  return (
    <Button
      className="btn"
      variant="contained"
      disableRipple={true}
      disableTouchRipple={true}
      disableFocusRipple={true}
      sx={{
        "&:hover": {
          backgroundColor: properties.style.primary.main,
        },
      }}
      {...other}
    >
      {btnText}
    </Button>
  );
}

export default ThemedButton;
