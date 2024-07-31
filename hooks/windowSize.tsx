"use client";

import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getScreenSize = () => {
    if(windowSize.width <= 800) return "xs";
    if(windowSize.width > 800 && windowSize.width <= 1200) return "sm"
    if(windowSize.width > 1200) return "sm"
  }

  return getScreenSize();
}

