import { NavLink, Link } from "react-router-dom";
import { useTodo } from "../../context/TodoContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import "./Navbar.scss";

const Navbar = () => {
  const { theme, toggleTheme } = useTodo();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">
            ✓
          </div>
          <span className="brand-text">TodoListApp</span>
        </Link>

        <div className="navbar-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            end
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/add" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Add Todo
          </NavLink>
          
          <NavLink 
            to="/completed" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Completed
          </NavLink>

          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label="Toggle Theme"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <WbSunnyOutlinedIcon />
            )}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;