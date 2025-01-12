'use client';

import { memo } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import { EUROPEAN_BRANDS } from '@/lib/constants';

type Brand = (typeof EUROPEAN_BRANDS)[number];

const BrandCard = memo(function BrandCard({ logo, name, specialties }: Brand) {
  return (
    <figure
      className={cn(
        'relative flex flex-col items-center justify-center space-y-3 rounded-2xl border',
        'bg-white/5 p-6 backdrop-blur-sm transition-all duration-300',
        'hover:scale-105 hover:bg-white/10',
        'group'
      )}
    >
      <div className="relative h-12 w-32">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 128px) 100vw, 128px"
          loading="eager"
        />
      </div>
      <figcaption className="text-center">
        <div className="text-lg font-semibold text-black">{name}</div>
        <div className="mt-1 text-sm text-foreground">{specialties[0]}</div>
      </figcaption>
    </figure>
  );
});

const splitArrayInHalf = <T,>(array: ReadonlyArray<T>): [T[], T[]] => {
  const mid = Math.ceil(array.length / 2);
  return [Array.from(array.slice(0, mid)), Array.from(array.slice(mid))];
};

export default function BrandMarquee() {
  const [firstHalf, secondHalf] = splitArrayInHalf<Brand>(EUROPEAN_BRANDS);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      {[firstHalf, secondHalf].map((brands, i) => (
        <Marquee key={i} pauseOnHover className="[--duration:40s]" reverse={i === 1}>
          {brands.map((brand: Brand) => (
            <div key={brand.name} className="">
              <BrandCard {...brand} />
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  );
}
