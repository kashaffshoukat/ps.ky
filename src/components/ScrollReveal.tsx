import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // 10% element visible hone par trigger ho ga
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationStyles = () => {
    let initialTransform = 'translateY(30px)';
    if (animation === 'scale-in') initialTransform = 'scale(0.92)';
    if (animation === 'slide-left') initialTransform = 'translateX(-40px)';
    if (animation === 'slide-right') initialTransform = 'translateX(40px)';
    if (animation === 'fade-in') initialTransform = 'translateY(0px)';

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate(0, 0) scale(1)' : initialTransform,
      transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: 'opacity, transform',
    };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;