// import react from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Landing from "./Home";
import Favs from "./Favs";
import Search from "./Search";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/Favs" element={<Favs />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
}

export default Pages;
