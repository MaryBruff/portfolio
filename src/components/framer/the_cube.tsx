"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export default function TheCube({
  scale = 1,
  speed = 1,
}: {
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin((t * speed) / 10000) * 200;
    const y = (1 + Math.sin((t * speed) / 1000)) * 1 * scale;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  const baseSize = 200;
  const size = baseSize * scale;
  const translateZ = size / 2;
  const perspective = baseSize * scale * 4; // Adjusted to scale more aggressively

  function StyleSheet() {
    return (
      <style>{`
        .container {
          perspective: ${perspective}px;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1; /* Behind all other content */
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none; /* Prevent cube from intercepting clicks */
        }

        .cube {
          width: ${size}px;
          height: ${size}px;
          position: relative;
          transform-style: preserve-3d;
        }

        .side {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: red;
          opacity: 0.6;
        }

        .front {
          transform: rotateY(0deg) translateZ(${translateZ}px);
          background-color: var(--hue-1-transparent, rgba(255, 0, 0, 0.6));
        }
        .right {
          transform: rotateY(90deg) translateZ(${translateZ}px);
          background-color: var(--hue-2-transparent, rgba(0, 255, 0, 0.6));
        }
        .back {
          transform: rotateY(180deg) translateZ(${translateZ}px);
          background-color: var(--hue-3-transparent, rgba(0, 0, 255, 0.6));
        }
        .left {
          transform: rotateY(-90deg) translateZ(${translateZ}px);
          background-color: var(--hue-4-transparent, rgba(255, 255, 0, 0.6));
        }
        .top {
          transform: rotateX(90deg) translateZ(${translateZ}px);
          background-color: var(--hue-5-transparent, rgba(255, 0, 255, 0.6));
        }
        .bottom {
          transform: rotateX(-90deg) translateZ(${translateZ}px);
          background-color: var(--hue-6-transparent, rgba(0, 255, 255, 0.6));
        }
      `}</style>
    );
  }

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      <StyleSheet />
    </div>
  );
}