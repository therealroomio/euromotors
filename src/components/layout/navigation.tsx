'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShimmerButton from '@/components/ui/shimmer-button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 px-4 py-4 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-white/5 shadow-sm backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-full items-center justify-between px-10">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/euro-motors-logo.svg"
              alt="Euro Motors Logo"
              width={105}
              height={44}
              quality={100}
              priority
            />
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            <Link href="/models" className="text-[#10141A] transition-opacity hover:opacity-70">
              Models
            </Link>
            <Link href="/services" className="text-[#10141A] transition-opacity hover:opacity-70">
              Services
            </Link>
            <Link href="/expirience" className="text-[#10141A] transition-opacity hover:opacity-70">
              Expirience
            </Link>
            <Link href="/shop" className="text-[#10141A] transition-opacity hover:opacity-70">
              Shop
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 transition-colors hover:bg-neutral-100">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <ShimmerButton className="bg-[#10141A] text-white">Contact Dealer</ShimmerButton>
          <button className="rounded-full p-2 transition-colors hover:bg-neutral-100">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
