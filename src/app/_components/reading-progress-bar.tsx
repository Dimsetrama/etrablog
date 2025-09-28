"use client";

import { useState, useEffect } from "react";

export function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  // This function will run on every scroll event
  const handleScroll = () => {
    // Calculate the scrollable height of the page
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Calculate how far the user has scrolled
    const scrollPosition = window.scrollY;
    // Calculate the percentage
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    setWidth(scrollPercentage);
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <div 
      className="fixed top-0 left-0 z-50 h-1 bg-black dark:bg-white" 
      style={{ width: `${width}%` }} 
    />
  );
}
