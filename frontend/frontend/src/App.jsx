import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [libros, setLibros] = useState([])
  useEffect( () => {
    fetch('http://localhost:5000/traer')
    .then(response => response.json())
    .then(data => setLibros(data))
    .catch(error => console.log('Eror al traer los libros', error))
  }, [])


  return (
    <>
    <div>
      <h1>Libros</h1>
      <ul>
        {libros.map(libro => (
          <li>
            {libro.id} - {libro.titulo} - {libro.autor} - {libro.descripcion} 
          </li>
        ))}
      </ul>
    </div>

    </>
  )
}

export default App
