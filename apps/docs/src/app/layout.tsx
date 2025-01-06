import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@repo/ui/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LandCN",
  description: "Level up your landing pages today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
