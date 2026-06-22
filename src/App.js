import React from "react";
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";
import LandingPage from "./pages/landingPage";
import SideLink from "./components/common/sideLink/sideLink";
import ScrollProgressBar from "./components/common/ScrollProgressBar/ScrollProgressBar";

function App() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <SideLink />
    </>
  );
}

export default App;
