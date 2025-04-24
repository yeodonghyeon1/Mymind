import { useState, useEffect } from 'react';

export default function useZoom() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (e.deltaY < 0) {
        setScale(prev => Math.min(prev + 0.1, 2));
      } else {
        setScale(prev => Math.max(prev - 0.1, 0.5));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
        window.removeEventListener('wheel', handleWheel);

    };
  }, []);

  return { scale };
}