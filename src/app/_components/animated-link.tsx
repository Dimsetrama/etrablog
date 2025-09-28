"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const AnimatedLink = ({
  children,
  href,
  className,
}: React.PropsWithChildren<LinkProps & { className?: string }>) => {
  const router = useRouter();

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Stop the link from navigating immediately

    const mainContent = document.querySelector('main');
    mainContent?.classList.add('is-exiting'); // Add our exit class

    setTimeout(() => {
      router.push(href.toString());
    }, 400); // Wait for the animation (0.4s) to finish
  };

  return (
    <Link href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
};
