import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "./icons";

type CTAItem = {
  label: string;
  href: string;
  variant?: "default" | "outline";
};

type CallToActionProps = {
  title?: string;
  description?: string;
  items?: CTAItem[];
};

const defaultItems: CTAItem[] = [
  { label: "Access Moodle", href: "https://courses.hcmus.edu.vn/course/view.php?id=16128", variant: "default" },
  { label: "Contact Team Leader", href: "mailto:nhanclassroom@gmail.com", variant: "outline" },
];

export const CallToAction: React.FC<CallToActionProps> = ({
  title = "Start Learning Now",
  description = "Access course materials and join group discussions",
  items = defaultItems,
}) => (
  <section className="py-20 px-8 text-center bg-background star-watermark relative">
    <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
    <div className="relative z-10 max-w-[700px] mx-auto">
      <h2 className="display-text text-[56px] leading-[1] mb-4 stamp-text">{title}</h2>
      <div className="accent-line mx-auto my-4 w-[60%]" />
      <p className="font-body text-lg text-muted-foreground mb-10 uppercase tracking-wider">{description}</p>
      <div className="flex justify-center gap-4 flex-wrap">
        {items.map((item, i) => (
          <Button key={i} variant={item.variant === "outline" ? "stamp" : "default"} size="lg" asChild>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
              <ArrowIcon size={16} />
            </a>
          </Button>
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
  </section>
);
