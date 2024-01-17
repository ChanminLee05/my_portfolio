import React from 'react'
import logo from './assets/wing.png'

export default function Top() {
    return (
        <nav id="top-section">
            <div className="logo-title">
                <img className="logo" src={logo} alt='logo'/>
                <div className="title">AL.dev</div>
            </div>
            <div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contatct">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}


