import React from 'react'
import { ImSpoonKnife } from 'react-icons/im';

function Header() {
  
  return (
    <header className='header' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
    <div className='layer'>
    <div className="container">
      <nav className='logo-wrapper'>
        <div className='logo'>
          <ImSpoonKnife className='brand' />
        </div>
      </nav>
      <div className='header-text' >
        <h1>YUM'S WORLD</h1>
        <p>Savoring every bite....</p>
      </div>

    </div>
    </div>
  </header>
  )
}

export default Header