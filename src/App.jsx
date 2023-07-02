import React from "react";
import "./style/fonts/josefin-slab.css";
import "./style/App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Quiz from "./components/pages/Quiz";
import QuizContent from "./components/pages/QuixContent";
import Quote from "./components/pages/Quote";
import PitchPage from "./components/pages/PitchPage";
import Booking from "./components/pages/Booking";
import { properties } from "./properties";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/quiz",
    element: <Quiz />
  },

  {
    path: "/quizcontent",
    element: <QuizContent />
  },

  {
    path: "/servicespagequiz",
    element: <PitchPage titleText={"You're a perfect fit!"} />
  },

  {
    path: "/servicespagehome",
    element: <PitchPage titleText={"What we do best"} />
  },

  {
    path: "/quote",
    element: <Quote />
  },

  {
    path: "/book",
    element: <Booking />
  }
])

const theme = createTheme({
  palette: {
    primary: {
      main: properties.style.primary.main,
    },
  },

  typography: {
    button: {
      fontFamily: "Josefin Slab",
      fontSize: "18px",
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={ router } />
    </ThemeProvider>
  );
}

export default App;
