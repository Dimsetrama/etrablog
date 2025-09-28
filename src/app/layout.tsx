import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { Footer } from "@/app/_components/footer";
import { ThemeSwitcher } from "@/app/_components/theme-switcher";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Etrama | Thrives on Neglect",
  description: "In order to shit fire, one must first chew glass.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}>
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}