import React from "react";
import { cn } from "@/lib/utils";

type TheaterEmbedProps = {
  src: string;
  title?: string;
  aspectRatio?: string;
  className?: string;
};

export const TheaterEmbed: React.FC<TheaterEmbedProps> = ({
  src,
  title = "Video",
  aspectRatio = "16/9",
  className,
}) => (
  <section className={cn("bg-black py-16 px-8", className)}>
    <div className="max-w-[1200px] mx-auto">
      <div
        className="relative w-full border-4 border-primary overflow-hidden"
        style={{ aspectRatio }}
      >
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </section>
);
