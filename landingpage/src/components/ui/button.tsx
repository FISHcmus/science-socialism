"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 text-sm font-bold whitespace-nowrap uppercase tracking-[3px] transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 font-[var(--font-heading)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_rgba(0,0,0,0.3)] active:translate-y-[1px] active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90",
        destructive:
          "bg-destructive text-white border-2 border-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border-3 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground border-2 border-secondary hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline tracking-[2px] hover:translate-y-0 hover:shadow-none",
        stamp: "bg-transparent border-3 border-primary text-primary rotate-[-2deg] hover:rotate-0 hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-3",
        xs: "h-7 gap-1 px-3 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-4 has-[>svg]:px-2.5",
        lg: "h-12 px-8 text-base has-[>svg]:px-5",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
