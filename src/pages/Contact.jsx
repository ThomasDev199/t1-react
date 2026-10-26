
import { useState } from "react";

const initialForm = {
    nombre: "",
    email: "",
    servicio: "",
    presupuesto: "",
    mensaje: "",
};

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [estado, setEstado] = useState("");

    const actualizarCampo = (event) => {
        const { name, value } = event.target;

        setForm((anterior) => ({
            ...anterior,
            [name]: value,
        }));

        setEstado("");
    };

    const enviarFormulario = (event) => {
        event.preventDefault();

        // Por ahora solo validamos los datos en el frontend.
        // Aquí conectaremos la API para enviar el mensaje.
        setEstado(
            "Tus datos son válidos. El formulario todavía necesita conectarse a un servicio para enviar tu mensaje."
        );
    };

    return (
        <main className="contact-page">
            {/* Presentación */}
            <section className="contact-intro">
                <span className="section-label">ESTAMOS PARA ESCUCHARTE</span>

                <h1>
                    Hablemos de tu
                    <span className="gradient-text"> próxima gran idea.</span>
                </h1>

                <p>
                    Cuéntanos qué quieres crear, mejorar o transformar.
                    Nos encantará conocer tu proyecto.
                </p>
            </section>

            {/* Formulario y datos de contacto */}
            <section className="contact-layout">
                <div className="contact-form-panel">
                    <div className="contact-form-heading">
                        <span className="form-step-label">CUÉNTANOS TU IDEA</span>
                        <h2>Iniciemos una conversación.</h2>
                        <p>
                            Completa los siguientes campos para definir lo que necesitas.
                        </p>
                    </div>

                    <form className="contact-form" onSubmit={enviarFormulario}>
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="nombre">Nombre completo *</label>
                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    placeholder="¿Cómo te llamas?"
                                    value={form.nombre}
                                    onChange={actualizarCampo}
                                    autoComplete="name"
                                    required
                                    minLength={2}
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="email">Correo electrónico *</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="tu@correo.com"
                                    value={form.email}
                                    onChange={actualizarCampo}
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="servicio">¿Qué necesitas? *</label>
                                <select
                                    id="servicio"
                                    name="servicio"
                                    value={form.servicio}
                                    onChange={actualizarCampo}
                                    required
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="ui-ux">Diseño UI/UX</option>
                                    <option value="web">Desarrollo web</option>
                                    <option value="app">Aplicación web</option>
                                    <option value="mantenimiento">Mantenimiento web</option>
                                    <option value="otro">Otro proyecto</option>
                                </select>
                            </div>

                            <div className="form-field">
                                <label htmlFor="presupuesto">Presupuesto estimado</label>
                                <select
                                    id="presupuesto"
                                    name="presupuesto"
                                    value={form.presupuesto}
                                    onChange={actualizarCampo}
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="por-definir">Por definir</option>
                                    <option value="menos-1m">Menos de $1.000.000 COP</option>
                                    <option value="1m-3m">$1.000.000 – $3.000.000 COP</option>
                                    <option value="mas-3m">Más de $3.000.000 COP</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="mensaje">Cuéntanos sobre tu proyecto *</label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                placeholder="¿Qué quieres crear? ¿Qué problema buscas resolver?"
                                rows={5}
                                value={form.mensaje}
                                onChange={actualizarCampo}
                                required
                                minLength={10}
                            />
                            <span className="field-hint">
                                Cuantos más detalles compartas, mejor podremos entender tu idea.
                            </span>
                        </div>

                        <button type="submit" className="contact-submit">
                            Validar formulario <span>→</span>
                        </button>

                        {estado && (
                            <p className="form-feedback" role="status">
                                {estado}
                            </p>
                        )}

                        <p className="form-privacy">
                            * Campos obligatorios. Tus datos deben manejarse conforme a
                            la política de privacidad del proyecto.
                        </p>
                    </form>
                </div>

                {/* Información complementaria */}
                <aside className="contact-sidebar">
                    <div className="contact-sidebar-top">
                        <span className="section-label">CONTACTO DIRECTO</span>
                        <h2>Las buenas ideas comienzan con una conversación.</h2>
                        <p>
                            ¿Tienes preguntas o quieres explorar una propuesta?
                            Estos son algunos canales para ponernos en contacto.
                        </p>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-detail-icon">@</span>
                        <div>
                            <span>Correo electrónico</span>
                            <a href="mailto:hola@nova.example">
                                hola@nova.example
                            </a>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-detail-icon">⌘</span>
                        <div>
                            <span>Portafolio y código</span>
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Explorar GitHub ↗
                            </a>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-detail-icon">↗</span>
                        <div>
                            <span>Red profesional</span>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Conectar en LinkedIn ↗
                            </a>
                        </div>
                    </div>

                    <div className="contact-note">
                        <span>✦</span>
                        <div>
                            <h3>¿Todavía no tienes todo definido?</h3>
                            <p>
                                No hay problema. Podemos comenzar por entender tu idea
                                y definir juntos el alcance del proyecto.
                            </p>
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    );
}

