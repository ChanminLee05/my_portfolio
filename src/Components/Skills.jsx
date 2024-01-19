import React from 'react'
import java from "./assets/java.webp";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.webp";
import mysql from "./assets/mysql.png";
import php from "./assets/php.png";
import linux from "./assets/linux.png";
import mongoDB from "./assets/mongoDB.png"
import github from "./assets/github.png"
import jira from "./assets/jira.JPG"
import bootstrap from "./assets/bootstrap.JPG"
import docker from "./assets/docker.png"
import react from "./assets/react.png"
import rest from "./assets/rest-api.png"
import spring from "./assets/spring-boot.JPG"
import jpa from "./assets/jpa.webp"
import redux from "./assets/redux.png"

export default function Skills() {
    return(
        <div className="skills">
            <h1 className="skill-title">SKILLS</h1>
            <div className="skill-category">
                <div className="languages">
                    <div className="skill-container">
                        <h3>Languages</h3>
                        <hr className="underline"></hr>
                        <img className="skill-logo" src={html} alt="html"/>
                        <img className="skill-logo" src={css} alt="css"/>
                        <img className="skill-logo" src={js} alt="js"/>
                        <img className="skill-logo" src={java} alt="java"/>
                        <img className="skill-logo" src={php} alt="php"/>
                    </div>
                </div>
                <div className="databases">
                    <div className="skill-container">
                        <h3>Database</h3>
                        <hr className="underline"></hr>
                        <img className="skill-logo" src={mysql} alt="mysql"/>
                        <img className="skill-logo" src={mongoDB} alt="mongoDB"/>
                    </div>
                </div>
                <div className="web-development">
                    <div className="skill-container">
                        <h3>Web Development</h3>
                        <hr className="underline"></hr>
                        <img className="skill-logo" src={react} alt="react"/>
                        <img className="skill-logo" src={bootstrap} alt="bootstrap"/>
                        <img className="skill-logo" src={redux} alt="redux"/>
                    </div>
                </div>
                <div className="backend-tech">
                    <div className="skill-container">
                        <h3>Backend Technology</h3>
                        <hr className="underline"></hr>
                        <img className="skill-logo" src={spring} alt="spring"/>
                        <img className="skill-logo-jpa" src={jpa} alt="jpa"/>
                    </div>
                </div>
                <div className="devops">
                    <div className="skill-container">
                        <h3>Devops</h3>
                        <hr className="underline"></hr>
                        <img className="skill-logo" src={linux} alt="linux"/>
                        <img className="skill-logo" src={github} alt="github"/>
                        <img className="skill-logo" src={jira} alt="jira"/>
                        <img className="skill-logo" src={docker} alt="docker"/>
                        <img className="skill-logo" src={rest} alt="rest"/>
                    </div>
                </div>
            </div>
        </div>
    )
}