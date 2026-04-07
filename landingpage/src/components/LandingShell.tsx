"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";

const CommandSheet = dynamic(() => import("@/components/CommandSheet").then((m) => ({ default: m.CommandSheet })), {
  ssr: false,
});

export function LandingShell({ children }: { children: React.ReactNode }) {
  const [commandSheetOpen, setCommandSheetOpen] = useState(false);

  // Handle browser back/forward for hash navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Global Ctrl+K shortcut
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandSheetOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground film-grain">
      <Navbar
        items={[
          { label: "Content", href: "#chapters" },
          { label: "Video", href: "#video" },
          { label: "Team", href: "#team" },
          { label: "Resources", href: "#resources" },
        ]}
        onCommandSheet={() => setCommandSheetOpen(true)}
      />
      {children}
      <CommandSheet open={commandSheetOpen} onOpenChange={setCommandSheetOpen} />
    </div>
  );
}
