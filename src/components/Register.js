import React, { useState } from "react";

function Register({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [strength, setStrength] = useState("");

  // Password strength checker
  const checkStrength = (pwd) => {
    if (pwd.length === 0) return "";
    if (pwd.length < 6) return "Weak";
    if (/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(pwd)) return "Strong";
    return "Medium";
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    alert("Registration successful 🎉");
    setView("login");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
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
        onChange={handlePasswordChange}
      />
      {strength && (
        <p
          className={`strength ${strength.toLowerCase()}`}
        >
          Password Strength: {strength}
        </p>
      )}

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button type="submit">Register</button>

      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => setView("login")}>
          Login
        </span>
      </p>
    </form>
  );
}

export default Register;
