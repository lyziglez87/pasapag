export default function Reporte() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado");
    };

    return (
        <>
            <h1>FORMULARIOS</h1>

            {/* 1. Formulario de Registro */}
            <section>
                <h2>Formulario de Registro</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nombre de usuario:</label>
                    <input type="text" name="usuario" required />

                    <label>Correo electrónico:</label>
                    <input type="email" name="email" required />

                    <label>Contraseña:</label>
                    <input type="password" name="password" required />

                    <fieldset>
                        <legend>Ocupación:</legend>
                        <div className="checkbox-grid">
                            <label><input type="checkbox" name="ocupacion" value="estudiante" /> Estudiante</label>
                            <label><input type="checkbox" name="ocupacion" value="maestro" /> Maestro</label>
                            <label><input type="checkbox" name="ocupacion" value="ciudadano" /> Ciudadano</label>
                            <label><input type="checkbox" name="ocupacion" value="administrador" /> Administrador</label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Tipo de transporte:</legend>
                        <div className="checkbox-grid">
                            <label><input type="checkbox" name="transporte" value="carro" /> Carro</label>
                            <label><input type="checkbox" name="transporte" value="privado" /> Transporte privado</label>
                            <label><input type="checkbox" name="transporte" value="combi" /> Combi</label>
                            <label><input type="checkbox" name="transporte" value="camion" /> Camión</label>
                            <label><input type="checkbox" name="transporte" value="moto" /> Moto</label>
                            <label><input type="checkbox" name="transporte" value="bicicleta" /> Bicicleta</label>
                            <label><input type="checkbox" name="transporte" value="caminando" /> Caminando</label>
                        </div>
                    </fieldset>

                    <button type="submit">Registrarse</button>
                </form>
            </section>

            {/* 4. Formulario de Reporte de Incidentes */}
            <section>
                <h2>Reporte de Incidente</h2>
                <form onSubmit={handleSubmit} className="incident-form">
                    <label htmlFor="zona">Zona del incidente:</label>
                    <input
                        type="text"
                        id="zona"
                        name="zona"
                        placeholder="Ej. Centro de Tepotzotlán"
                        required
                    />

                    <label htmlFor="nivelPeligro">Nivel de peligro percibido:</label>
                    <input
                        type="range"
                        id="nivelPeligro"
                        name="nivelPeligro"
                        min="0"
                        max="10"
                        defaultValue="5"
                    />
                    <div className="range-scale">
                        <span>0</span>
                        <span>5</span>
                        <span>10</span>
                    </div>

                    <fieldset>
                        <legend>Tipo de incidente:</legend>
                        <div className="checkbox-grid">
                            <label><input type="checkbox" name="tipoIncidente" value="robo" /> Robo</label>
                            <label><input type="checkbox" name="tipoIncidente" value="secuestro" /> Secuestro</label>
                            <label><input type="checkbox" name="tipoIncidente" value="agresion" /> Agresión</label>
                            <label><input type="checkbox" name="tipoIncidente" value="extorsion" /> Extorsión</label>
                            <label><input type="checkbox" name="tipoIncidente" value="acoso" /> Acoso</label>
                            <label><input type="checkbox" name="tipoIncidente" value="violacion" /> Violación</label>
                            <label><input type="checkbox" name="tipoIncidente" value="asesinato" /> Asesinato</label>
                            <label><input type="checkbox" name="tipoIncidente" value="grupos" /> Grupos delictivos</label>
                        </div>
                    </fieldset>

                    <label htmlFor="descripcion">Descripción del incidente:</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        rows="4"
                        placeholder="Describe lo ocurrido con el mayor detalle posible..."
                    ></textarea>

                    <label htmlFor="fecha">Fecha del incidente:</label>
                    <input type="date" id="fecha" name="fecha" required />

                    <section>
                        <h2>Carga de pruebas en Archivo</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Selecciona un archivo:</label>
                            <input type="file" name="archivo" />
                            <button type="submit">Subir archivo</button>
                        </form>
                    </section>

                    <label><input type="checkbox" name="anonimo" value="si" /> Anónimo</label>

                    <button type="submit">Enviar reporte</button>
                </form>
            </section>

        </>
    );
}
