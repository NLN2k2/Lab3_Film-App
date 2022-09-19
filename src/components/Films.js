import { FilmsInfo } from '../shared/ListOfFilms'
import React from 'react'
export default function Films() {

  return (
    <div className='container'>
          {FilmsInfo.map((film)=>(
             <div className='column'>
             <div className='card'>
             <img src={film.img}/>
               <h3>{film.name}</h3>
               <p className='title'>{film.year}</p>
               <p className='nation'>{film.nation}</p>
               <p><button>Detail</button></p>
             </div>
           </div>
          ))}
      </div>
  )
}

