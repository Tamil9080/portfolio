"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number; // px
  sparkRadius?: number; // px distance
  sparkCount?: number;
  duration?: number; // ms
  easing?: string;
  extraScale?: number; // multiplier for ending scale
  children?: ReactNode;
}

interface Burst {
  id: number;
  x: number; // clientX
  y: number; // clientY
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = "#ffffff",
  sparkSize = 8,
  sparkRadius = 50,
  sparkCount = 8,
  duration = 400,
  easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  extraScale = 1,
  children,
}) => {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = ++idRef.current;
      setBursts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      // Clean up this burst after duration
      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, duration);
    };

    window.addEventListener("click", handleClick, { passive: true });
    return () => window.removeEventListener("click", handleClick);
  }, [duration]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{
        contain: "layout paint size",
      }}
    >
      {children}
      {bursts.map((b) => (
        <svg
          key={b.id}
          className="absolute"
          style={{
            left: b.x - (sparkRadius + 10),
            top: b.y - (sparkRadius + 10),
            width: sparkRadius * 2 + 20,
            height: sparkRadius * 2 + 20,
            pointerEvents: "none",
            overflow: "visible",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          viewBox={`0 0 ${sparkRadius * 2 + 20} ${sparkRadius * 2 + 20}`}
        >
          {/* Center body */}
          <circle
            cx={sparkRadius + 10}
            cy={sparkRadius + 10}
            r="3"
            fill={sparkColor}
            opacity="0.9"
            style={{
              animation: `spiderPulse ${duration}ms ${easing} forwards`,
            }}
          />

          {/* Spider legs */}
          {Array.from({ length: sparkCount }).map((_, i) => {
            const angle = (i / sparkCount) * 360;
            const radians = (angle * Math.PI) / 180;
            const endX = (sparkRadius + 10) + sparkRadius * Math.cos(radians);
            const endY = (sparkRadius + 10) + sparkRadius * Math.sin(radians);

            // Small random jitter for organic feel
            const jitterX = (Math.random() - 0.5) * 6;
            const jitterY = (Math.random() - 0.5) * 6;

            return (
              <g key={i}>
                {/* Main leg */}
                <line
                  x1={sparkRadius + 10}
                  y1={sparkRadius + 10}
                  x2={endX + jitterX}
                  y2={endY + jitterY}
                  stroke={sparkColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.8"
                  style={{
                    animation: `spiderLeg ${duration}ms ${easing} forwards`,
                    willChange: "stroke-width, opacity",
                  } as React.CSSProperties}
                />

                {/* Leg tip glow */}
                <circle
                  cx={endX + jitterX}
                  cy={endY + jitterY}
                  r="2"
                  fill={sparkColor}
                  style={{
                    animation: `spiderTip ${duration}ms ${easing} forwards`,
                  }}
                />
              </g>
            );
          })}

          {/* Web strands connecting legs */}
          {Array.from({ length: sparkCount }).map((_, i) => {
            const nextI = (i + 1) % sparkCount;
            const angle1 = (i / sparkCount) * 360;
            const angle2 = (nextI / sparkCount) * 360;
            const radians1 = (angle1 * Math.PI) / 180;
            const radians2 = (angle2 * Math.PI) / 180;

            const x1 = (sparkRadius + 10) + (sparkRadius * 0.75) * Math.cos(radians1);
            const y1 = (sparkRadius + 10) + (sparkRadius * 0.75) * Math.sin(radians1);
            const x2 = (sparkRadius + 10) + (sparkRadius * 0.75) * Math.cos(radians2);
            const y2 = (sparkRadius + 10) + (sparkRadius * 0.75) * Math.sin(radians2);

            return (
              <line
                key={`web-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={sparkColor}
                strokeWidth="0.8"
                opacity="0.5"
                style={{
                  animation: `spiderWeb ${duration}ms ${easing} forwards`,
                }}
              />
            );
          })}

          {/* Inner web circle */}
          <circle
            cx={sparkRadius + 10}
            cy={sparkRadius + 10}
            r={sparkRadius * 0.5}
            fill="none"
            stroke={sparkColor}
            strokeWidth="0.8"
            opacity="0.4"
            style={{
              animation: `spiderWeb ${duration}ms ${easing} forwards`,
            }}
          />
        </svg>
      ))}
    </div>
  );
};

export default ClickSpark;
