"use client";
import React, { useState, useEffect, useRef } from "react";

interface ChildProps {
  children: React.ReactNode;
  className?: string;
}

const Show = ({ children, className }: ChildProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`w-full transition-all ease-in duration-800 ${isVisible ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-10"} ${className}`}
    >
      {children}
    </div>
  );
};

export default Show;
