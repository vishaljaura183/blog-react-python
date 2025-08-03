import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CreateBlog from "./pages/CreaterBlog"
import AboutUs from "./pages/Aboutus";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import CommonHeader from "./pages/CommonHeader";

function App() {
  return (
    <Router>
      <Navbar />
      <CommonHeader />
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;