"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, SpringOptions } from 'framer-motion';

interface TiltedProps {
  children: React.ReactNode;
  className?: string;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 1,
};

const Tilted: React.FC<TiltedProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -14;
    const rotationY = (offsetX / (rect.width / 2)) * 14;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseEnter = () => {
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div ref={ref} className={`[perspective:800px] ${className}`}>
        <motion.div
            style={{
                rotateX,
                rotateY,
                scale,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="h-full"
        >
            {children}
        </motion.div>
    </div>
  );
};

export default Tilted; 