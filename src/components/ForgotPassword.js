import React, { useState } from "react";

function ForgotPassword({ setView }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Enter your registered email!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Invalid email format!");
      return;
    }
    setMessage("A reset link has been sent to your email (mock flow).");
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Forgot Password</h2>
      {message && <p className="info">{message}</p>}
      <input
        type="email"
        placeholder="Enter registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Send Reset Link</button>

      <p>
        <span className="link" onClick={() => setView("login")}>
          Back to Login
        </span>
      </p>
    </form>
  );
}

export default ForgotPassword;
