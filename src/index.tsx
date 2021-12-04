import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./theme/index.css";
import { theme } from "./theme";

import App from "./components/App";
import About from "./pages/about";
import Blog from "./pages/blog";
import CV from "./pages/cv";
import Error404 from "./pages/error404";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="cv" element={<CV />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
