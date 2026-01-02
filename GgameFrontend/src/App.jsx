import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Title from "./components/Title";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Login from "./components/Login";
import FindyourGame from "./components/FindyourGame";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Title />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findyourgame" element={<FindyourGame />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
