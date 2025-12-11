import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://netflix-login-website-cwfs.onrender.com", {

        email,
        password,
      });

      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container" style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#000",
      color: "white",
      padding: "20px"
    }}>

      

      {/* LOGIN FORM */}
      <form
        onSubmit={handleLogin}
        style={{
          background: "#111",
          padding: "30px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
            background: "#222",
            color: "white"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
            background: "#222",
            color: "white"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#e50914",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Login
        </button>
      </form>
      {/* ⭐ DEMO CREDENTIALS BOX (Visible Always) */}
      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "350px",
          border: "1px solid #e50914",
          textAlign: "center"
        }}
      >
        <h3 style={{ marginBottom: "10px", color: "#e50914" }}>
          ⭐ Demo Credentials
        </h3>

        <p><b>Email:</b>Subha@gmail.com</p>
        <p><b>Password:</b> 123456</p>
      </div>
    </div>
  );
}

