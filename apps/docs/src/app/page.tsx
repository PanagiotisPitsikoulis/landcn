import {
  BoltIcon,
  CodeIcon,
  CopyIcon,
  FramerIcon,
  GridIcon,
  HeartIcon,
  LayersIcon,
  LockIcon,
  PaletteIcon,
  PencilIcon,
  RocketIcon,
  TestTubeIcon,
} from "@repo/ui/icons";
import { PageContainer } from "@repo/ui/landing";
import {
  CtaSection,
  HeroSection,
  LandingSectionLeftSection,
  LandingSectionRightSection,
} from "@repo/ui/sections";

export default function Page(): JSX.Element {
  return (
    <PageContainer
      classNames={{ container: "max-lg:pt-5 space-y-20 pt-10 lg:pt-24" }}
    >
      <HeroSection
        ctaLink='/docs/get_started'
        ctaText='Get Started'
        title='LandCN'
        images={[
          "https://images.pexels.com/photos/17356523/pexels-photo-17356523/free-photo-of-silhouette-of-man-rock-climbing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/29740978/pexels-photo-29740978/free-photo-of-artistic-chinese-dragon-ornaments-on-red-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/29493504/pexels-photo-29493504/free-photo-of-urban-fashion-model-in-modern-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/29904631/pexels-photo-29904631/free-photo-of-minimalist-chairs-in-sunlit-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ]}
        subtitle='Build production-ready landing pages in minutes.'
      />
      <LandingSectionLeftSection
        image={{
          src: "https://images.pexels.com/photos/17356523/pexels-photo-17356523/free-photo-of-silhouette-of-man-rock-climbing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        text={{
          title: "Built for Modern Development",
          subtitle:
            "Leverage the latest web technologies and best practices for building exceptional landing pages",
        }}
        features={[
          {
            icon: <PaletteIcon className='text-primary' />,
            title: "TailwindCSS Powered",
          },
          {
            icon: <CodeIcon className='text-primary' />,
            title: "TypeScript Ready",
          },
          {
            icon: <BoltIcon className='text-primary' />,
            title: "Zero Runtime CSS",
          },
          {
            icon: <FramerIcon className='text-primary' />,
            title: "Framer Motion",
          },
        ]}
      />
      <LandingSectionRightSection
        image={{
          src: "https://images.pexels.com/photos/29740978/pexels-photo-29740978/free-photo-of-artistic-chinese-dragon-ornaments-on-red-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        text={{
          title: "DX First",
          subtitle:
            "Everything you need to build landing pages faster with confidence.",
        }}
        features={[
          {
            icon: <CopyIcon className='text-primary' />,
            title: "Copy & Paste Ready",
          },
          {
            icon: <PencilIcon className='text-primary' />,
            title: "Customizable",
          },
          {
            icon: <LayersIcon className='text-primary' />,
            title: "Well Documented",
          },
          {
            icon: <LockIcon className='text-primary' />,
            title: "Production Ready",
          },
        ]}
      />
      <LandingSectionLeftSection
        image={{
          src: "https://images.pexels.com/photos/29493504/pexels-photo-29493504/free-photo-of-urban-fashion-model-in-modern-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        text={{
          title: "Complete Landing Page Kit",
          subtitle:
            "All the essential sections you need to create converting landing pages",
        }}
        features={[
          {
            icon: <RocketIcon className='text-primary' />,
            title: "Hero Sections",
          },
          {
            icon: <GridIcon className='text-primary' />,
            title: "Feature Grids",
          },
          {
            icon: <HeartIcon className='text-primary' />,
            title: "Testimonials",
          },
          {
            icon: <TestTubeIcon className='text-primary' />,
            title: "Call-to-Actions",
          },
        ]}
      />
      <CtaSection
        ctaLink='/docs/get_started'
        ctaText='Start Building Now'
        title='Transform Your Landing Pages'
        subtitle='Join developers who are building modern, responsive landing pages with LandCN'
      />
    </PageContainer>
  );
}
