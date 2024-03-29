import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "https://safe-harbor-49395.herokuapp.com/images/";

  return (
    <div className="post">
      {post.photo && <img alt="" className="postImg" src={PF + post.photo} />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDes">{post.des}</p>
    </div>
  );
}

export default Post;
