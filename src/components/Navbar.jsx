import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#38bdf8" : theme === "dark" ? "white" : "#111827",
    marginRight: "20px",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav style={{ padding: "20px", background: theme === "dark" ? "#111827" : "#e2e8f0" }}>
      <h2 style={{ display: "inline-block", marginRight: "30px" }}>AI Insight Hub</h2>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/analyze" style={linkStyle}>Analyze</NavLink>
      <NavLink to="/history" style={linkStyle}>History</NavLink>
      <button onClick={toggleTheme} style={{ marginLeft: "20px", padding: "5px 10px" }}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;