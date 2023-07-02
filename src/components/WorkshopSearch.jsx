import { React, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { properties } from "../properties";
import { Link } from "react-router-dom";

function createCityData(city, availableWorkshops, ageRange) {
  return { city, availableWorkshops, ageRange };
}

function createWorkshopData(name, educationCentre, ageRange) {
  return { name, educationCentre, ageRange };
}

const originalCityData = [
  createCityData("Almer", 1, "6-14"),
  createCityData("Almonte", 4, "5-16"),
  createCityData("Carleton Place", 2, "8-12"),
  createCityData("Gatineau", 1, "8-14"),
  createCityData("Ottawa", 3, "8-12"),
  createCityData("Perth", 2, "9-12"),
  createCityData("Renfrew", 1, "8-14"),
  createCityData("Smith Falls", 2, "9-12"),
];

function WorkshopSearchCity({ onClose, selectedValue, open }) {
  const [originalWorkshopData, setOriginalWorkshopData] = useState([]);

  const [searchForCity, setSearchForCity] = useState(true);
  const [rows, setRows] = useState(originalCityData);
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => {
    onClose(selectedValue);
    // TODO: Wait for close to reset state
    setSearchForCity(true);
    setRows(originalCityData);
  };

  const handleCityClick = (row) => {
    let tempArr = [];
    for (let i = 1; i < row.availableWorkshops + 1; i++) {
      tempArr.push(
        createWorkshopData(
          "Example workshop " + i.toString(),
          "Example Education Centre",
          row.ageRange
        )
      );
    }

    setInputValue("");
    setSearchForCity(false);
    setOriginalWorkshopData(tempArr);
    setRows(tempArr);
  };

  const handleBack = () => {
    setRows(originalCityData);
    setSearchForCity(true);
  }

  const searchThroughRows = (event) => {
    const userInput = event.target.value;
    setInputValue(userInput);

    let filteredRows = [];
    if (searchForCity) {
      for (const i in originalCityData) {
        if (
          originalCityData[i]["city"]
            .toLowerCase()
            .includes(userInput.toLowerCase())
        ) {
          filteredRows.push(originalCityData[i]);
        }
      }
    } else {
      for (const j in originalWorkshopData) {
        if (originalWorkshopData[j]["name"].toLowerCase().includes(userInput)) {
          filteredRows.push(originalWorkshopData[j]);
        }
      }
    }

    setRows(filteredRows);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"md"}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {searchForCity ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : (
          <Button
            sx={{
              color: properties.style.primary.grey,
              position: "absolute",
              right: 8,
              top: 8,
            }}
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        Search for workshops near you
        <TextField
          label={searchForCity ? "Filter by city" : "Search for workshop"}
          size="small"
          sx={{
            position: "absolute",
            right: searchForCity ? 50 : 75,
            top: 8,
          }}
          onChange={searchThroughRows}
          value={inputValue}
        />
      </DialogTitle>
      <DialogContent dividers>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "16px" }}>City</TableCell>
                <TableCell sx={{ fontSize: "16px" }}>
                  Available Workshops
                </TableCell>
                <TableCell sx={{ fontSize: "16px" }}>Age Range</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  hover
                  key={searchForCity ? row.city : row.name}
                  sx={{
                    textDecoration: "none",
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { cursor: "pointer" },
                  }}
                  onClick={() => handleCityClick(row)}
                  component={Link}
                  to={searchForCity ? "" : "/book"}
                >
                  <TableCell component="th" scope="row">
                    {searchForCity ? row.city : row.name}
                  </TableCell>
                  <TableCell>
                    {searchForCity
                      ? row.availableWorkshops
                      : row.educationCentre}
                  </TableCell>
                  <TableCell>{row.ageRange}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}

export default WorkshopSearchCity;
