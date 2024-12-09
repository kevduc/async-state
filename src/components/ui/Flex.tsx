import type { PropsWithChildren } from "react";

export function Flex({ children }: PropsWithChildren) {
  return <div className="mt-6 flex flex-wrap gap-6">{children}</div>;
}
