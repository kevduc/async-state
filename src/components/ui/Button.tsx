import { cn } from "@/utils/cn";
import type { ComponentProps, PropsWithChildren } from "react";

export function Button({
  children,
  className,
  variant,
  ...props
}: PropsWithChildren & ComponentProps<"button"> & { variant?: "error" }) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "cursor-pointer rounded-lg bg-indigo-700 px-4 py-2 hover:bg-indigo-500 active:bg-indigo-600 disabled:pointer-events-none disabled:opacity-75",
        variant === "error" &&
          "bg-red-700 text-white hover:bg-red-500 active:bg-red-600",
        className,
      )}
    >
      {children}
    </button>
  );
}
