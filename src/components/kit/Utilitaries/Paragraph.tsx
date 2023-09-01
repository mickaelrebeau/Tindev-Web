import {cn} from "@/lib/utils.ts";
import {PropsWithChildren} from "react";

export function Paragraph({ children,  className ="" }: PropsWithChildren<{ className: string }>) {
  return (
      <p className={cn("text-sm md:text-base text-zinc-700 dark:text-zinc-200 text-justify my-3",className)}>
        {children}

      </p>
  )
}
