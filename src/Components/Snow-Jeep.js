import React from "react";
import jeep from './assets/jeep.png'
import hello from './assets/hello.png'
export default function SnowJeep() {
    return (
        <div>
            <div className="snow"></div>
            <div className="jeep-container">
                <img className="jeep" src={jeep} alt="jeep car"/>
                    <div id="hello-message" onClick={toggleAnimation}>
                        <img className="hello" src={hello} alt="hello"/>
                    </div>
            </div>
        </div>
    );
}

function toggleAnimation() {
    const jeep = document.querySelector('.jeep');
    const helloMessage = document.getElementById('hello-message');

    jeep.style.animationName = 'first-half';

    if (jeep.style.animationName === 'first-half') {

        jeep.style.animationName = 'second-half';
    } else if (jeep.style.animationName === 'second-half') {
        // If second-half is done, switch back to first-half
        helloMessage.style.opacity = '1';
        // Hide hello image when click
        helloMessage.addEventListener('click', function () {
            helloMessage.style.opacity = '0';
        });
        jeep.style.animationName = 'first-half';
    }

}

// Snowfall-effect

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snow';
    snowflake.style.left = `${getRandomNumber(5, window.innerWidth)}px`;
    snowflake.style.top = `${getRandomNumber(0, window.innerHeight)}px`;
    snowflake.style.animationDuration = `${getRandomNumber(5, 15)}s`;
    document.body.appendChild(snowflake);
}

function createSnowfall(numberOfSnowflakes) {
    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
}

createSnowfall(50);