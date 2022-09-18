import React, { Component } from "react";
export default class Navigation extends Component {
  
  render() {
    return (
      <div>
        <nav>
          <ul className="active1">
                <li><a className='active1_link' href='#home'>Home</a></li>
                <li><a className='active1_link' href='#news'>News</a></li>
                <li><a className='active1_link' href='#about'>About</a></li>
                <li><a className='active1_link' href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
