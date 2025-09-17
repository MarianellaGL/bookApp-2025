import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import App from "./App.jsx";
import { BookProvider } from "./context/BookContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BookProvider>
            <App />
          </BookProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
