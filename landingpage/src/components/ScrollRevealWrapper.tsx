"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ScrollRevealWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
