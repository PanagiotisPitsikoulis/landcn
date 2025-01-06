import { cn, Spacer } from "@nextui-org/react";
import React from "react";
import { Footer } from "./footer";

export const pageBounds = "lg:px-20 px-6 w-full";
export const bleedPageBounds = "lg:-mx-20 -mx-6";

type PageContainerProps = {
  children: React.ReactNode;
  classNames?: {
    base?: string;
    container?: string;
    content?: string;
  };
  className?: string;
  /** Allow content to bleed through container bounds */
  bleed?: boolean;
};

/**
 * Wraps around the page section, with optional bleeding backgrounds
 * @example
 * ```tsx
 * // Normal container
 * <PageContainer>
 *   <Content />
 * </PageContainer>
 *
 * // With bleeding background
 * <PageContainer bleed>
 *   <BackgroundContainer className={bleedPageBounds}>
 *     <Content />
 *   </BackgroundContainer>
 * </PageContainer>
 * ```
 */
export function PageContainer({
  children,
  classNames,
  className,
  bleed,
}: PageContainerProps) {
  return (
    <>
      <div
        className={cn(
          "flex-grow w-full",
          !bleed && pageBounds,
          className,
          classNames?.base
        )}
      >
        <main
          className={cn(
            "flex flex-col gap-10",
            !bleed && "lg:pt-5",
            classNames?.container
          )}
        >
          <div className={cn(classNames?.content)}>{children}</div>
        </main>
        <Spacer y={60} />
      </div>
      <Footer
        creatorExternalLink='https://www.panagiotispitsikoulis.gr'
        text={{
          brandName: "LandCN",
          copyrightText: "All rights reserved",
          createdByText: "Created by",
          creatorName: "Panagiotis Pitsikoulis",
        }}
      />
    </>
  );
}
