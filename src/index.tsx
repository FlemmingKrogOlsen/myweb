import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import './index.css';

import App from './components/App'

import Home from './routes/home';
import Blog from './routes/blog';
import CV from './routes/cv';

export const theme = {
  main: "#123456",
  activeColor: "#c8d1db",
  inactiveColor: "#8f9ba7",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="cv" element={<CV />} />

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 Page not found</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
