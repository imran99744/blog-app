import React from "react";
import "./Topbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://safe-harbor-49395.herokuapp.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <FacebookIcon className="icons" />
        <InstagramIcon className="icons" />
        <LinkedInIcon className="icons" />
        <PinterestIcon className="icons" />
      </div>

      <div className="topCenter">
        <ul className="listItem">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                {" "}
                LOGIN{" "}
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/register">
                {" "}
                REGISTER{" "}
              </Link>
            </li>
          </ul>
        )}

        <SearchIcon className="topSearchIcon" />
      </div>
    </div>
  );
}

export default Topbar;
