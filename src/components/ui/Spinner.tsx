import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

export function Spinner({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-6 aspect-square h-10 animate-spin rounded-full border-stone-200 border-b-transparent",
        className,
      )}
      {...props}
    ></div>
  );
}
