import React from "react";
import Sidebar from "../../../sidebar/Sidebar";
import SingelPost from "../../singelPost/SingelPost";
import "./Singel.css";

function Singel() {
  return (
    <div className="singel">
      <SingelPost />
      <Sidebar />
    </div>
  );
}

export default Singel;
