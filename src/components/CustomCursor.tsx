import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Helper to find interactive elements
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    // Initial check and mutation observer support could be better, 
    // but for now we'll select common interactive elements
    const interactiveSelectors = 'button, a, [data-cursor-hover], input, textarea, select, .clickable';
    const interactiveElements = document.querySelectorAll(interactiveSelectors);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      // Optional: Remove default cursor
      (el as HTMLElement).style.cursor = 'none';
    });

    // Also observe DOM changes to attach listeners to new elements (simple version)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const newElements = document.querySelectorAll(interactiveSelectors);
          newElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter); // prevent dupes
            el.removeEventListener('mouseleave', handleMouseLeave);
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
            (el as HTMLElement).style.cursor = 'none';
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        (el as HTMLElement).style.cursor = 'auto';
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Central Dot - Fast Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[60] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.1
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* Trailing Ring - Smooth Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5
        }}
      >
        <div
          className={`w-8 h-8 border border-white rounded-full transition-all duration-300 ${isHovering ? 'bg-white border-transparent opacity-30' : 'bg-transparent'
            }`}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;