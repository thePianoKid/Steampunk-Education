import React, { useState } from "react";
import "../style/fonts/josefin-sans.css";
import logo from "../resources/images/steampunk-logo.png";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Search } from "@mui/icons-material";
import WorkshopSearchCity from "./WorkshopSearch";
import { properties } from "../properties";

const StyledAppBar = styled(AppBar)(() => ({
  borderBottom: "2px solid #E2E2E2",
}));

const Logo = styled("img")(() => ({
  margin: "auto",
  textAlign: "center",
  width: "25%",
  paddingTop: "15px",
  paddingBottom: "15px",
}));

const MenuItem = styled(Typography)(() => ({
  paddingRight: "40px",
  fontFamily: "Josefin Sans",
  fontSize: "20px",
  color: properties.style.primary.grey,
  ":hover": {
    cursor: "pointer",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSearchOpen = () => {
    setOpen(true);
  };

  const handleSearchClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const navigate = useNavigate();
  const navContact = () => navigate("/contact");
  const navHome = () => navigate("/");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Button
            startIcon={<Search />}
            variant="outlined"
            onClick={handleSearchOpen}
            sx={{
              fontFamily: "Josefin Sans",
              fontSize: "16px",
              color: properties.style.primary.grey,
              border: properties.style.primary.grey,
              "&:hover": {
                border: properties.style.primary.grey,
              },
            }}
          >
            Workshops near you...
          </Button>
          <WorkshopSearchCity
            selectedValue={selectedValue}
            open={open}
            onClose={handleSearchClose}
          />
          <Logo
            src={logo}
            sx={{ ":hover": { cursor: "pointer" } }}
            onClick={navHome}
          />
          <HashLink to="/#aboutAnchor" style={{ textDecoration: "none" }}>
            <MenuItem>About</MenuItem>
          </HashLink>
          <HashLink to="/#servicesAnchor" style={{ textDecoration: "none" }}>
            <MenuItem>Services</MenuItem>
          </HashLink>
          <MenuItem onClick={navContact}>Contact</MenuItem>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

export default Navbar;
