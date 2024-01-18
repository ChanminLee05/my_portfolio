import React, { useState } from "react";
import jeep from './assets/jeep.png'
import hello from './assets/hello.png'
import greet from './assets/click.png'

export default function Jeep() {
    const [isFirstHalfDone, setFirstHalfDone] = useState(false);
    const handleFirstHalfAnimationEnd = () => {
        setFirstHalfDone(true);
        document.querySelector('.jeep').style.animationPlayState = 'paused';
    };

    const handleHelloImageClick = () => {
        // Remove hello image and trigger second-half animation
        setFirstHalfDone(true);
        document.querySelector('.jeep').style.animationPlayState = 'running';
    };

    const handleSecondHalfAnimationEnd = () => {
        // Trigger first-half animation again
        setFirstHalfDone(false);
        document.querySelector('.jeep').style.animationPlayState = 'running';
    };

    return (
        <div>
            <div className="jeep-container">
                <img
                    className={`jeep ${isFirstHalfDone ? 'second-half' : ''}`}
                    src={jeep}
                    alt="jeep car"
                    onAnimationEnd={isFirstHalfDone ? handleSecondHalfAnimationEnd : handleFirstHalfAnimationEnd}
                />
                <div id="hello-message">
                    {isFirstHalfDone && (
                        <img
                            className="hello"
                            src={hello}
                            alt="hello"
                            onClick={handleHelloImageClick}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
