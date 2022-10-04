import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContents'
import { Link } from 'react-router-dom'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav>
          <ul className='active_link' >
              <li style={{ backgroundColor: theme.backgroundColor }}><Link className='active1' to='/' style={{ color: theme.color }}>Home</Link></li>
              <li style={{ backgroundColor: theme.backgroundColor }}><a className='active2' href='#news'style={{ color: theme.color }}>News</a></li>
              <li style={{ backgroundColor: theme.backgroundColor }}><a className='active3' href='#about'style={{ color: theme.color }}>About</a></li>
              <li style={{ backgroundColor: theme.backgroundColor }}><Link className='active4' to='/contact'style={{ color: theme.color }}>Contact</Link></li>    
          <div style={{position: 'relative'}}>
          <li style={{ backgroundColor: theme.backgroundColor }}><a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none',
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </li>
         </div>
        </ul> 
      </nav>
    </div>
  )
}
