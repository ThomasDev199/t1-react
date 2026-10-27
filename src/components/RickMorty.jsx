
import { useState, useEffect } from "react";
import "./Rick.css";

const API_URL = "https://rickandmortyapi.com/api/character";

export default function RickMorty() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [estado, setEstado] = useState("");
  const [especie, setEspecie] = useState("");
  const [genero, setGenero] = useState("");
  const [orden, setOrden] = useState("az");
  const [favoritos, setFavoritos] = useState([]);
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [totalPersonajes, setTotalPersonajes] = useState(0);

  // Consultar la API cuando cambia la búsqueda o la página
  useEffect(() => {
    const controlador = new AbortController();

    async function cargarPersonajes() {
      setCargando(true);
      setError("");

      try {
        const parametros = new URLSearchParams({
          page: pagina,
        });

        if (busqueda.trim()) {
          parametros.set("name", busqueda.trim());
        }

        const respuesta = await fetch(
          `${API_URL}?${parametros.toString()}`,
          { signal: controlador.signal }
        );

        if (!respuesta.ok) {
          if (respuesta.status === 404) {
            throw new Error("No se encontraron personajes.");
          }

          throw new Error("No se pudieron cargar los personajes.");
        }

        const datos = await respuesta.json();

        setPersonajes(datos.results);
        setTotalPaginas(datos.info.pages);
        setTotalPersonajes(datos.info.count);
      } catch (err) {
        if (err.name === "AbortError") return;

        setPersonajes([]);
        setTotalPaginas(1);
        setTotalPersonajes(0);
        setError(err.message || "Ocurrió un error inesperado.");
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarPersonajes();

    return () => controlador.abort();
  }, [pagina, busqueda]);

  // Cambiar la página y limpiar filtros cuando sea necesario
  function cambiarBusqueda(valor) {
    setBusqueda(valor);
    setPagina(1);
  }

  function limpiarFiltros() {
    setBusqueda("");
    setEstado("");
    setEspecie("");
    setGenero("");
    setOrden("az");
    setSoloFavoritos(false);
    setPagina(1);
  }

  // Agregar o quitar favoritos
  function alternarFavorito(id) {
    setFavoritos((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((favorito) => favorito !== id)
        : [...anteriores, id]
    );
  }

  // Filtrar y ordenar los personajes de la página actual
  const personajesFiltrados = personajes
    .filter((personaje) => {
      const coincideEstado =
        !estado || personaje.status === estado;

      const coincideEspecie =
        !especie || personaje.species === especie;

      const coincideGenero =
        !genero || personaje.gender === genero;

      const coincideFavorito =
        !soloFavoritos || favoritos.includes(personaje.id);

      return (
        coincideEstado &&
        coincideEspecie &&
        coincideGenero &&
        coincideFavorito
      );
    })
    .sort((a, b) => {
      if (orden === "az") {
        return a.name.localeCompare(b.name);
      }

      if (orden === "za") {
        return b.name.localeCompare(a.name);
      }

      return a.id - b.id;
    });

  return (
    <main className="rick-app">
      {/* ENCABEZADO */}
      <header className="hero">
        <div className="hero-content">
          <span className="eyebrow">EXPLORA EL MULTIVERSO</span>

          <h1>
            Rick <span>&</span> Morty
          </h1>

          <p>
            Descubre personajes, explora dimensiones
            y encuentra a tus favoritos.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <strong>{totalPersonajes}</strong>
              <span>Personajes encontrados por la API</span>
            </div>

            <div className="stat">
              <strong>{favoritos.length}</strong>
              <span>Favoritos guardados en esta sesión</span>
            </div>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <span>R</span>
        </div>
      </header>

      {/* BUSCADOR */}
      <section className="panel filtros-panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CENTRO DE EXPLORACIÓN</span>
            <h2>Encuentra tu personaje</h2>
          </div>

          <button
            className="btn-limpiar"
            onClick={limpiarFiltros}
            type="button"
          >
            Limpiar filtros
          </button>
        </div>

        <div className="buscador">
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>

          <input
            type="search"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => cambiarBusqueda(e.target.value)}
            aria-label="Buscar personajes por nombre"
          />

          {busqueda && (
            <button
              type="button"
              className="limpiar-busqueda"
              onClick={() => cambiarBusqueda("")}
              aria-label="Borrar búsqueda"
            >
              ×
            </button>
          )}
        </div>

        <div className="filtros-grid">
          <label className="campo">
            <span>Estado</span>
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="">Todos los estados</option>
              <option value="Alive">Vivo</option>
              <option value="Dead">Muerto</option>
              <option value="unknown">Desconocido</option>
            </select>
          </label>

          <label className="campo">
            <span>Especie</span>
            <select
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
            >
              <option value="">Todas las especies</option>
              {[
                "Human",
                "Alien",
                "Humanoid",
                "Animal",
                "Robot",
                "Mythological Creature",
                "Poopybutthole",
                "Cronenberg",
                "Disease",
                "Unknown",
              ].map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="campo">
            <span>Género</span>
            <select
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="">Todos los géneros</option>
              <option value="Female">Femenino</option>
              <option value="Male">Masculino</option>
              <option value="Genderless">Sin género</option>
              <option value="unknown">Desconocido</option>
            </select>
          </label>

          <label className="campo">
            <span>Ordenar por</span>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="az">Nombre: A - Z</option>
              <option value="za">Nombre: Z - A</option>
              <option value="id">Orden original por ID</option>
            </select>
          </label>
        </div>

        <button
          type="button"
          className={`btn-favoritos ${
            soloFavoritos ? "activo" : ""
          }`}
          onClick={() => setSoloFavoritos(!soloFavoritos)}
          aria-pressed={soloFavoritos}
        >
          ♥ {soloFavoritos ? "Ver todos" : "Mostrar favoritos"}
          <span>{favoritos.length}</span>
        </button>
      </section>

      {/* LISTADO */}
      <section className="resultados">
        <div className="resultados-heading">
          <div>
            <h2>
              {soloFavoritos ? "Mis favoritos" : "Personajes"}
            </h2>
            <p>
              {cargando
                ? "Buscando en el multiverso..."
                : `${personajesFiltrados.length} personajes en esta página`}
            </p>
          </div>

          <span className="pagina-badge">
            Página {pagina} de {totalPaginas}
          </span>
        </div>

        {cargando && (
          <div className="estado-mensaje">
            <div className="spinner" />
            <h3>Cargando personajes...</h3>
            <p>Estamos viajando entre dimensiones.</p>
          </div>
        )}

        {!cargando && error && (
          <div className="estado-mensaje error">
            <span className="estado-icono">!</span>
            <h3>¡Algo salió mal!</h3>
            <p>{error}</p>
            <button
              type="button"
              className="btn-principal"
              onClick={() => setPagina((actual) => actual)}
            >
              Intentar nuevamente
            </button>
          </div>
        )}

        {!cargando && !error && personajesFiltrados.length === 0 && (
          <div className="estado-mensaje">
            <span className="estado-icono">?</span>
            <h3>No encontramos personajes</h3>
            <p>
              Prueba con otro nombre o cambia los filtros.
            </p>
            <button
              className="btn-principal"
              type="button"
              onClick={limpiarFiltros}
            >
              Ver todos los personajes
            </button>
          </div>
        )}

        {!cargando && !error && personajesFiltrados.length > 0 && (
          <div className="grid-personajes">
            {personajesFiltrados.map((personaje) => (
              <article
                className="tarjeta"
                key={personaje.id}
              >
                <div className="imagen-container">
                  <img
                    src={personaje.image}
                    alt={personaje.name}
                    loading="lazy"
                  />

                  <span
                    className={`estado-personaje ${
                      personaje.status === "Alive"
                        ? "vivo"
                        : personaje.status === "Dead"
                        ? "muerto"
                        : "desconocido"
                    }`}
                  >
                    <span className="estado-punto" />
                    {personaje.status === "Alive"
                      ? "Vivo"
                      : personaje.status === "Dead"
                      ? "Muerto"
                      : "Desconocido"}
                  </span>

                  <button
                    className={`btn-corazon ${
                      favoritos.includes(personaje.id)
                        ? "favorito"
                        : ""
                    }`}
                    type="button"
                    onClick={() => alternarFavorito(personaje.id)}
                    aria-label={
                      favoritos.includes(personaje.id)
                        ? `Quitar a ${personaje.name} de favoritos`
                        : `Agregar a ${personaje.name} a favoritos`
                    }
                    aria-pressed={favoritos.includes(personaje.id)}
                  >
                    {favoritos.includes(personaje.id) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="info">
                  <span className="personaje-id">
                    EXPEDIENTE #{String(personaje.id).padStart(3, "0")}
                  </span>

                  <h3>{personaje.name}</h3>

                  <div className="dato">
                    <span>Especie</span>
                    <strong>{personaje.species}</strong>
                  </div>

                  <div className="dato">
                    <span>Género</span>
                    <strong>{personaje.gender}</strong>
                  </div>

                  <div className="dato origen">
                    <span>Origen</span>
                    <strong title={personaje.origin.name}>
                      {personaje.origin.name}
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="btn-detalles"
                    onClick={() => setSeleccionado(personaje)}
                  >
                    Ver detalles <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* PAGINACIÓN */}
        {!cargando && !error && totalPaginas > 1 && (
          <nav className="paginacion" aria-label="Paginación">
            <button
              type="button"
              onClick={() => setPagina((p) => p - 1)}
              disabled={pagina === 1}
            >
              ← Anterior
            </button>

            <span>
              Página <strong>{pagina}</strong> de {totalPaginas}
            </span>

            <button
              type="button"
              onClick={() => setPagina((p) => p + 1)}
              disabled={pagina === totalPaginas}
            >
              Siguiente →
            </button>
          </nav>
        )}
      </section>

      <footer className="footer">
        <p>
          RICK & MORTY EXPLORER
          <span> · </span>
          Datos proporcionados por Rick and Morty API
        </p>
      </footer>

      {/* MODAL DE DETALLES */}
      {seleccionado && (
        <div
          className="modal-fondo"
          onClick={() => setSeleccionado(null)}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-cerrar"
              type="button"
              onClick={() => setSeleccionado(null)}
              aria-label="Cerrar detalles"
            >
              ×
            </button>

            <img
              className="modal-imagen"
              src={seleccionado.image}
              alt={seleccionado.name}
            />

            <div className="modal-contenido">
              <span className="eyebrow">
                EXPEDIENTE #{seleccionado.id}
              </span>

              <h2 id="modal-titulo">{seleccionado.name}</h2>

              <p className="modal-descripcion">
                Información del personaje en el multiverso.
              </p>

              <div className="modal-datos">
                <div>
                  <span>Estado</span>
                  <strong>{seleccionado.status}</strong>
                </div>
                <div>
                  <span>Especie</span>
                  <strong>{seleccionado.species}</strong>
                </div>
                <div>
                  <span>Género</span>
                  <strong>{seleccionado.gender}</strong>
                </div>
                <div>
                  <span>Origen</span>
                  <strong>{seleccionado.origin.name}</strong>
                </div>
                <div>
                  <span>Última ubicación</span>
                  <strong>{seleccionado.location.name}</strong>
                </div>
                <div>
                  <span>Episodios</span>
                  <strong>{seleccionado.episode.length}</strong>
                </div>
              </div>

              <button
                type="button"
                className="btn-principal"
                onClick={() => alternarFavorito(seleccionado.id)}
              >
                {favoritos.includes(seleccionado.id)
                  ? "♥ Quitar de favoritos"
                  : "♡ Agregar a favoritos"}
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
