/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";

const dashboard = () => {
  const { user, signOut } = useAuth();
  useEffect(() => {
    api.get("/me").then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        height: "97vh",
        color: "#fff",
      }}
    >
      <h1 onClick={signOut}>dashboard: {user?.email}</h1>
    </div>
  );
};

export default dashboard;
