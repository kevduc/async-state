import { cn } from "@/utils/cn";
import type { ComponentProps, PropsWithChildren } from "react";

export function Button({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "mb-6 cursor-pointer rounded-lg bg-indigo-800 px-4 py-2 hover:bg-indigo-600 active:bg-indigo-700",
        className,
      )}
    >
      {children}
    </button>
  );
}
