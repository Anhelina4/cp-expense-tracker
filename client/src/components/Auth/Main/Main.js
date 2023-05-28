import { Form, Graph } from "../../../components";

import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
    navigate("/login");
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1 className="text-4xl  text-white rounded">Expense tracker</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="flex justify-center bg-gray-100	w-screen h-screen">
        <div className="container text-center">
          {/* GRID COLUMNS */}
          <div className="flex justify-center gap-48">
            <Graph />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
