import { useState } from "react";                    // ⬅️ NEW
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../context/AuthContext";
import AdminAccessModal from "../components/AdminAccessModal";

export default function Navbar({ openModal }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showAdminModal, setShowAdminModal] = useState(false);  // ⬅️ NEW

  // Logout → always go home
  async function handleLogout() {
    await logout();
    navigate("/");
  }

  // popup-la "Go to Admin" press pannumbodhu
  function handleGoToAdmin() {
    navigate("/admin");
  }

  // popup-la "Add New Admin" press pannumbodhu
  function handleAddAdmin() {
    navigate("/admin/manage"); // un route epdi irukko athukku change pannalaam
  }

  return (
    <>
      <header className="topbar">
        {/* LEFT: LOGO */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-mark">CC</span>
            <span className="logo-text">CodeCeylon</span>
          </Link>
        </div>

        {/* RIGHT: NAV + AUTH */}
        <div className="nav-main">
          <nav className="nav-links">
            <NavLink to="/java" className="nav-btn">Java</NavLink>
            <NavLink to="/python" className="nav-btn">Python</NavLink>
            <NavLink to="/javascript" className="nav-btn">JavaScript</NavLink>
            <NavLink to="/html" className="nav-btn">HTML</NavLink>
            <NavLink to="/css" className="nav-btn">CSS</NavLink>
            <NavLink to="/cpp" className="nav-btn">C++</NavLink>
          </nav>

          <div className="auth-buttons">
            {/* ❌ Not logged in */}
            {!user && (
              <>
                <NavLink to="/contact" className="nav-btn">Contact</NavLink>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => openModal("login")}
                >
                  Login
                </button>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => openModal("signup")}
                >
                  Sign up
                </button>

                {/* ⬇️ Admin popup open here */}
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setShowAdminModal(true)}
                >
                  Admin
                </button>
              </>
            )}

            {/* ✅ Logged in */}
            {user && (
              <>
                <span className="user-label">
                  {user.role === "admin" ? "Admin" : `Hi, ${user.name || "User"}`}
                </span>

                <button className="btn-outline" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ⬇️ Admin popup render pannradhu */}
      {showAdminModal && (
        <AdminAccessModal
          onClose={() => setShowAdminModal(false)}
          onGoToAdmin={handleGoToAdmin}
          onAddAdmin={handleAddAdmin}
        />
      )}
    </>
  );
}
