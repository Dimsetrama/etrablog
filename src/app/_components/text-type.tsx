// C:\web\my-final-blog\src\app\_components\text-type.tsx

"use client";

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

const TextType = ({
  text,
  typingSpeed = 50,
  pauseDuration = 3000, // Kept your 2.5s duration
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) => {
  const [currentText, setCurrentText] = useState("");
  const cursorRef = useRef<HTMLSpanElement>(null);

  // --- CHANGE #1: Initialize with a random index ---
  // This makes the very first quote on page load a random one.
  const [textIndex, setTextIndex] = useState(() =>
    Math.floor(Math.random() * text.length)
  );

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, [showCursor]);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text[textIndex];

      setCurrentText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        
        // --- CHANGE #2: Pick a new, different random index ---
        // This makes every subsequent quote random, preventing repeats.
        setTextIndex((prevIndex) => {
          if (text.length <= 1) return prevIndex; // Avoid infinite loop if only one quote exists
          
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * text.length);
          } while (newIndex === prevIndex); // Keep trying until we get a different one
          return newIndex;
        });
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 5.0 : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, text, textIndex, typingSpeed, pauseDuration]);

  return (
    <span className="text-type">
      {currentText}
      {showCursor && (
        <span ref={cursorRef} className="text-type__cursor">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;