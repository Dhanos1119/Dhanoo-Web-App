import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminAccessModal({ onClose, onGoToAdmin }) {
  const { loginAdmin, createAdmin } = useAuth();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("info");
  const [canGoToAdmin, setCanGoToAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔥 Add Admin Section toggle
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  // Add admin form values
  const [newName, setNewName] = useState("");       // ⬅️ NEW
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await loginAdmin(email, password);

      setStatusType("info");
      setStatus("Signed in. Checking admin access…");

      // Later: real admin role check
      const isAdmin = true;

      if (isAdmin) {
        setStatusType("ok");
        setStatus("Admin access verified.");
        setCanGoToAdmin(true);
      } else {
        setStatusType("error");
        setStatus("Not an admin.");
      }
    } catch (err) {
      setStatusType("error");
      setStatus(err.message || "Login failed.");
    }

    setLoading(false);
  }

  // 🔥 Add new admin
  async function handleAddAdmin(e) {
    e.preventDefault();
    setStatusType("info");
    setStatus("Creating admin...");

    try {
      // ⬇️ Name + email + password
      await createAdmin(newEmail, newPassword, newName);

      setStatusType("ok");
      setStatus("New admin created successfully!");

      // reset fields
      setNewName("");
      setNewEmail("");
      setNewPassword("");
      setShowAddAdmin(false);

    } catch (err) {
      setStatusType("error");
      setStatus(err.message || "Error creating admin.");
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* CLOSE BUTTON */}
        <div className="modal-close" onClick={onClose}>✕</div>

        {/* TITLE */}
        <h2 className="modal-title">Admin Access</h2>

        {/* LOGIN SECTION */}
        <h3 style={{ marginBottom: 10 }}>Login to Admin</h3>
        <form className="modal-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn-primary full" type="submit">
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        {/* STATUS */}
        {status && (
          <p
            style={{
              marginTop: 6,
              fontSize: "0.85rem",
              color:
                statusType === "ok"
                  ? "#22c55e"
                  : statusType === "error"
                  ? "#ef4444"
                  : "#fde047",
            }}
          >
            {status}
          </p>
        )}

        {/* Go to admin */}
        <button
          style={{
            marginTop: 10,
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid #fff",
            background: "transparent",
            color: "#fff",
            width: "100%",
            cursor: canGoToAdmin ? "pointer" : "not-allowed",
            opacity: canGoToAdmin ? 1 : 0.5,
          }}
          onClick={() => canGoToAdmin && onGoToAdmin()}
        >
          Go to Admin
        </button>

        {/* DIVIDER */}
        <hr style={{ margin: "18px 0", borderColor: "rgba(148,148,148,0.3)" }} />

        {/* MANAGE ADMINS */}
        <h3 style={{ marginBottom: 10 }}>Manage Admins</h3>

        <button
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid #fff",
            width: "100%",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
            marginBottom: showAddAdmin ? 12 : 0,
          }}
          onClick={() => setShowAddAdmin(!showAddAdmin)}
        >
          {showAddAdmin ? "Cancel" : "Add New Admin"}
        </button>

        {/* 🔥 Slide-down add admin form */}
        {showAddAdmin && (
          <form
            className="modal-form"
            onSubmit={handleAddAdmin}
            style={{
              marginTop: 12,
              paddingTop: 10,
              borderTop: "1px solid rgba(148,148,148,0.3)",
            }}
          >
            <input
              type="text"
              placeholder="Admin name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="New admin email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="New admin password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <button className="btn-primary full">Grant Admin</button>
          </form>
        )}
      </div>
    </div>
  );
}
