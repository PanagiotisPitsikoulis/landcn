import React from "react";
import { Button, cn, Link } from "@nextui-org/react";
import {
  AnimatedImageGrid,
  AnimatedWrapper,
  BackgroundContainer,
  LandingText,
  pageBounds,
} from "../landing";
import { ArrowRightIcon } from "lucide-react";
import { AnimatedGridPattern, ScriptCopyBtn } from "../components";

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  images: string[];
  ctaLink: string;
  ctaText: string;
  secondaryButton?: React.ReactNode;
};

/**
 * Composed Hero component that combines a LandingText, a Safari component, and optional features.
 * @param title - The title of the hero section.
 * @param subtitle - The subtitle of the hero section.
 * @param images - An array of image URLs to display in the hero section.
 * @param ctaLink - The link for the call-to-action button.
 * @param ctaText - The text for the call-to-action button.
 * @returns JSX.Element
 * @param secondaryButton - Custom secondary button passed in as ReactNode
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  images,
  ctaLink,
  ctaText,
  secondaryButton,
}) => {
  return (
    <BackgroundContainer
      className={cn("pt-10 lg:pt-32", pageBounds)}
      background={<AnimatedGridPattern className='w-full' />}
      overlay={<div className='bg-background/90 dark:bg-background/50' />}
    >
      <section className='flex items-start justify-between h-[calc(100vh-150px)] max-lg:h-[50rem] flex-col gap-20 overflow-hidden'>
        <AnimatedWrapper
          className='flex items-start justify-start'
          triggerOnView
          threshold={0.05}
          bottom={40}
          duration={0.5}
        >
          <LandingText
            className='w-full'
            title={title}
            subtitle={subtitle}
            orientation='left'
            size='md'
            bottomContent={
              <div
                className={cn(
                  secondaryButton &&
                    "flex flex-col lg:flex-row gap-2 lg:items-end items-start"
                )}
              >
                <Button
                  as={Link}
                  href={ctaLink}
                  endContent={<ArrowRightIcon />}
                  size='md'
                  color='primary'
                >
                  {ctaText}
                </Button>
                {secondaryButton}
              </div>
            }
          />
        </AnimatedWrapper>
        <AnimatedImageGrid images={images} />
      </section>
    </BackgroundContainer>
  );
};
