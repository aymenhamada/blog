import React from "react";
function Navbar() {
  return (
    <div className="home-navbar">
      <a style={{ textDecoration: "none", color: "black" }} href="/">
        <h1 className="logo">R</h1>{" "}
      </a>
      <a className="btn" href="/profile">
        About Me
      </a>
    </div>
  );
}

export default Navbar;
