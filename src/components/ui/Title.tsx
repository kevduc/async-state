import type { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return <h1 className="mb-8 text-6xl">{children}</h1>;
}
