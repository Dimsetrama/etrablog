"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeSwitcher } from "./_components/theme-switcher";

function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 z-50 h-2 bg-black dark:bg-white" // <-- Changed h-1 to h-1.5
      style={{ width: `${width}%` }} 
    />
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // This checks if the URL is a single post page (e.g., /posts/some-slug)
  const isPostPage = pathname.startsWith('/posts/') && pathname.length > 7;

  return (
    <>
      {/* The progress bar will now only render if it's a post page */}
      {isPostPage && <ReadingProgressBar />}
      
      <ThemeSwitcher />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
