import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='sticky-header-1'>
        <header className="header">
        <div className="logo">LOGO</div>
        <nav className="navigation">
          <a href="/solutions">Home</a>
          <a href="/developers">About Us</a>
          <a href="/customers">Services</a>
          <a href="/blog">Contact Is</a>
        </nav>
        <div className="auth-buttons">
        <button class="login-btn"> Login
</button>
          <button className="schedule-meeting">SCHEDULE A MEETING</button>
        </div>
      </header>
    </div>
  )
}

export default Header