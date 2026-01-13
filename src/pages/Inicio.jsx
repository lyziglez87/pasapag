export default function Inicio() {
    return (
        <section
            style={{
                padding: "24px",
                maxWidth: "900px",    //ANCHO DEL CONTENIDO
                margin: "0 auto",    //centra TODO EL CONTENIDO
                textAlign: "center" //centra titulos,imagenes
            }}
        >
            <header>
                <h2>Ruta Segura — ¿Qué es este proyecto?</h2>
            </header>

            <article style={{ textAling: "justify" }}>
                <p> El proyecto Ruta Segura nace con el propósito de brindar a toda la comunidad estudiantil
                    caminos confiables y protegidos al trasladarse hacia y desde el CECYTEM. Sabemos que la
                    seguridad es una necesidad fundamental, por ese buscamos
                    Identificar rutas adecuadas, zonas de riesgo y alternativas que permitan un desplazamiento
                    tranquilo y seguro.
                </p>

                <p> Como estudiantes, comprendemos que las experiencias difíciles pueden convertirse en aprendizaje
                    y prevención. Por ello, transformamos el dolor en acciones concretas que fortalezcan la seguridad y promuevan
                    la responsabilidad colectiva. Este proyecto refleja nuestro compromiso con cada integrante de
                    la comunidad escolar.
                </p>
                <p> Nuestro objetivo es construir un entorno en el que todos podamos
                    sentirnos protegidos. La seguridad no depende de una sola persona, sino de la unión y
                    participación de todos. A través de Ruta Segura, buscamos hacer de nuestra escuela y sus
                    alrededores un espacio seguro, solidario y consciente, donde cada paso cuente y cada estudiante
                    llegue a salvo.

                </p>
                <figure style={({ textAlign: "center", margintop: "20px" })}>
                    <img
                        src="img\PASA.png"
                        alt="Ruta"
                        width="700"
                        style={{ display: "block", margin: "0 auto" }}
                    />
                </figure>
            </article>
        </section>
    );
}