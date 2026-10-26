import React from 'react'
import { useState, useEffect } from 'react';
import "../App.css"

export default function RickMorty() {
  // Guardar los personajes que llegan de la API
  const [personajes, setPersonajes] = useState([]);

  // Saber si los datos están cargando
  const [cargando, setCargando] = useState(true);

  // Guardar posibles errores
  const [error, setError] = useState("");

  useEffect(() => {
    // Consultar la API
    fetch("https://rickandmortyapi.com/api/character")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los personajes");
        }

        return respuesta.json();
      })
      .then((datos) => {
        setPersonajes(datos.results);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <h2 className="mensaje">Cargando personajes...</h2>;
  }

  if (error) {
    return <h2 className="mensaje">Error: {error}</h2>;
  }

  return (
    <main className="contenedor">
      <h1>Rick and Morty</h1>
      <p className="subtitulo">Explora el multiverso</p>

      <section className="grid-personajes">
        {personajes.map((personaje) => (
          <article className="tarjeta" key={personaje.id}>
            <img
              src={personaje.image}
              alt={personaje.name}
            />

            <div className="info">
              <h2>{personaje.name}</h2>

              <p>
                <strong>Estado:</strong> {personaje.status}
              </p>

              <p>
                <strong>Especie:</strong> {personaje.species}
              </p>

              <p>
                <strong>Origen:</strong> {personaje.origin.name}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
