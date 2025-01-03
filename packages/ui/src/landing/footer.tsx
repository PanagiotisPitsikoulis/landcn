import { cn, Link } from "@nextui-org/react";
import { ThemeSwitch } from "../components";
import { pageBounds } from "./page-container";

function getCurrentYear(): number {
  return new Date().getFullYear();
}

export type FooterProps = {
  text: {
    brandName: string;
    copyrightText: string;
    createdByText: string;
    creatorName: string;
  };
  creatorExternalLink: string;
};

export const Footer = ({ text, creatorExternalLink }: FooterProps) => {
  return (
    <footer
      className={cn("flex items-center justify-between pb-12", pageBounds)}
    >
      <div></div>
      <div className='flex flex-col justify-center items-center gap-1'>
        <p className='text-sm text-default-400'>
          © {getCurrentYear()} {text.brandName}. {text.copyrightText}.
        </p>
        <p className='text-sm text-default-400'>
          {text.createdByText}{" "}
          <Link
            color='foreground'
            size='sm'
            showAnchorIcon
            isExternal
            href={creatorExternalLink}
          >
            {text.creatorName}
          </Link>
        </p>
      </div>
      <ThemeSwitch />
    </footer>
  );
};
