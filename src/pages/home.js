import { CallToAction } from "components/common/CallToAction";
import { Faqs } from "components/common/Faqs";
import { Footer } from "components/common/Footer";
import { Header } from "components/common/Header";
import { Hero } from "components/common/Hero";
import { Pricing } from "components/common/Pricing";
import { PrimaryFeatures } from "components/common/PrimaryFeatures";
import { SecondaryFeatures } from "components/common/SecondaryFeatures";
import { Testimonials } from "components/common/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
