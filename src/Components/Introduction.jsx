import React from "react";
import linkedin from './assets/linkedin.png'
import github from './assets/githubonly.png'
import mail from './assets/mail.png'
import portrait from './assets/example-portrait.jpg'
export default function Introduction() {
    return (
        <div className="greeting-container">
            <div className="greeting">
                <p className="greeting1">Hello, I'm</p>
                <p className="greeting2">Andrew Lee</p>
                <p className="greeting3">Junior Fullstack Developer</p>
                <div className="link">
                    <a href="#linkedin"><img className="logo" src={linkedin} alt="linkedin"/></a>
                    <a href="#github"><img className="logo" src={github} alt="github"/></a>
                    <a href="#mail"><img className="logo" src={mail} alt="gmail"/></a>
                </div>
            </div>
            <aside className="portrait">
                <img className="picture" src={portrait} alt="portrait"/>
            </aside>
        </div>
    );
}