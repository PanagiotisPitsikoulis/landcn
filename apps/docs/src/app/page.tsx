"use client";
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
import {
  BackgroundContainer,
  pageBounds,
  PageContainer,
} from "@repo/ui/landing";
import {
  CtaSection,
  HeroSection,
  LandingSectionLeftSection,
  LandingSectionRightSection,
} from "@repo/ui/sections";
import { Card, CardBody, cn } from "@repo/ui/extras";
import { ScriptCopyBtn, TopBanner } from "@repo/ui/components";

export default function Page(): JSX.Element {
  return (
    <div className='light'>
      <TopBanner
        pathName='/'
        pathsData={[
          {
            path: "/",
            emoji: "🎨",
            primaryText: "The ShadCN for landing pages",
            secondaryLink: { href: "/" },
            primaryLink: {
              href: "/docs/get_started",
              label: "Get Started",
            },
          },
        ]}
      />
      <BackgroundContainer
        background='/gradients/bg/pink.jpg'
        overlay={
          <div className='bg-gradient-to-r from-background via-background bg-background/40'></div>
        }
      >
        <PageContainer
          bleed
          classNames={{ container: "space-y-24 lg:space-y-24 pt-0 lg:pt-0" }}
        >
          <HeroSection
            secondaryButton={
              <ScriptCopyBtn
                showMultiplePackageOptions={true}
                codeLanguage='shell'
                lightTheme='catppuccin-latte'
                darkTheme='catppuccin-latte'
                commandMap={{
                  npm: "npm run shadcn add button",
                  bun: "bun x shadcn@latest add button",
                }}
              />
            }
            ctaLink='/docs/get_started'
            ctaText='Get Started'
            title='LandCN'
            images={[
              "/gradients/abstract/4.jpg",
              "/gradients/abstract/5.jpg",
              "/gradients/abstract/6.jpg",
              "/gradients/abstract/3.jpg",
            ]}
            subtitle='🧑🏻‍🎨 Build production-ready landing pages in minutes.'
          />
          <BackgroundContainer className={cn(pageBounds)}>
            <LandingSectionLeftSection
              image={{
                src: "https://images.pexels.com/photos/17356523/pexels-photo-17356523/free-photo-of-silhouette-of-man-rock-climbing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
              text={{
                title: "Modern Tools",
                subtitle:
                  "🤖 Leverage the latest web technologies and best practices for building exceptional landing pages",
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
          </BackgroundContainer>
          <BackgroundContainer className={cn(pageBounds)}>
            <LandingSectionRightSection
              image={{
                src: "https://images.pexels.com/photos/29740978/pexels-photo-29740978/free-photo-of-artistic-chinese-dragon-ornaments-on-red-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
              text={{
                title: "DX First",
                subtitle:
                  "🧑🏻‍💻 Everything you need to build landing pages faster with confidence.",
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
          </BackgroundContainer>
          <BackgroundContainer className={cn(pageBounds)}>
            <LandingSectionLeftSection
              image={{
                src: "https://images.pexels.com/photos/29493504/pexels-photo-29493504/free-photo-of-urban-fashion-model-in-modern-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
              text={{
                title: "Complete Component Kit",
                subtitle:
                  "🛍️ All the essential sections you need to create converting landing pages",
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
          </BackgroundContainer>
          <BackgroundContainer className={cn(pageBounds, "py-24")}>
            {/* Examples */}
            <section>
              <Card className='h-[35rem]'>
                <CardBody></CardBody>
              </Card>
            </section>
          </BackgroundContainer>
          <CtaSection
            ctaLink='/docs/get_started'
            ctaText='Start Building Now'
            title='Transform Your Landing Pages'
            subtitle='Join developers who are building modern, responsive landing pages with LandCN'
          />
        </PageContainer>
      </BackgroundContainer>
    </div>
  );
}
