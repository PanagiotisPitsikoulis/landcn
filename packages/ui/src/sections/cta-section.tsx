import React from "react";
import { BackgroundContainer, LandingSection, pageBounds } from "../landing";
import { Button, cn, Link } from "@nextui-org/react";
import { ArrowRightIcon } from "lucide-react";
import { TestimonialsSection } from "./testimonials-section";

export type CTASectionProps = {
  title: string;
  subtitle: string;
  ctaLink: string;
  ctaText: string;
};

/**
 * Composed CTA component that combines a LandingText, a Safari component, and optional features.
 * @param title - The title of the hero section.
 * @param subtitle - The subtitle of the hero section.
 * @param ctaLink - The link for the call-to-action button.
 * @param ctaText - The text for the call-to-action button.
 * @returns JSX.Element
 */
export const CtaSection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaLink,
  ctaText,
}) => {
  return (
    <BackgroundContainer
      className={cn(pageBounds, "py-[5rem]")}
      background='/gradients/bg/pink.jpg'
      overlay={
        <div className='bg-gradient-to-r from-background via-background'></div>
      }
    >
      <LandingSection
        orientation='left'
        landingTextProps={{
          title,
          subtitle,
          size: "md",
          bottomContent: (
            <Button
              as={Link}
              href={ctaLink}
              endContent={<ArrowRightIcon />}
              size='lg'
              color='primary'
            >
              {ctaText}
            </Button>
          ),
        }}
      />
      <TestimonialsSection
        reviews={[
          {
            name: "Jack",
            username: "@jack",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            img: "https://avatar.vercel.sh/jack",
          },
          {
            name: "Jill",
            username: "@jill",
            body: "I don't know what to say. I'm speechless. This is amazing.",
            img: "https://avatar.vercel.sh/jill",
          },
          {
            name: "John",
            username: "@john",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/john",
          },
          {
            name: "Jane",
            username: "@jane",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jane",
          },
          {
            name: "Jenny",
            username: "@jenny",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jenny",
          },
          {
            name: "James",
            username: "@james",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/james",
          },
        ]}
      />
    </BackgroundContainer>
  );
};
