import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./contents/Login";
import Posts from "./contents/Posts";

const Content = ({ user, setUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/posts" /> : <Login setUser={setUser} />}
      />
      <Route path="/posts" element={user ? <Posts /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default Content;
