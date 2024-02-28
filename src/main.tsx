import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutPage from "./AboutPage.tsx";
import ContactPage from "./ContactPage.tsx";
import DrawerAppBar from "./DrawerAppBar.tsx";
import HomePage from "./HomePage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={DrawerAppBar}>
      <Route index Component={HomePage} />
      <Route path="about" Component={AboutPage} />
      <Route path="contact" Component={ContactPage} />
    </Route>
  )
);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#af04a4",
      light: "#d882d9",
      dark: "#2de219",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
