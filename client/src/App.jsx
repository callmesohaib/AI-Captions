import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from './components/Home/home';
import Login from './components/Login/login';
import Register from "./components/Register/register";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Upload from "./components/Upload/upload";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
