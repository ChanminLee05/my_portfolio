import React from 'react';
import golf from './assets/golf.jpg'
import java from './assets/java.png'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import mysql from './assets/mysql.png'
import php from './assets/php.png'
import linux from './assets/linux.png'
export default function AboutMe() {
    return (
        <div className="aboutMe">
            <p className="about-title">ABOUT ME</p>
            <div className="about-content">
                <img className="golf" src={golf} alt="golf"/>
                    <div className="intro-container">
                        <p className="introduction">I am a passionate developer based in Alberta.
                            My expertise spans HTML, CSS, JavaScript, Java, MySQL, and PHP. I'm on the lookout for exciting opportunities as a Java or Web Developer.
                            With a focus on enhancing business operations through innovative web development solutions,
                            my goal is to contribute technical skills to drive efficiency, support strategic planning, and ensure long-term success for organizations.</p>
                        <p className="introduction">In addition to my passion for coding, I find joy in staying active and embracing a healthy lifestyle. Golf, in particular, has become a beloved pastime for me.</p>
                    </div>
            </div>
            <div className="skills">
                <div className="skill-container">
                    <h1>SKILLS</h1>
                </div>
                <img className="skill-logo" src={java} alt="java"/>
                <img className="skill-logo" src={html} alt="html"/>
                <img className="skill-logo" src={css} alt="css"/>
                <img className="skill-logo" src={js} alt="js"/>
                <img className="skill-logo" src={mysql} alt="mysql"/>
                <img className="skill-logo" src={php} alt="php"/>
                <img className="skill-logo" src={linux} alt="linux"/>
            </div>
        </div>
    )
}