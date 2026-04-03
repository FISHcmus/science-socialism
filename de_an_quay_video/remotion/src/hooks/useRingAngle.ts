import { useState, useEffect, useRef } from "react";

/**
 * Animates a ring rotation angle using requestAnimationFrame.
 * Use in Ladle stories and any non-Remotion React context.
 * In Remotion sections, compute ringAngle from frame/fps directly instead.
 *
 * @param speed - degrees per second (default 80)
 */
export function useRingAngle(speed = 80): number {
  const [angle, setAngle] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf: number;
    const tick = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = (timestamp - startRef.current) / 1000;
      setAngle((elapsed * speed) % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return angle;
}
