'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { motion, useSpring, useTransform } from 'motion/react';
import { SiX } from 'react-icons/si';
import Button from './Button';

function useGitHubStars() {
  const [stars, setStars] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/KartikLabhshetwar/stage');
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStars();
  }, []);

  return { stars, isLoading };
}

function AnimatedCounter({ value }: { value: number }) {
  const spring = useSpring(0, { damping: 30, stiffness: 100 });

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  const display = useTransform(spring, (current: number) => Math.round(current).toLocaleString());

  return <motion.span>{display}</motion.span>;
}

const Navbar = () => {
  const { stars, isLoading } = useGitHubStars();

  return (
    <div className="max-w-screen-2xl mx-auto w-full h-20 fixed inset-x-0 z-50 bg-[#121212]/95 backdrop-blur flex items-center justify-between md:px-24 px-6">
      <div className="flex items-center gap-4 ">
        <Image src="/Logo.svg" alt="logo" width={100} height={100} className="size-35 " />
      </div>
      <div className="flex items-center md:gap-5 gap-1">
        <Link
          href="https://github.com/KartikLabhshetwar/stage"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-white/10 rounded-lg transition-colors text-sm text-gray-300 hover:text-white"
          aria-label="GitHub repository"
        >
          <FaGithub className="h-5 w-5" />
          {!isLoading && stars !== null && (
            <span className="text-sm font-medium flex items-center gap-1">
              <span>★</span>
              <AnimatedCounter value={stars} />
            </span>
          )}
        </Link>
        <Link
            href="https://x.com/code_kartik"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-accent rounded-lg transition-colors touch-manipulation text-muted-foreground hover:text-foreground group"
            aria-label="X (Twitter) profile"
          >
            <SiX className="h-5 w-5 text-current" />
          </Link>
      <Button label="Try Editor" />
      </div>
    </div>
  );
};

export default Navbar;