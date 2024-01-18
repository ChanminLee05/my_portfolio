import React from 'react';
import SnowJeep from "./Snow-Jeep";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";


export default function Middle() {
    return (
        <div>
            <section id="mid-section">
                <SnowJeep/>
                <Introduction/>
            </section>
            <section id="about-me">
                <AboutMe/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
        </div>
    )
}
