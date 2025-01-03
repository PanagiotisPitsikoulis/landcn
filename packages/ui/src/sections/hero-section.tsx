import React from "react";
import { Button, Link } from "@nextui-org/react";
import { AnimatedImageGrid, AnimatedWrapper, LandingText } from "../landing";
import { ArrowRightIcon } from "lucide-react";

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  images: string[];
  ctaLink: string;
  ctaText: string;
};

/**
 * Composed Hero component that combines a LandingText, a Safari component, and optional features.
 * @param title - The title of the hero section.
 * @param subtitle - The subtitle of the hero section.
 * @param images - An array of image URLs to display in the hero section.
 * @param ctaLink - The link for the call-to-action button.
 * @param ctaText - The text for the call-to-action button.
 * @returns JSX.Element
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  images,
  ctaLink,
  ctaText,
}) => {
  return (
    <section className='flex items-start justify-between h-[calc(100vh-150px)] max-lg:h-[50rem] flex-col gap-20 overflow-hidden'>
      <AnimatedWrapper
        className='flex items-start justify-start'
        triggerOnView
        threshold={0.05}
        bottom={40}
        duration={0.5}
      >
        <LandingText
          title={title}
          subtitle={subtitle}
          orientation='left'
          size='md'
          bottomContent={
            <Button
              as={Link}
              href={ctaLink}
              endContent={<ArrowRightIcon />}
              size='lg'
              color='primary'
            >
              {ctaText}
            </Button>
          }
        />
      </AnimatedWrapper>
      <AnimatedImageGrid images={images} />
    </section>
  );
};
