import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });

  // useEffect(() => {
  //   let register = localStorage.getItem("register");
  //   if (!register) {
  //     navigate("/register");
  //   }
  // });

  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoute;
