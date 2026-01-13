
export default function Header() {
    return (
        <header
            style={{
                background: "#389900ff",
                color: "white",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                textAlign: "right",
            }}
        >
            <figure
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    gap: 12,
                    margin: 0,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",   // alinea verticalmente texto e imagen
                        justifyContent: "flex-start", // todo a la izquierda
                        gap: "12px",           // espacio entre imagen y texto
                    }}
                >
                    <img
                        src="/img/LOGO.png.png"
                        alt="Ruta"
                        width="150"
                        style={{
                            borderRadius: "20px",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                            border: "3px solid #ffffff",
                            padding: "6px",
                            backgroundColor: "#ffffff",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.35)";
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
                        }}
                    />


                    <h1
                        style={{
                            margin: 50,
                            fontSize: "150px",                 // tamaño 80
                            fontFamily: "'Lucida'",
                            color: "#ffffff",                 // color del texto
                            fontStyle: "normal",              // quita la cursiva de <em>
                            letterSpacing: "2px",             // opcional: más presencia
                        }}
                    >
                        <em>PASA</em>
                    </h1>
                </div>
            </figure>


        </header>
    );
}
