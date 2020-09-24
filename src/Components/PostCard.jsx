import React from "react";
import { Link } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
import "../css/PostCard.css";
function PostCard(props) {
  return (
    <Link
      to={`/posts/${props.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="post-card">
        <img src={props.imgSource} alt="" />
        <h1 className="title">{props.title}</h1>
        <p className="post-body-title">
          {props.postBodyTitle}{" "}
          <span style={{ color: "blue" }}> Read More...</span>
        </p>
        <div className="post-container">
          <p className="gray">{props.date}</p>
          <p className="gray">• {props.time}</p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
