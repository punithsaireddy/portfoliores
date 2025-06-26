import { useEffect, useRef } from "react";

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => {
      cursor.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-hover');
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .interactive-btn, .morphing-btn, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return { cursorRef };
}
