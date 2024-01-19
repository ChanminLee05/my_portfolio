import React from 'react'
import project1 from './assets/OnlineShop.JPG'
import project2 from './assets/Solitaire Game.JPG'
import project3 from './assets/Random-Roulette.JPG'
export default function Project() {
    return (
        <div className="project-container">
            <div className="title">
                <h1>Projects</h1>
            </div>
            <div className="projects">
                <div className="project">
                    <h2> Online Shopping Mall</h2>
                    <a href="#project1"><img src={project1} alt="OnlineShop"/></a>
                </div>
                <div className="project">
                    <h2>Solitaire Game</h2>
                    <a href="#project2"><img src={project2} alt="Solitaire"/></a>
                </div>
                <div className="project">
                    <h2>Random Roulette</h2>
                    <a href="#project3"><img src={project3} alt="Roulette"/></a>
                </div>
            </div>
        </div>
    )
}