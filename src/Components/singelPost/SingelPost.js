import { React, useState, useEffect, useContext } from "react";
import "./SingelPost.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "../axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function SingelPost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDes(res.data.des);
    };
    getPost();
  }, [path]);

  const handleDetele = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        des,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singelPost">
      <div className="singelPostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="postTitle">
            {title}
            {post.username === user?.username && (
              <div className="singelPostEdit">
                <EditIcon
                  className="singlePostIcon"
                  onClick={() => setUpdateMode(true)}
                />
                <DeleteIcon className="singlePostIcon" onClick={handleDetele} />
              </div>
            )}
          </h1>
        )}

        <div className="singelPostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="singelPostAuthor">{post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{des}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SingelPost;
