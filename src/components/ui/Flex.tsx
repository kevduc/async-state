import type { PropsWithChildren } from "react";

export function Flex({ children }: PropsWithChildren) {
  return <div className="flex flex-wrap gap-6">{children}</div>;
}
