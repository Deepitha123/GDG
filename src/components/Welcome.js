import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>🚀 Welcome to GDG on Campus - CIT</h1>
      <p className="tagline">Learn • Build • Connect • Grow</p>

      <div className="why-gdg">
        <h2>🌟 Why GDG?</h2>
        <ul>
          <li>🔥 Hands-on workshops on Google Technologies</li>
          <li>🌍 Connect with developers & innovators worldwide</li>
          <li>🚀 Build projects that create real-world impact</li>
          <li>🎉 Fun, networking & lifelong friendships</li>
        </ul>
      </div>

      <div className="highlight">
        <h3>✨ Be part of the Google Developer journey!</h3>
        <p>From Cloud to AI/ML, Flutter to Firebase — we bring opportunities to you!</p>
      </div>

      <button className="join-btn">Join the Movement 🚀</button>
    </div>
  );
}

export default Welcome;
