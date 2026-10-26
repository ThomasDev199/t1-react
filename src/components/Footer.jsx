import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <Link to="/" className="logo footer-logo">
                            <span className="logo-icon">N</span>
                            <span>Nova<span className="logo-punto">.</span></span>
                        </Link>

                        <p>
                            Transformamos ideas en experiencias digitales
                            que generan impacto.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Explorar</h3>
                        <Link to="/">Inicio</Link>
                        <Link to="/servicios">Servicios</Link>
                        <Link to="/contacto">Contacto</Link>
                    </div>

                    <div className="footer-column">
                        <h3>Conecta</h3>
                        <a
                            href="https://github.com/ThomasDev199"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub ↗
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn ↗
                        </a>
                        <a href="thomascanozapata571@gmail.com">
                            Correo electrónico ↗
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Nova. Todos los derechos reservados.
                    </p>

                    <a href="#top" className="back-to-top">
                        Volver arriba ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
