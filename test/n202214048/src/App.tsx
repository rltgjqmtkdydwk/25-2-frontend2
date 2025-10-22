import React from "react";
import Exam1 from "./Exam1";
import Exam2 from "./Exam2";
import Exam3 from "./Exam3";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-box">
        <Exam1 />
        <Exam2 />
        <Exam3 />
      </div>
    </div>
  );
}

export default App;
