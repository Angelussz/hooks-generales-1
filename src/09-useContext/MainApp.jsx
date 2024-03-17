import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { Login } from "./Login";
import {Navbarr} from "./Navbarr";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbarr />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to={"/about"} />} />
      </Routes>
    </UserProvider>
  );
};
