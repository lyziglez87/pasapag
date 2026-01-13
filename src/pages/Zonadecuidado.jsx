export default function Zonadecuidado() {
    return (
        <section style={{ padding: "24px", maxWidth: 1100, margin: '0 auto' }}>

            <header>
                <h2>
                    En este apartado queremos brindarles información sobre los lugares que se pueden transitar con seguridad,
                    así como señalar los que es mejor evitar para asegurar su integridad física sin inconvenientes en el transcurso.
                    Como estudiantes del CECyTEM transformaremos el dolor en prevención. La seguridad en nuestra escuela es un compromiso
                    de todos. Tu seguridad es primero, por eso realizamos un plan para asegurar tu camino.
                    De la experiencia nace la fuerza. Unidos por la prevención hacemos de nuestra escuela un espacio seguro.
                </h2>
            </header>

            <section>
                <article>

                    <figure>
                        <img
                            src="img/ciudadania.png"
                            alt="Ruta"
                            width="1000"
                        />
                        <article>

                            <h2> LUGARES SEGUROS</h2>

                            <p>Como estudiantes del cecytem transformaremos el dolor en prevención la seguridad por nuestra escuela es un compromiso
                                de todos tu seguridad es primero por eso realizaremos
                                un plan para asegurar tu camino. De la experiencia, nace la fuerza. Hacemos de nuestra escuela
                                un espacio seguro, unidos por la prevención.</p>

                            <h2> LUGARES INSEGUROS</h2>

                            <p>Fraccionamiento / Colonia El Trébol</p>
                            <p> .</p>


                        </article>
                        {/* === MAPA CORRECTO === */}
                        <iframe
                            title="Mapa CECyTEM"
                            width="100%"
                            height="420"
                            frameBorder="0"
                            scrolling="no"
                            src="https://www.bing.com/maps/embed?h=400&w=800&cp=19.719806~-99.203468&lvl=15&typ=d&sty=h&src=SHELL&FORM=MBEDV8&q=CECYTEM%20Tepotzotlan"
                        ></iframe>
                    </figure>

                </article>
            </section>

        </section>
    );
}
