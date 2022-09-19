import React from 'react'
export default function FilmsPresentation({films}) {
     console.log(films);
    return (
     <div className='container'>
        {films.map((film)=>(
        <div className='column'>
        <div className='card'>
        <img src={film.img}/>
          <h3>{film.name}</h3>
          <p className='title'>{film.year}</p>
          <p className='nation'>{film.nation}</p>
          <p><button>Pre-order Now</button></p>
        </div>
      </div>
     ))}</div>   
  )
}
