import React, { useState, useEffect } from 'react';
import linkedin from "./assets/linkedin.png";
import github from "./assets/githubonly.png";
import mail from "./assets/mail.png";

export default function Introduction() {
    const [textShadow, setTextShadow] = useState('');

    useEffect(() => {
        let shadow = '';
        for (let i = 0; i < 15; i++) {
            shadow += (shadow ? ',' : '') + i + 'px ' + i + 'px 0 #c2c1c1';
        }
        setTextShadow(shadow);
    }, []);

    const letters = ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', '\u00A0', 'J', 'a', 'v', 'a', '\u00A0', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    const nameList = ['A', 'n', 'd', 'r', 'e', 'w', '\u00A0', 'L', 'e', 'e'];

    return (
        <div id="introduction-container">
            <div className="introduction" style={{ textShadow: textShadow }}>
                <div className="animate-letters">
                    {letters.map((letter, index) => (
                        <div key={index} className="letter" style={{ animationDelay: index * 0.1 + 's'}}>
                            {letter}
                        </div>
                    ))}
                </div>
                <div className="animate-letters">
                    {nameList.map((name, index) => (
                        <div key={index} className="name" style={{ animationDelay: index * 0.23 + 's'}}>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="diff-backcolor"></div>
                <div className="introduction" style={{ textShadow: textShadow }}>
                    <div className="animate-letters">
                        {letters.map((letter, index) => (
                            <div key={index} className="letter" style={{ animationDelay: index * 0.1 + 's'}}>
                                {letter}
                            </div>
                        ))}
                    </div>
                    <div className="animate-letters">
                        {nameList.map((name, index) => (
                            <div key={index} className="name" style={{ animationDelay: index * 0.23 + 's'}}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            <div className="links">
                <a href="https://www.linkedin.com/in/andrew-lee-243b0b125" target="_blank" rel="noreferrer"><img className="link" src={linkedin} alt="linkedin"/></a>
                <a href="https://github.com/ChanminLee05/my_portfolio.git" target="_blank" rel="noreferrer"><img className="link" src={github} alt="github"/></a>
                <a href="mailto:lee.chanmin1@gmail.com"><img className="link" src={mail} alt="gmail"/></a>
            </div>
        </div>
    )
}