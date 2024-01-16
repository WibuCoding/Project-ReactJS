import React from "react";
import HalamanBuku from "./Crud/HalamanBuku";
import HalamanPeminjam from "./Crud/HalamanPeminjam";
import NavbarComponent from "./Crud/NavbarComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <NavbarComponent />
          <Routes>
            <Route path="/books" element={<HalamanBuku />} />
            <Route path="/peminjam" element={<HalamanPeminjam />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
