import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const [view, setView] = useState("login");

  return (
    <div className="container">
      <h1 className="logo">
        <span className="blue">G</span>
        <span className="red">D</span>
        <span className="yellow">G</span>
        <span className="green"> Portal</span>
      </h1>

      <div className="card">
        {view === "login" && <Login setView={setView} />}
        {view === "register" && <Register setView={setView} />}
        {view === "forgot" && <ForgotPassword setView={setView} />}
      </div>
    </div>
  );
}

export default App;
