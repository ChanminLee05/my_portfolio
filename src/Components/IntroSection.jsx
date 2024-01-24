import React, {useEffect} from 'react';
import Jeep from "./Jeep";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Snow from "./Snow";
import Introduction from "./Introduction";

export default function Middle() {

    return (
        <div>
            {/*<Snow/>*/}
            <Introduction/>
            {/*<Jeep/>*/}
            <AboutMe/>
            <section id="skills">
                <Skills/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
        </div>
    )
}
