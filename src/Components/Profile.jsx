import React from "react";
import "../css/Profile.css";
import profile from "../images/profile.jpg";
import { Button } from "@material-ui/core";

function Profile() {
document.title = "Rishi's Blog | Profile"
  return (
    <div className="profile-container">
      <div>
        <h1>Profile</h1>
        <img
          style={{ height: "140px", borderRadius: "50%", padding: "20px" }}
          src={profile}
          alt=""
        />
        <h2>
          Name: <span>Rishikesh, Site admin</span>{" "}
        </h2>
        <h2 style={{ padding: "20px" }}>
          Designation: <span>Fullstack Developer</span>{" "}
        </h2>
        <p>
          Hello I'm a Fullstack Developer based on India. <br /> I enjoy
          creating things that live on the internet, whether that be websites,{" "}
          <br />
          applications, or anything in between. My goal is to always build
          products <br /> that provide pixel-perfect, performant experiences
        </p>
        <a
          rel="noopener noreferrer"
          href="https://findrishi.netlify.app"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <Button variant="contained" color="primary">
            Portfolio
          </Button>
        </a>
        <a
          // rel="noopener noreferrer"
          href="/"
          style={{ textDecoration: "none", margin: "20px" }}
        >
          <Button variant="contained" color="primary">
            Home
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
