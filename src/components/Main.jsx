
import { Link } from "react-router-dom";

function Main() {
    const servicios = [
        {
            icono: "✦",
            titulo: "Diseño UI/UX",
            descripcion:
                "Interfaces intuitivas y experiencias pensadas para las personas.",
            numero: "01",
        },
        {
            icono: "</>",
            titulo: "Desarrollo web",
            descripcion:
                "Aplicaciones modernas, rápidas y adaptables a cualquier pantalla.",
            numero: "02",
        },
        {
            icono: "↗",
            titulo: "Soluciones digitales",
            descripcion:
                "Transformamos ideas en productos digitales funcionales.",
            numero: "03",
        },
    ];

    return (
        <main>
            {/* Sección principal */}
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="eyebrow">
                            <span className="status-dot"></span>
                            CREAMOS EXPERIENCIAS DIGITALES
                        </span>

                        <h1>
                            Tus ideas merecen
                            <span className="gradient-text"> algo extraordinario.</span>
                        </h1>

                        <p className="hero-description">
                            Diseñamos y desarrollamos soluciones digitales que combinan
                            tecnología, creatividad y una experiencia de usuario excepcional.
                        </p>

                        <div className="hero-actions">
                            <Link to="/servicios" className="button-primary">
                                Explorar servicios <span>→</span>
                            </Link>

                            <Link to="/contacto" className="button-secondary">
                                Hablemos de tu idea
                            </Link>
                        </div>

                        <div className="hero-note">
                            <span className="note-icon">✓</span>
                            Diseño centrado en las personas
                        </div>
                    </div>

                    {/* Panel visual decorativo */}
                    <div className="hero-visual" aria-hidden="true">
                        <div className="visual-glow"></div>

                        <div className="visual-card">
                            <div className="visual-card-top">
                                <span className="visual-dot"></span>
                                <span className="visual-dot"></span>
                                <span className="visual-dot"></span>
                                <span className="visual-label">PROJECT_OVERVIEW</span>
                            </div>

                            <div className="visual-content">
                                <span className="visual-tag">DIGITAL EXPERIENCE</span>
                                <div className="visual-title">
                                    Design.
                                    <br />
                                    Develop.
                                    <br />
                                    <span>Deliver.</span>
                                </div>

                                <div className="visual-progress">
                                    <div className="progress-label">
                                        <span>Experiencia de usuario</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="progress-track">
                                        <div className="progress-fill"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="visual-card-bottom">
                                <span>CREATIVIDAD + TECNOLOGÍA</span>
                                <span>2026 ↗</span>
                            </div>
                        </div>

                        <div className="floating-badge">
                            <span>✦</span> Innovación digital
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios destacados */}
            <section className="services-section" id="servicios">
                <div className="section-heading">
                    <div>
                        <span className="section-label">LO QUE HACEMOS</span>
                        <h2>Ideas que se convierten en realidad.</h2>
                    </div>

                    <Link to="/servicios" className="text-link">
                        Ver todos los servicios →
                    </Link>
                </div>

                <div className="services-grid">
                    {servicios.map((servicio) => (
                        <article className="service-card" key={servicio.numero}>
                            <div className="service-card-top">
                                <span className="service-icon">{servicio.icono}</span>
                                <span className="service-number">{servicio.numero}</span>
                            </div>

                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>

                            <Link
                                to="/servicios"
                                className="service-link"
                                aria-label={`Conocer más sobre ${servicio.titulo}`}
                            >
                                Explorar servicio <span>↗</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* Llamada a la acción */}
            <section className="contact-banner">
                <div>
                    <span className="section-label">¿TIENES UN PROYECTO?</span>
                    <h2>Hagamos algo increíble juntos.</h2>
                    <p>Tu próxima gran idea puede comenzar hoy.</p>
                </div>

                <Link to="/contacto" className="button-light">
                    Empezar un proyecto ↗
                </Link>
            </section>
        </main>
    );
}

export default Main;
