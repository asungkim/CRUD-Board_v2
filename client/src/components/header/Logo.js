import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Asung CRUD Board
        </Link>
      </h1>
    </div>
  );
};
export default Logo;
