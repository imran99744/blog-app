import { React, useState, useEffect } from "react";
import Header from "../../../header/Header";
import Posts from "../../../posts/Posts";
import Sidebar from "../../../sidebar/Sidebar";
import "./Home.css";
import axios from "../../axios";
import { useLocation } from "react-router";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="home">
      <Header />
      <div className="homePage">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
