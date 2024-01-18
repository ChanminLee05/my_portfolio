import React, {useEffect} from 'react'

export default function Snow() {

    useEffect(() => {
        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snow';
            snowflake.style.left = `${getRandomNumber(5, window.innerWidth)}px`;
            snowflake.style.top = `${getRandomNumber(0, window.innerHeight)}px`;
            snowflake.style.animationDuration = `${getRandomNumber(5, 15)}s`;
            document.body.appendChild(snowflake);
        };

        const createSnowfall = (numberOfSnowflakes) => {
            for (let i = 0; i < numberOfSnowflakes; i++) {
                createSnowflake();
            }
        };

    createSnowfall(50);

        return () => {
            document.querySelectorAll('.snow').forEach(snowflake => snowflake.remove())
        };
    }, []);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div>
        <div className="snow"></div>
        </div>
    )
}