import React, { useState } from "react";
import jeep from './assets/jeep.png'

export default function Jeep() {
    const [isFirstHalfDone, setFirstHalfDone] = useState(false);
    const [Message, setMessage] = useState("Hello")
    const handleFirstHalfAnimationEnd = () => {
        setFirstHalfDone(true);
        document.querySelector('.jeep').style.animationPlayState = 'paused';
    };

    const handleHelloImageClick = () => {
        // Remove hello image and trigger second-half animation
        setFirstHalfDone(true);
        setMessage("Have a good day!");
        document.querySelector('.jeep').style.animationPlayState = 'running';
    };

    const handleSecondHalfAnimationEnd = () => {
        // Trigger first-half animation again
        setFirstHalfDone(false);
        setMessage("Hello");
        document.querySelector('.jeep').style.animationPlayState = 'running';
    };

    return (
        <div className="jeep-container">
            <img
                className={`jeep ${isFirstHalfDone ? 'second-half' : ''}`}
                src={jeep}
                alt="jeep car"
                onAnimationEnd={isFirstHalfDone ? handleSecondHalfAnimationEnd : handleFirstHalfAnimationEnd}
            />
            <div id="hello-message">
                {isFirstHalfDone && (
                    <div className="message" onClick={handleHelloImageClick}>
                        {Message}
                    </div>
                )}
            </div>
        </div>
    );
}
