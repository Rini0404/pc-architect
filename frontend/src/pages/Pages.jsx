// import react from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Landing from "./Landing";
// import {AnimatePresence} from 'framer-motion';


function Pages() {
  const location = useLocation();
  return (
    // <AnimatePresence exitBeforeEnter>
    <Routes location={location} key= {location.pathname}>
      <Route path="/" element={<Landing />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Landing" element={<Landing />} />
    </Routes>
    // </AnimatePresence>
    );
  }

export default Pages  