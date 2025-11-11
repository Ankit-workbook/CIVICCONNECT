import Navbar from '@/components/layout/navbar';
import Hero from '@/components/home/hero';
import HowItWorksSection from '@/components/home/how-it-works-section';
import FeaturesSection from '@/components/home/features-section';
import LeadersSection from '@/components/home/leaders-section';
import RewardsSection from '@/components/home/rewards-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import Footer from '@/components/layout/footer';
import ScrollToTop from '@/components/layout/scroll-to-top';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <LeadersSection />
        <HowItWorksSection />
        <FeaturesSection />
        <RewardsSection />
        <TestimonialsSection />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  );
}
