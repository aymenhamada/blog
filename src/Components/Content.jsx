import React from "react";

function Content() {
  return (
    <div className="content">
      <h1 className="first-heading">
        Hello World I'm Rishikesh, This is my blog.{" "}
      </h1>
      <h1> I write a lot about Coding </h1>
      <h1> and Life Skills.</h1>
      <div style={{ paddingLeft: "30px", marginTop: "50px" }}>
        <a
          style={{ padding: "15px 25px", fontSize: "20px" }}
          href="#featured"
          className="btn"
        >
          Featured Posts
        </a>
      </div>
    </div>
  );
}

export default Content;
