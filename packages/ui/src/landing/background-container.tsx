import { cn } from "@nextui-org/react";
import React from "react";

/** Content that can be either a URL string or a React element */
type LayerContent = string | React.ReactElement;

/** Configuration for responsive backgrounds at different breakpoints */
type ResponsiveBackground = {
  /** Required default background content */
  default: LayerContent;
  /** Small devices (640px and up) */
  sm?: LayerContent;
  /** Medium devices (768px and up) */
  md?: LayerContent;
  /** Large devices (1024px and up) */
  lg?: LayerContent;
  /** Extra large devices (1280px and up) */
  xl?: LayerContent;
  /** 2XL devices (1536px and up) */
  "2xl"?: LayerContent;
};

/** Common properties for visual layers */
type LayerProps = {
  /** Layer opacity (0-1) */
  opacity?: number;
  /** CSS blend mode for layer composition */
  blendMode?: React.CSSProperties["mixBlendMode"];
  /** Additional CSS classes */
  className?: string;
};

/** Props for the BackgroundContainer component */
export type BackgroundContainerProps = {
  /** Content to be rendered on top of the background */
  children: React.ReactNode;
  /** Background content or responsive configuration */
  background?: LayerContent | ResponsiveBackground;
  /** Overlay configuration for additional visual effects */
  overlay?: LayerProps & {
    /** Custom overlay content */
    content?: LayerContent;
    /** Background color when no content is provided */
    color?: string;
    /** Blur effect intensity in pixels */
    blur?: number;
  };
  /** Container CSS class */
  className?: string;
  /** CSS classes for specific container parts */
  classNames?: {
    container?: string;
    background?: string;
    overlay?: string;
    content?: string;
  };
};

/**
 * Renders a layer with either a React element or an image URL
 * @param content - The content to render (React element or image URL)
 * @param className - CSS classes to apply
 * @param style - Additional CSS styles
 */
export const Layer = ({
  content,
  className,
  style,
}: {
  content: LayerContent;
  className?: string;
  style?: React.CSSProperties;
}) => {
  if (React.isValidElement(content)) {
    return React.cloneElement(
      content as React.ReactElement<{
        className?: string;
        style?: React.CSSProperties;
      }>,
      {
        className: cn(
          className,
          (content.props as { className?: string }).className
        ),
        style: {
          ...style,
          ...(content.props as { style?: React.CSSProperties }).style,
        },
      }
    );
  }

  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage:
          typeof content === "string" ? `url('${content}')` : undefined,
      }}
    />
  );
};

/**
 * A container component that supports multiple background layers with responsive options
 * @example
 * ```tsx
 * // With image URL
 * <BackgroundContainer
 *   background="/images/hero.jpg"
 *   overlay={{ color: "rgba(0,0,0,0.5)", blur: 2 }}
 * >
 *   <Content />
 * </BackgroundContainer>
 *
 * // With React element
 * <BackgroundContainer
 *   background={<video src="/video/hero.mp4" autoPlay muted loop />}
 *   overlay={{
 *     content: <div className="bg-gradient-to-b from-transparent to-black" />,
 *     opacity: 0.7
 *   }}
 * >
 *   <Content />
 * </BackgroundContainer>
 *
 * // With responsive config
 * <BackgroundContainer
 *   background={{
 *     default: "/images/mobile.jpg",
 *     lg: "/images/desktop.jpg"
 *   }}
 * >
 *   <Content />
 * </BackgroundContainer>
 * ```
 */
export function BackgroundContainer({
  children,
  background,
  overlay,
  className,
  classNames = {},
}: BackgroundContainerProps) {
  if (!background) return <div className={className}>{children}</div>;

  /**
   * Type guard to check if the background is a responsive configuration
   * @param bg - Background content to check
   * @returns True if the background is a responsive configuration
   */
  const isResponsiveBackground = (
    bg: LayerContent | ResponsiveBackground
  ): bg is ResponsiveBackground => {
    return (
      typeof bg === "object" && !React.isValidElement(bg) && "default" in bg
    );
  };

  /**
   * Extracts the appropriate background content based on type
   * @param bg - Background content or configuration
   * @returns The resolved background content
   */
  const getBackgroundContent = (
    bg: LayerContent | ResponsiveBackground
  ): LayerContent => {
    if (isResponsiveBackground(bg)) {
      return bg.default; // For now, just return default. Responsive handling via CSS/JS
    }
    return bg;
  };

  return (
    <div
      className={cn(
        "relative overflow-visible", // Base container styles
        className,
        classNames.container
      )}
    >
      {/* Base Background Layer */}
      <Layer
        content={getBackgroundContent(background)}
        className={cn(
          "absolute inset-0 pointer-events-none select-none bg-cover bg-center",
          classNames.background
        )}
      />

      {/* Optional Overlay */}
      {overlay && overlay.content && (
        <Layer
          content={overlay.content}
          className={cn(
            "absolute inset-0 pointer-events-none select-none",
            classNames.overlay
          )}
          style={{
            opacity: overlay.opacity ?? 0.5,
            backdropFilter: overlay.blur
              ? `blur(${overlay.blur}px)`
              : undefined,
            mixBlendMode: overlay.blendMode ?? "normal",
          }}
        />
      )}

      {/* Fallback Color Overlay */}
      {overlay && !overlay.content && (
        <div
          className={cn(
            "absolute inset-0 pointer-events-none select-none",
            classNames.overlay
          )}
          style={{
            backgroundColor: overlay.color ?? "rgb(0 0 0 / 0.5)",
            opacity: overlay.opacity ?? 0.5,
            backdropFilter: overlay.blur
              ? `blur(${overlay.blur}px)`
              : undefined,
            mixBlendMode: overlay.blendMode ?? "normal",
          }}
        />
      )}

      {/* Content Layer */}
      <div className={cn("relative z-10", classNames.content)}>{children}</div>
    </div>
  );
}
