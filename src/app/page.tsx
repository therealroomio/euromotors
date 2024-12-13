import { Metadata } from 'next';
import { EUROPEAN_BRANDS } from '@/lib/constants/brands';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import GradualSpacing from '@/components/ui/gradual-spacing';
import BrandMarquee from '@/app/brands/BrandMarquee';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Euro Motors - Your trusted European auto service specialist',
};

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-primary-foreground text-white">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark-gray/30 to-dark-gray/10" />
        <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
          <GradualSpacing
            text="European Auto Excellence"
            className="mb-6 text-4xl font-bold font-display md:text-6xl md:leading-[5rem] -tracking-widest "
            framerProps={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />
          <GradualSpacing
            text="Specialized service and performance tuning for luxury European vehicles"
            className="mb-8 text-xl text-light-gray font-display md:text-2xl md:leading-[5rem] -tracking-widest"
            delayMultiple={0.02}
            framerProps={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />
          <div className="flex gap-4 justify-center">
            <ShimmerButton
              shimmerColor="rgba(228, 228, 228, 0.4)"
              background="#FFFFFF"
              className="font-medium text-[#10141A] hover:scale-105"
            >
              Our Services
            </ShimmerButton>
            <ShimmerButton
              shimmerColor="rgba(255, 255, 255, 0.1)"
              background="rgba(0, 0, 0, 0)"
              className="font-medium border border-white/20 hover:scale-105"
            >
              Contact Us
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Brand Marquee - Wrap in Suspense boundary */}
      <section className="bg-neutral-100 px-4 py-16">
        <BrandMarquee />
      </section>

      {/* Add loading optimization for images */}
      <section className="bg-neutral-100 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Brands We Service</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {EUROPEAN_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="relative mb-4 rounded-md animate-pulse aspect-square bg-neutral-200">
                  {/* Logo placeholder - will be replaced with actual logos */}
                </div>
                <h3 className="text-lg font-medium text-center">{brand.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {brand.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 text-xs rounded-full bg-neutral-100 text-dark-gray"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Consider moving to a separate component */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center">Our Expertise</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {['Performance Tuning', 'Luxury Modifications', 'Maintenance'].map((service) => (
              <div
                key={service}
                className="p-8 rounded-lg transition-colors bg-neutral-100 hover:bg-neutral-200"
              >
                <div className="mb-6 h-48 rounded-md animate-pulse bg-neutral-200">
                  {/* Service image placeholder */}
                </div>
                <h3 className="mb-4 text-xl font-medium">{service}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
