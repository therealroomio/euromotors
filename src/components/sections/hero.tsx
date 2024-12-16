'use client';

import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="animate-blob1 absolute -left-20 top-0 h-[600px] w-[600px] rounded-[40%_60%_70%_30%] bg-[radial-gradient(circle_at_center,rgba(228,228,228,0.8)_40%,transparent_50%)] mix-blend-plus-lighter blur-3xl" />
        <div className="animate-blob2 absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-[60%_40%_30%_70%] bg-[radial-gradient(circle_at_center,rgba(245,245,245,0.9)_0%,transparent_50%)] mix-blend-plus-lighter blur-3xl" />
        <div className="animate-blob3 absolute bottom-0 left-1/3 h-[550px] w-[550px] rounded-[40%_60%_60%_40%] bg-[radial-gradient(circle_at_center,rgba(230,230,230,0.85)_10%,transparent_50%)] mix-blend-plus-lighter blur-3xl" />
        <div className="animate-blob4 absolute left-1/4 top-1/4 h-[450px] w-[450px] rounded-[45%_55%_65%_35%] bg-[radial-gradient(circle_at_center,rgba(228,228,228,0.75)_30%,transparent_60%)] mix-blend-plus-lighter blur-3xl" />
        <div className="animate-blob5 absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-[55%_45%_40%_60%] bg-[radial-gradient(circle_at_center,rgba(245,245,245,0.7)_20%,transparent_55%)] mix-blend-plus-lighter blur-3xl" />
        <div className="animate-blob6 top-1/6 absolute right-1/3 h-[350px] w-[350px] rounded-[50%_50%_45%_55%] bg-[radial-gradient(circle_at_center,rgba(230,230,230,0.8)_25%,transparent_65%)] mix-blend-plus-lighter blur-3xl" />
      </div>

      <div className="container relative mx-auto flex h-screen items-center justify-center px-4">
        ``
        <BlurFade
          inView
          delay={0.25}
          duration={1}
          yOffset={20}
          blur="50px"
          className="relative w-full max-w-4xl"
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
