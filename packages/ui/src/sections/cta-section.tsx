import React from "react";
import BackgroundContainer from "../landing/background-container";
import { LandingSection } from "../landing";
import { Button, Link } from "@nextui-org/react";
import { ArrowRightIcon } from "lucide-react";

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
    <BackgroundContainer>
      <LandingSection
        orientation='center'
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
    </BackgroundContainer>
  );
};
