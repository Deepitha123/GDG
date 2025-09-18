import React, { useState } from "react";

function Login({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format!");
      return;
    }
    setError("");
    alert("Login successful 🎉");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>

      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={() => setView("register")}>
          Register
        </span>
      </p>
      <p>
        <span className="link" onClick={() => setView("forgot")}>
          Forgot Password?
        </span>
      </p>
    </form>
  );
}

export default Login;
