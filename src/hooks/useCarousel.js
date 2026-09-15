import { useState, useRef, useEffect, useCallback } from 'react';

export const useCarousel = (items) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoverDirection, setHoverDirection] = useState(null);
  const containerRef = useRef(null);

  const handleStart = (event) => {
    setIsDragging(true);
    setStartX(event.touches ? event.touches[0].clientX : event.clientX);
  };

  const handleMove = (event) => {
    if (!isDragging) return;
    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const diffX = currentX - startX;

    if (diffX > 50) {
      handlePrev();
      setIsDragging(false);
    } else if (diffX < -50) {
      handleNext();
      setIsDragging(false);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handlePrev = useCallback(() => {
    if (items.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }
  }, [items.length]);
  
  const handleNext = useCallback(() => {
    if (items.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
  }, [items.length]);
  

  const handleMouseMove = (event) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = event.clientX;
    const direction = mouseX < containerRect.left + containerRect.width / 2 ? 'left' : 'right';
    setHoverDirection(direction);
  };

  const handleMouseLeave = () => {
    setHoverDirection(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const calculateStyles = (index) => {
    const offset = (index - currentIndex + items.length) % items.length;
    const isCenter = offset === 0;
    const isSide = offset === 1 || offset === items.length - 1;

    let translateX = 0;
    if (offset === 0) {
      translateX = 0;
    } else if (offset === 1) {
      translateX = 160;
    } else if (offset === items.length - 1) {
      translateX = -160;
    } else {
      translateX = offset < items.length / 2 ? -320 : 320;
    }

    const zIndex = isCenter ? 30 : 20;
    const opacity = isSide || isCenter ? 1 : 0;

    return {
      transform: `translateX(${translateX}px) scale(${isCenter ? 1.1 : 0.8})`,
      zIndex,
      opacity,
    };
  };

  return {
    currentIndex,
    containerRef,
    handleStart,
    handleMove,
    handleEnd,
    calculateStyles,
    hoverDirection,
    handleMouseMove,
    handleMouseLeave,
    handlePrev,
    handleNext
  };
};