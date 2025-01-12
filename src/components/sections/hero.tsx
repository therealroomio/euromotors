'use client';

import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary">
      <div className="container relative mx-auto flex h-screen items-center justify-center px-4">
        <BlurFade
          inView
          delay={0.25}
          duration={1}
          yOffset={20}
          blur="50px"
          className="relative w-full"
        >
          <Image
            src="/images/porsche-model.png"
            width={1500}
            height={700}
            alt="Porsche 911 Targa"
            className="h-auto w-full"
            priority
          />
        </BlurFade>
      </div>
    </section>
  );
}
