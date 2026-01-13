export default function Footer() {
    return (
        <footer style={{ marginTop: 24, padding: "16px 24px", background: "#0e133f", color: "white" }}>
            <section>
                <h2>Contacto</h2>
                <address>
                    CECyTEM — Plantel Tepotzotlán<br />
                    <a href="mailto:seguridad@cecytem.edu.mx" style={{ color: "white" }}>
                        seguridad@cecytem.edu.mx
                    </a>
                </address>
            </section>
            <aside style={{ marginTop: 8 }}>
                <details>
                    <summary>Créditos y aviso</summary>
                    <p>Este sitio educativo promueve la cultura de prevención.</p>
                </details>
            </aside>
            <small>© {new Date().getFullYear()} CECYTEM Seguro</small>
            <figcaption>

                <time dateTime={new Date().toISOString().slice(0, 10)}>
                    {new Date().toLocaleDateString("es-MX")}
                </time>
            </figcaption>
        </footer>
    );
}