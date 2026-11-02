import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Design system "A · Ledger" button.
 * - default: orange fill + NAVY label (4.61:1). White-on-orange is 3.06:1 and fails AA.
 * - every size has a ≥44px target; icons use margin-inline utilities only (RTL safe).
 * Use `buttonVariants` on <a>/<Link> for link-buttons — never nest <Button> inside <a>.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-full border-2 border-transparent text-base leading-tight font-extrabold whitespace-nowrap transition-[background-color,color,filter,transform] duration-150 outline-none select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.25em]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:brightness-105",
        /** navy outline on light surfaces; turns white inside a navy band (--outline / --outline-inv set by Section tone="navy") */
        outline:
          "border-(--outline,var(--color-secondary)) bg-transparent text-(--outline,var(--color-secondary)) hover:bg-(--outline,var(--color-secondary)) hover:text-(--outline-inv,#ffffff)",
        /** white outline on navy surfaces */
        outlineLight:
          "border-white/75 bg-transparent text-white hover:bg-white hover:text-secondary",
        /** solid navy */
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-navy-800",
        ghost: "text-secondary hover:bg-muted",
        link: "min-h-0 rounded-none border-0 p-0 text-brand underline underline-offset-4 hover:no-underline",
      },
      size: {
        default: "min-h-12 px-6", // 48
        sm: "min-h-11 px-4 text-sm", // 44
        lg: "min-h-13 px-7", // 52
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
