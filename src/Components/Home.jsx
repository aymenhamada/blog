import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import "../css/Home.css";
import PostCard from "./PostCard";

function Home() {
  
  useEffect(() => {
    fetchData();
  }, []);
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const url = "https://run.mocky.io/v3/2cc5e901-012a-49c7-8418-fd0af3ad868d";

    const result = await fetch(url);
    const parsedData = await result.json();
    setPosts(parsedData);
    localStorage.setItem("posts", JSON.stringify(posts));
  };
  return (
    <div className="showcase">
      <Navbar />
      <Content />
      <br />
      <br />
      <br />
      <br />
      <div className="heading-holder">
        <h1 style={{ textAlign: "center" }}>Featured Posts</h1>
        <div className="bar"></div>
      </div>
      <div className="card-holder" id="featured">
        {posts.map((post) => {
          return (
            <PostCard
              id={post.id}
              key={post.id}
              title={post.title}
              date={post.date}
              imgSource={post.imgSource}
              postBodyTitle={post.postBodyTitle}
              time={post.time}
            />
          );
        })}
      </div>
      <hr style={{ width: "100%" }} />
      <Footer />
    </div>
  );
}

export default Home;
