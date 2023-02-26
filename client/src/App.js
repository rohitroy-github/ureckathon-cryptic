import "./App.css";
import Dashboard from "./components/Dashboard";
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import customTheme from "./components/dashStyle";
import {BrowserRouter} from "react-router-dom";
import AppState from "./context/UserContext";
import LandingPage from "./components/Home/LandingPage";
import {Route, Routes} from "react-router-dom";

function App() {
  const theme = createTheme(customTheme);
  return (
    <AppState>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* mainHomePage */}
            <Route path="/" element={<LandingPage />}></Route>

            {/* DashboardPage */}
            <Route path="/dashboard/*" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppState>
  );
}

export default App;
