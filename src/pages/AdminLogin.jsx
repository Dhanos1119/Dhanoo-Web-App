// src/pages/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
  const { loginAdmin, createAdmin } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // "login" | "create"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password || (mode === "create" && !name)) {
      setError("Please fill all fields machan.");
      return;
    }

    try {
      let res;
      if (mode === "login") {
        // 🔐 LOGIN as existing admin
        res = await loginAdmin({ email, password });
      } else {
        // 🆕 CREATE new admin account
        res = await createAdmin({ name, email, password });
      }

      if (!res.ok) {
        // friendly messages
        if (res.code === "auth/user-not-found") {
          setError("No account with that email.");
        } else if (res.code === "auth/wrong-password") {
          setError("Wrong password.");
        } else if (res.code === "auth/email-already-in-use") {
          setError("That email already has an account.");
        } else {
          setError(res.message || "Something went wrong.");
        }
        return;
      }

      if (mode === "login") {
        // ✅ ADMIN LOGIN SUCCESS
        // admin dashboard / page – change route if you have different one
        navigate("/admin"); 
      } else {
        // ✅ ADMIN CREATED SUCCESS
        setMode("login");
        setPassword("");
        setError("Admin created! Please login with that email.");
      }
    } catch (err) {
      console.error("Admin form error:", err);
      setError("Unexpected error, try again.");
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 420, margin: "40px auto" }}>
      <h1>Admin Login</h1>
      <p>This area is restricted. Only admin can login.</p>

      {/* 🔁 Mode switch buttons */}
      <div style={{ display: "flex", marginTop: 16, marginBottom: 16 }}>
        <button
          type="button"
          onClick={() => setMode("login")}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: "20px 0 0 20px",
            border: "none",
            background: mode === "login" ? "#22c55e" : "#111827",
            color: "white",
          }}
        >
          Login as admin
        </button>
        <button
          type="button"
          onClick={() => setMode("create")}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: "0 20px 20px 0",
            border: "none",
            background: mode === "create" ? "#22c55e" : "#111827",
            color: "white",
          }}
        >
          Create admin
        </button>
      </div>

      {error && (
        <p style={{ color: "salmon", fontSize: "0.9rem", marginBottom: 8 }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
        {mode === "create" && (
          <>
            <label>Admin name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dhano Admin"
              style={{ width: "100%", marginBottom: 10, padding: 8 }}
            />
          </>
        )}

        <label>Admin Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@brainfuel.it"
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          style={{ width: "100%", marginBottom: 16, padding: 8 }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 999,
            border: "none",
            background: "#22c55e",
            color: "black",
            fontWeight: 600,
          }}
        >
          {mode === "login" ? "Login as admin" : "Create admin"}
        </button>
      </form>
    </div>
  );
}
