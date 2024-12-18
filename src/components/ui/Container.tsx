import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-screen-lg px-4 py-8">{children}</div>;
}
