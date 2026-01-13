import { NavLink } from "react-router-dom";
const linkStyle = ({ isActive }) => ({
    padding: "8px 12px",
    marginRight: 8,
    textDecoration: "center",

    borderRadius: 8,
    fontWeight: 600,
    justifyContent: "center",
    gap: "12px",
    position: "sticky",
    background: isActive ? "#e6ecff" : "transparent",
    color: "#389900ff",
    border: "1px solid #bcd",
});
export default function NavBar() {
    return (
        <center> <nav style={{ padding: "8px 24px", background: "#f6f8ff" }}>
            <NavLink end to="/" style={linkStyle}>Inicio</NavLink>
            <NavLink to="/Zonadecuidado" style={linkStyle}>Zonadecuidado</NavLink>
            <NavLink to="/Reporte" style={linkStyle}>Reporte</NavLink>
            <NavLink to="/Guiadecuidado" style={linkStyle}>Guiadecuidado</NavLink>
            <NavLink to="/Reporte" style={linkStyle}>Reporte</NavLink>
            <NavLink to="/Registro" style={linkStyle}>Registro</NavLink>

        </nav></center>

    );

}
