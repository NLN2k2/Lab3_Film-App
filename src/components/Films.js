/*import React from 'react'
import { FilmsPresentation } from './FilmsPresentation'
export default function Films() {
  return (
    <div className='container'>
        {FilmsInfo.map((film)=>(
           <div className='column'>
           <div className='card'>
           <img src={film.img}/>
             <h3>{film.name}</h3>
             <p className='title'>{film.date}</p>
             <p><button>Detail</button></p>
           </div>
         </div>
        ))}
    </div>
  )
}*/
import { FilmsInfo } from '../shared/ListOfFilms'
import React from 'react'
export default function Films() {

  return (
    <div className='container'>
          {FilmsInfo.map((film)=>(
             <div className='column'>
             <div className='card'>
              <img src="S:\FPT_FER201m\film-app\assets\images\avatar.jpg"/>
             <img src={film.img}/>
               <h3>{film.name}</h3>
               <p className='title'>{film.date}</p>
               <p><button>Detail</button></p>
             </div>
           </div>
          ))}
      </div>
  )
}

