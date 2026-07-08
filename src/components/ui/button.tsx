import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-display font-semibold transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-accent shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-foreground hover:bg-muted",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        dark: "bg-dark text-white hover:bg-dark/80 ring-1 ring-white/10",
      },
      size: {
        sm: "h-9 px-4 text-lg",
        default: "h-11 px-6 py-2",
        lg: "h-13 px-8 py-3 text-lg",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
