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
  <section className="py-16 px-8 text-center bg-background">
    <div className="max-w-[600px] mx-auto">
      <h2 className="display-text text-[42px] leading-[1.15] mb-4">{title}</h2>
      <p className="font-body text-lg text-muted-foreground mb-8">{description}</p>
      <div className="flex justify-center gap-4 flex-wrap">
        {items.map((item, i) => (
          <Button key={i} variant={item.variant === "outline" ? "outline" : "default"} size="lg" asChild
            className={item.variant === "outline" ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" : ""}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
              <ArrowIcon size={16} />
            </a>
          </Button>
        ))}
      </div>
    </div>
  </section>
);
