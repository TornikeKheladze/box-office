import { Routes, Route } from "react-router-dom";
import Show from "./Components/show/Show";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route exact path="/show/:id" element={<Show />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
