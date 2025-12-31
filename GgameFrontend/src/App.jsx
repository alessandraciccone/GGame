import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar.jsx";
import Homepage from "./components/Homepage.jsx";
import Title from "./components/Title.jsx";
import Registration from "./components/Registration.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Title />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
