import CTA from "@/components/organisms/cta";
import Features from "@/components/organisms/features";
import Footer from "@/components/organisms/footer";
import Hero from "@/components/organisms/hero";
import Testimonials from "@/components/organisms/testimonials";

export default function Page() {
  return (
    <div className="">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
