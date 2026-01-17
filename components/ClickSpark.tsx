"use client";
import React, { useEffect, useRef, useState } from "react";

type ClickSparkProps = {
  sparkColor?: string;
  sparkSize?: number; // px
  sparkRadius?: number; // px distance
  sparkCount?: number;
  duration?: number; // ms
  easing?: string;
  extraScale?: number; // multiplier for ending scale
};

interface Burst {
  id: number;
  x: number; // clientX
  y: number; // clientY
}

export default function ClickSpark({
  sparkColor = "#ffffff",
  sparkSize = 8,
  sparkRadius = 16,
  sparkCount = 8,
  duration = 450,
  easing = "ease-out",
  extraScale = 1,
}: ClickSparkProps) {
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

  const distance = sparkRadius;
  const endScale = 0.9 + 0.2 * extraScale;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{
        // This helps avoid paint delays on some browsers
        contain: "layout paint size",
      }}
    >
      {bursts.map((b) => (
        <div key={b.id} className="absolute" style={{ left: b.x, top: b.y }}>
          {Array.from({ length: sparkCount }).map((_, i) => {
            const angle = (i / sparkCount) * 360; // degrees
            const jitter = (Math.random() - 0.5) * 12; // small randomness
            const finalAngle = angle + jitter;
            return (
              <span
                key={i}
                className="block absolute"
                style={{
                  width: sparkSize,
                  height: sparkSize,
                  borderRadius: sparkSize / 2,
                  background: sparkColor,
                  boxShadow: `0 0 ${Math.max(6, sparkSize)}px rgba(255,255,255,0.6)`,
                  transform: `translate(-50%, -50%) rotate(${finalAngle}deg)`,
                  animation: `clickSparkParticle ${duration}ms ${easing} forwards`,
                  ["--angle" as any]: `${finalAngle}deg`,
                  ["--distance" as any]: `${distance}px`,
                  ["--endScale" as any]: endScale,
                  willChange: "transform, opacity",
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
