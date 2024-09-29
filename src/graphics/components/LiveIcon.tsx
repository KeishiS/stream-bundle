import React, { useState, useEffect } from 'react';

const LiveIcon = ({ text = 'LIVE', letterDuration = 1000, fullDisplayDuration = 3000, letterSpacing = 0.1 }) => {
  const [visIdx, setVisIdx] = useState<number>(0);
  const [dir, setDir] = useState<boolean>(true);
  useEffect(() => {
    if (dir && visIdx < text.length) {
      setTimeout(() => {
        setVisIdx(visIdx + 1);
      }, letterDuration);
    } else if (!dir && visIdx > 0) {
      setTimeout(() => {
        setVisIdx(visIdx - 1);
      }, letterDuration);
    } else if (dir && visIdx <= text.length) {
      setTimeout(() => {
        setDir(!dir);
      }, fullDisplayDuration);
    } else if (!dir && visIdx <= 0) {
      setTimeout(() => {
        setDir(!dir);
      }, fullDisplayDuration);
    } else {
      console.log('something wrong');
    }
  }, [visIdx, dir, text, letterDuration, fullDisplayDuration]);

  return (
    <div className="relative text-6xl font-bold" style={{ letterSpacing: `${letterSpacing}em` }}>
      {text.split('').map((letter, idx) => (
        <span
          key={idx}
          className="inline-block transition-all duration-500 ease-in-out"
          style={{
            opacity: idx < visIdx ? 1 : 0,
            transform: idx < visIdx ? 'scale(1)' : 'scale(0.5)',
            color: 'white',
            textShadow: '0 0 10px rgba(255,255,255,0.7)',
          }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LiveIcon;
