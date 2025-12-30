import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useTheme } from "../theme/ThemeContext";

function Navbar() {
  const { user, logout } = useAuth();
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <nav className="w-full px-10 py-4 border-b flex items-center bg-white dark:bg-gray-900">
      
      {/* LEFT */}
      <div className="flex-1"></div>

      {/* CENTER LOGO */}
      <div
        className="flex-1 text-center text-2xl font-semibold cursor-pointer"
        onClick={() => navigate("/products")}
      >
        Slooze
      </div>

      {/* RIGHT MENU */}
      <div className="flex-1 flex justify-end items-center">
  <div className="nav-links">

    {user?.role === "manager" && (
      <span
        className="nav-link"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </span>
    )}

    <span
      className="nav-link"
      onClick={() => navigate("/products")}
    >
      Products
    </span>

    <button onClick={toggleTheme}>🌙</button>

    <button
      onClick={() => {
        logout();
        navigate("/login");
      }}
    >
      Logout
    </button>

  </div>
</div>

    </nav>
  );
}

export default Navbar;
