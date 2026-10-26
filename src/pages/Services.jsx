
import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        icon: "✳",
        title: "Diseño UI/UX",
        description:
            "Diseñamos interfaces intuitivas y atractivas, priorizando las necesidades de tus usuarios.",
        tags: ["Prototipos", "Wireframes", "Experiencia de usuario"],
    },
    {
        number: "02",
        icon: "</>",
        title: "Desarrollo web",
        description:
            "Construimos sitios web modernos, rápidos y adaptables con tecnologías actuales.",
        tags: ["React", "Responsive", "Optimización"],
    },
    {
        number: "03",
        icon: "⌘",
        title: "Aplicaciones web",
        description:
            "Creamos experiencias interactivas y funcionalidades a la medida de tu negocio.",
        tags: ["Frontend", "Integraciones", "Funcionalidades"],
    },
    {
        number: "04",
        icon: "↗",
        title: "Mantenimiento y mejora",
        description:
            "Mejoramos productos existentes para ofrecer una experiencia más clara y eficiente.",
        tags: ["Rendimiento", "Accesibilidad", "Mejoras"],
    },
];

const process = [
    {
        number: "01",
        title: "Descubrimos",
        description: "Entendemos tus objetivos, usuarios y necesidades.",
    },
    {
        number: "02",
        title: "Diseñamos",
        description: "Definimos la estructura y la experiencia visual.",
    },
    {
        number: "03",
        title: "Desarrollamos",
        description: "Convertimos el diseño en una solución funcional.",
    },
    {
        number: "04",
        title: "Perfeccionamos",
        description: "Revisamos los detalles y preparamos la entrega.",
    },
];

export default function Services() {
    return (
        <main className="services-page">
            {/* Encabezado de la página */}
            <section className="inner-hero services-hero">
                <div className="inner-hero-content">
                    <span className="section-label">
                        LO QUE PODEMOS CREAR JUNTOS
                    </span>

                    <h1>
                        Soluciones digitales
                        <span className="gradient-text">
                            {" "}con propósito.
                        </span>
                    </h1>

                    <p>
                        Combinamos diseño, tecnología y estrategia para transformar
                        tus ideas en experiencias digitales útiles y memorables.
                    </p>

                    <div className="hero-actions">
                        <Link to="/contacto" className="button-primary">
                            Cuéntanos tu idea <span>→</span>
                        </Link>

                        <a href="#servicios-lista" className="button-secondary">
                            Explorar servicios
                        </a>
                    </div>
                </div>

                <div className="services-hero-card">
                    <span className="services-orbit">✳</span>
                    <span className="section-label">NOVA / STUDIO</span>
                    <h2>Diseño que conecta. Tecnología que impulsa.</h2>
                    <div className="hero-card-line" />
                    <div className="hero-card-bottom">
                        <span>Creatividad</span>
                        <span>+ Tecnología</span>
                        <span>+ Estrategia</span>
                    </div>
                </div>
            </section>

            {/* Catálogo de servicios */}
            <section className="services-catalog" id="servicios-lista">
                <div className="section-heading">
                    <div>
                        <span className="section-label">NUESTROS SERVICIOS</span>
                        <h2>Todo comienza con una buena idea.</h2>
                    </div>
                    <p className="catalog-intro">
                        Soluciones pensadas para construir, mejorar y hacer crecer
                        tu presencia digital.
                    </p>
                </div>

                <div className="professional-services-grid">
                    {services.map((service) => (
                        <article className="professional-service-card" key={service.number}>
                            <div className="professional-service-top">
                                <span className="professional-service-icon">
                                    {service.icon}
                                </span>
                                <span className="service-number">{service.number}</span>
                            </div>

                            <h3>{service.title}</h3>
                            <p>{service.description}</p>

                            <div className="service-tags">
                                {service.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>

                            <Link
                                to="/contacto"
                                className="professional-service-link"
                                aria-label={`Solicitar información sobre ${service.title}`}
                            >
                                Hablemos de este servicio <span>↗</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* Diferenciales */}
            <section className="services-benefits">
                <div className="benefits-copy">
                    <span className="section-label">NUESTRA FORMA DE TRABAJAR</span>
                    <h2>No se trata solo de verse bien. Se trata de funcionar mejor.</h2>
                    <p>
                        Cada decisión de diseño y desarrollo tiene un propósito:
                        hacer que la experiencia sea más sencilla, clara y útil.
                    </p>
                </div>

                <div className="benefits-list">
                    <div className="benefit-item">
                        <span>✓</span>
                        <div>
                            <h3>Diseño centrado en el usuario</h3>
                            <p>Interfaces claras, accesibles y fáciles de utilizar.</p>
                        </div>
                    </div>

                    <div className="benefit-item">
                        <span>✓</span>
                        <div>
                            <h3>Adaptabilidad total</h3>
                            <p>Experiencias para móviles, tabletas y computadores.</p>
                        </div>
                    </div>

                    <div className="benefit-item">
                        <span>✓</span>
                        <div>
                            <h3>Código organizado</h3>
                            <p>Componentes reutilizables y una estructura mantenible.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso de trabajo */}
            <section className="work-process">
                <div className="section-heading">
                    <div>
                        <span className="section-label">NUESTRO PROCESO</span>
                        <h2>De la idea al resultado.</h2>
                    </div>
                    <p className="catalog-intro">
                        Un proceso organizado para avanzar con claridad en cada etapa.
                    </p>
                </div>

                <div className="process-grid">
                    {process.map((step) => (
                        <article className="process-step" key={step.number}>
                            <span className="process-number">{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Llamada a la acción */}
            <section className="services-cta">
                <div>
                    <span className="section-label">EL SIGUIENTE PASO</span>
                    <h2>Tu proyecto merece hacerse realidad.</h2>
                    <p>Cuéntanos qué tienes en mente y exploremos las posibilidades.</p>
                </div>

                <Link to="/contacto" className="button-light">
                    Hablemos de tu proyecto ↗
                </Link>
            </section>
        </main>
    );
}


