import React from "react";
import { Link } from "react-router-dom";

function DashNav() {
  return (
    <Link
      style={{ color: "#fff", textDecoration: "none" }}
      to="/admin/dashboard"
    >
      <h1>Dashboard</h1>
    </Link>
  );
}

export default DashNav;
