import { cn, Spacer } from "@nextui-org/react";
import React from "react";

export const pageBounds = "lg:px-20 px-6 w-full";

/**
 *
 Wraps around the page section of the page, can optionally display a background image.
 */
export function PageContainer({
  children,
  classNames,
  className,
}: {
  children: React.ReactNode;
  classNames?: { base?: string; container?: string };
  className?: string;
}) {
  return (
    <div className={cn("flex-grow", pageBounds, className, classNames?.base)}>
      <Spacer y={5} className='hidden lg:block' />
      <div className={cn("flex flex-col gap-10", classNames?.container)}>
        {children}
      </div>
      <Spacer y={60} />
    </div>
  );
}
