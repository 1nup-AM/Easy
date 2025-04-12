
import React, { useEffect, useRef } from 'react';

const mathSymbols = [
  '+', '-', '×', '÷', '=', '≠', '≈', 
  '∞', '√', 'π', 'Σ', '∫', '∂', '∇', 
  'θ', 'α', 'β', 'γ', 'δ'
];

interface MathSymbol {
  content: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
}

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const symbolsRef = useRef<MathSymbol[]>([]);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const { width, height } = container.getBoundingClientRect();
    
    // Initialize symbols
    symbolsRef.current = Array.from({ length: 15 }, () => {
      const content = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
      return {
        content,
        x: Math.random() * width,
        y: Math.random() * height,
        size: 20 + Math.random() * 30,
        speed: 0.2 + Math.random() * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5
      };
    });
    
    // Create and position symbols
    symbolsRef.current.forEach(symbol => {
      const el = document.createElement('div');
      el.className = 'math-symbol absolute';
      el.textContent = symbol.content;
      el.style.fontSize = `${symbol.size}px`;
      el.style.left = `${symbol.x}px`;
      el.style.top = `${symbol.y}px`;
      el.style.transform = `rotate(${symbol.rotation}deg)`;
      el.style.opacity = '0';
      el.style.transition = 'opacity 1s ease-in';
      container.appendChild(el);
      
      // Fade in after a small delay
      setTimeout(() => {
        el.style.opacity = '0.15';
      }, 100);
    });
    
    // Animation function
    const animate = () => {
      const elements = container.querySelectorAll('.math-symbol');
      
      symbolsRef.current.forEach((symbol, index) => {
        const el = elements[index] as HTMLElement;
        if (!el) return;
        
        // Update position
        symbol.y -= symbol.speed;
        symbol.rotation += symbol.rotationSpeed;
        
        // Reset if out of view
        if (symbol.y < -50) {
          symbol.y = height + 50;
          symbol.x = Math.random() * width;
        }
        
        // Apply new position
        el.style.top = `${symbol.y}px`;
        el.style.left = `${symbol.x}px`;
        el.style.transform = `rotate(${symbol.rotation}deg)`;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Remove all symbols
      const elements = container.querySelectorAll('.math-symbol');
      elements.forEach(el => el.remove());
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    ></div>
  );
};

export default FloatingElements;
