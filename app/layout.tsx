import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiBeautifyIcon, MailOpenIcon } from "@hugeicons/core-free-icons";

import { Bricolage_Grotesque } from "next/font/google";

import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean-Jacques Akakpo - Senior Frontend Developer",
  description:
    "Senior frontend developer specializing in React, Vue, and TypeScript with over seven years of experience",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolageGrotesque.variable} antialiased`}>
        <header className="header">
          <div className="header-inner container mx-auto">
            <a href="mailto:gensjaak@gmail.com" className="logo">
              <span className="logo-icon-wrapper">
                <HugeiconsIcon icon={MailOpenIcon} size={22} strokeWidth={1.5} />
              </span>
              <span className="logo-text">gensjaak@gmail.com</span>
            </a>

            <nav className="navigation">
              <ul className="navigation-list">
                <li className="navigation-list-item">
                  <Link className="navigation-link" href="#works" scroll={true}>
                    Works
                  </Link>
                </li>
                <li className="navigation-list-item">
                  <Link className="navigation-link" href="#expertises">
                    Expertises
                  </Link>
                </li>
                <li className="navigation-list-item">
                  <Link className="navigation-link" href="#contact">
                    Contact
                  </Link>
                </li>
                <li className="navigation-list-item">
                  <Link
                    className="navigation-link build-with-ai"
                    href="#build-with-ai"
                  >
                    <HugeiconsIcon
                      icon={AiBeautifyIcon}
                      size={18}
                      className="md:size-[22px]"
                      strokeWidth={1.5}
                    />
                    <span className="hidden md:inline">
                      Let&apos;s build with AI
                    </span>
                    <span className="inline md:hidden">Go with AI</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-content">
            <span className="footer-text">
              &copy; {new Date().getFullYear()} Jean-Jacques Akakpo. All rights
              reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
