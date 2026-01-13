import { useState } from "react";
export default function Guiadecuidado() {
    const [enviado, setEnviado] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setErrorMsg("");
        try {
            const form = new FormData(e.currentTarget);
            const data = Object.fromEntries(form.entries());
            console.log("Reporte:", data); // aquí iría tu fetch/axios si tuvieras backend
            setEnviado(true);
            e.currentTarget.reset();
            setTimeout(() => setEnviado(false), 4000);
        } catch (err) {
            console.error(err);
            setErrorMsg("Ocurrió un error al enviar el reporte.");

        }
    }
    return (
        <section style={{ padding: "24px", Width: 2000 }}>
            <header>
                <iframe width="560" height="300" src="\img\qué-hacer-luego-de-ser-víctima-de-un-robo.mp4"> </iframe>
                <h2>Reportes de incidentes</h2>
                <p>Comparte información para mejorar la seguridad alrededor del plantel.</p>
            </header>
            {errorMsg && (
                <div style={{
                    margin: "12px 0", padding: 12, border: "1px solid #e55", borderRadius: 8, background: "#ffecec"
                }}>
                    {errorMsg}
                </div>
            )}
            {enviado && (
                <div style={{
                    margin: "12px 0", padding: 12, border: "1px solid #6c6", borderRadius: 8, background: "#eaffea"
                }}>
                    ¡Gracias! Tu reporte ha sido enviado.
                </div>
            )}
            <article>
                <form onSubmit={handleSubmit} noValidate>
                    <fieldset style={{ marginBottom: 30 }}>
                        <legend>Datos de contacto</legend>
                        <label htmlFor="nombre">Nombre completo</label>
                        <input id="nombre" name="nombre" type="text" required />
                        <label htmlFor="correo">Correo electrónico</label>
                        <input id="correo" name="correo" type="email" required />
                        <label htmlFor="telefono">Teléfono</label>
                        <input id="telefono" name="telefono" type="tel" />
                    </fieldset>
                    <fieldset style={{ marginBottom: 16 }}>
                        <legend>Detalles del incidente</legend>
                        <label htmlFor="tipo">Tipo de incidente</label>
                        <select id="tipo" name="tipo" required>
                            <option value="">Selecciona...</option>
                            <option value="robo">Robo</option>
                            <option value="acoso">Acoso</option>
                            <option value="accidente">Accidente</option>
                            <option value="vandalismo">Vandalismo</option>
                            <option value="otro">Otro</option>
                        </select>
                        <label htmlFor="lugar">Lugar / referencia</label>
                        <input
                            id="lugar"
                            name="lugar"

                            type="text"
                            placeholder="Calle, esquina, negocio cercano..."
                            list="puntos"
                            required
                        />
                        <datalist id="puntos">
                            <option value="Parada principal" />
                            <option value="Entrada norte" />
                            <option value="Puente peatonal" />
                        </datalist>
                        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "1fr 1fr" }}>
                            <div>
                                <label htmlFor="fecha">Fecha</label>
                                <input id="fecha" name="fecha" type="date" required />
                            </div>
                            <div>
                                <label htmlFor="hora">Hora</label>
                                <input id="hora" name="hora" type="time" required />
                            </div>
                        </div>
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            rows="4"
                            placeholder="¿Qué ocurrió? ¿Hubo lesionados? ¿Testigos?"
                            required
                        />
                        <label htmlFor="archivo">Evidencia (opcional)</label>
                        <input id="archivo" name="archivo" type="file" accept="image/*,video/*" />
                    </fieldset>
                    <fieldset style={{ marginBottom: 16 }}>
                        <legend>Consentimiento</legend>
                        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <input type="checkbox" name="consent" required /> Autorizo el uso de esta información
                            para fines de seguridad escolar.
                        </label>
                    </fieldset>
                    <button type="submit">Enviar reporte</button>
                </form>
            </article>
        </section>
    );
}