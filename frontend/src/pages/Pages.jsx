import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Landing from "./Home";
import Favs from "./Favs";
import Search from "./Search";
import { getMe } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { ProtectedElement } from "../components/Protection";

function Pages() {
  const location = useLocation();

  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem("user");

    const user = JSON.parse(token);

    if (user?.token) {
      dispatch(getMe(user.token));
    }
  }, []);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/Favs" element={<ProtectedElement><Favs /></ProtectedElement>} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
}

export default Pages;
