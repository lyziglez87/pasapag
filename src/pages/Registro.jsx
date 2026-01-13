import React, { useState } from "react";

export default function Registro() {
    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        password: "",
        confirmar: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmar) {
            alert("Las contraseñas no coinciden");
            return;
        }
        console.log("Datos enviados:", form);
        alert("Registro exitoso");
        setForm({ nombre: "", correo: "", password: "", confirmar: "" });
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f6f8ff",
                padding: "20px",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "12px",
                    maxWidth: "400px",
                    width: "100%",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    textAlign: "center",
                }}
            >
                {/* Logo opcional */}
                <img
                    src="/img/LOGO.png.png"
                    alt="Logo"
                    width="150"
                    style={{
                        borderRadius: "12px",
                        marginBottom: "16px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                />

                <h2 style={{ marginBottom: "20px", color: "#389900", fontSize: "32px" }}>
                    Registro
                </h2>

                <label style={labelStyle}>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="Ingresa tu nombre"
                />

                <label style={labelStyle}>Correo</label>
                <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="Ingresa tu correo"
                />

                <label style={labelStyle}>Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="Ingresa tu contraseña"
                />

                <label style={labelStyle}>Confirmar contraseña</label>
                <input
                    type="password"
                    name="confirmar"
                    value={form.confirmar}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="Confirma tu contraseña"
                />

                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => (e.target.style.background = "#2a7000")}
                    onMouseLeave={(e) => (e.target.style.background = "#389900")}
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
}

// Estilos
const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "6px 0 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
};

const labelStyle = {
    display: "block",
    textAlign: "left",
    marginBottom: "6px",
    fontWeight: "bold",
};

const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "16px",
    background: "#389900",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
};
