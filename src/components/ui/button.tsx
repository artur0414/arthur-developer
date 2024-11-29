// Code: Button component using

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-2 whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-md justify-center bg-custom-yellow/90 text-custom-black-2 hover:bg-custom-yellow font-bold",
        destructive:
          " rounded-md justify-center bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "rounded-md justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "justify-end bg-custom-black text-custom-beige justify-center bg-pink-100 text-custom-black-2 font-semibold hover:bg-custom-yellow",
        ghost: " justify-center",
      },
      size: {
        default: "h-12 px-4 py-2 md:h-14 md:px-6 lg:h-16 lg:px-8",
        sm: "h-10 px-3 py-1 md:h-10 md:px-4 lg:h-16 lg:px-5",
        lg: "h-12 px-12 py-3 md:h-14 md:px-16 lg:h-16 lg:px-32",
        icon: "h-10 w-40 md:h-12 md:w-52 lg:h-14 lg:w-64",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
