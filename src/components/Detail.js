import React from 'react'
import { useParams } from 'react-router-dom'
import { FilmsInfo } from '../shared/ListOfFilms';
import { useContext } from 'react';
import { ThemeContext } from "./ThemeContents";

export default function Detail() {
    const userName = useParams();
    const { theme } = useContext(ThemeContext)
    const film = FilmsInfo.find(obj => {
      return obj.id == userName.id;
    });
     let cost = film.cost.toLocaleString();
     
     return(
      <div className='container1' style={{ backgroundColor: theme.backgroundColor }}>
        <div className='badge' style={{ color: theme.color }}>{film.name}</div>
       <div className='product-card'>
          <div className='product-tumb'>
              <img src={`../${film.img}`} alt=''/>
          </div>
          <div className='product-details'>
              <h4 style={{ color: theme.color }}>{film.nation}</h4>
                <div className='product-price' style={{ color: theme.color }}>Market value: € {cost}</div>
                <p style={{ color: theme.color }}>{film.info}</p>
                <div className='product-bottom-details'></div>
          </div>
      </div>
  </div>
     )
  
}
