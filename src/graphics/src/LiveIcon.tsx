// import { useState, useEffect } from 'react';

const LiveIcon = ({
    text = 'LIVE',
    /* letterDuration = 500,
    fullDisplayDuration = 2000,
    letterSpacing = 0.1, */
}) => {
    // const [visIndex, setVisIndex] = useState(0);
    // useEffect(() => {}, [text, letterDuration, fullDisplayDuration]);

    return (
        <div className='flex'>
            <div className='relative'>
                {text.split('').map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>
        </div>
    );
};

export default LiveIcon;
