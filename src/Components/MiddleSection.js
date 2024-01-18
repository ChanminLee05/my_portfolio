import React from 'react';
import Jeep from "./Jeep";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Snow from "./Snow";


export default function Middle() {
    return (
        <div>
            <section id="mid-section">
                <Snow/>
                <Jeep/>
                <Introduction/>
            </section>
            <section id="about-me">
                <AboutMe/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}
