import { Metadata } from 'next';
import { EUROPEAN_BRANDS } from '@/lib/constants/brands';
import BrandMarquee from '@/app/brands/BrandMarquee';
import Hero from '@/components/sections/hero';
import { SuperLuxury } from '@/components/sections/superluxury';
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Euro Motors - Your trusted European auto service specialist',
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Brand Marquee - Wrap in Suspense boundary */}
      <section className="bg-neutral-100 px-4 py-16">
        <BrandMarquee />
      </section>

      {/* Brands We Service */}
      <SuperLuxury />
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
                <div className="aspect-square relative mb-4 animate-pulse rounded-md bg-neutral-200">
                  {/* Logo placeholder - will be replaced with actual logos */}
                </div>
                <h3 className="text-center text-lg font-medium">{brand.name}</h3>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {brand.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-dark-gray"
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
          <h2 className="mb-12 text-center text-3xl font-bold">Our Expertise</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {['Performance Tuning', 'Luxury Modifications', 'Maintenance'].map((service) => (
              <div
                key={service}
                className="rounded-lg bg-neutral-100 p-8 transition-colors hover:bg-neutral-200"
              >
                <div className="mb-6 h-48 animate-pulse rounded-md bg-neutral-200">
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
