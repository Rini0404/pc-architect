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

function Pages() {
  const location = useLocation();
  
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem("user");

    const user = JSON.parse(token); 


    setIsUserLoggedIn(!!user);
    
    if (user?.token) {
      dispatch(getMe(user.token))
    }

    console.log("Hook ran for sesh")

  }, []);

  return (
    <Routes location={location} key={location.pathname}>
      {!isUserLoggedIn && (
        <>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </>
      )}
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/Favs" element={<Favs />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
}

export default Pages;
