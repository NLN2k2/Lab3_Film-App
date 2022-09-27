import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContents'

export default function FilmsPresentation({ films }) {
  const { theme } = useContext(ThemeContext)
  const [film, setFilm] = useState([])
  console.log(films);
  return (
    <div className='container'>
      <div className='row' style={{ backgroundColor: theme.backgroundColor }}>
        {films.map((film) => (
          <div className='col-4'>
            <img className='img' src={film.img} />
            <h3 >{film.name}</h3>
            <p >Year: {film.year}</p>
            <p >Nation: {film.nation}</p>
            <button className='buttons_btn-hover_color-1' onClick={() => { setFilm(film) }}>
              <a href='#popup1' id='openPopUp'>Detail</a>
            </button>
          </div>
        ))}
        <div id='popup1' className='overlay'>
          <div className='popup'>
            <img src={film.img} />
            <h2>{film.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {film.info}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


