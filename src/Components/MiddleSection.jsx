import React, {useEffect} from 'react';
import Jeep from "./Jeep";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Snow from "./Snow";

export default function Middle() {

    useEffect(() => {
        const aboutMeSection = document.getElementById("about-me");

        window.addEventListener('scroll', function () {
            const value = window.scrollY;
            if (value > 500 && value < 1900) {
                aboutMeSection.classList.add('beach-background');
            } else {
                aboutMeSection.classList.remove('beach-background');
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);

    return (
        <div>
            <section id="mid-section">
                <Snow/>
                <Jeep/>
                <Introduction/>
            </section>
            <section id="about-me" className="beach-background">
                <AboutMe/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
        </div>
    )
}
