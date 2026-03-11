"use client";

import { useState, useEffect, useRef } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Use event delegation on document level for better performance and dynamic content
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" || 
        target.closest("button") ||
        target.tagName === "A" ||
        target.closest("a")
      ) {
        setIsHoveringButton(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" || 
        target.closest("button") ||
        target.tagName === "A" ||
        target.closest("a")
      ) {
        setIsHoveringButton(false);
      }
    };

    // Smooth animation using lerp (linear interpolation)
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      // Smooth factor (lower = smoother but slower, higher = faster but less smooth)
      const smoothFactor = 0.15;

      cursorRef.current.x = lerp(cursorRef.current.x, mousePosition.current.x, smoothFactor);
      cursorRef.current.y = lerp(cursorRef.current.y, mousePosition.current.y, smoothFactor);

      setCursorPosition({
        x: cursorRef.current.x,
        y: cursorRef.current.y,
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners with event delegation
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full border-2 bg-transparent will-change-transform"
      style={{
        width: "40px",
        height: "40px",
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        borderColor: "#F5C842",
        transform: `translate(-50%, -50%) scale(${isHoveringButton ? 1.5 : 1})`,
        transition: "transform 0.2s ease-out",
      }}
    />
  );
};

export default CustomCursor;