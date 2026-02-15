import Hero from "./Hero";
import BrandTicker from "./BrandTicker";
import FeaturedCollections from "./FeaturedCollections";
import Stats from "./Stats";
import Craftsmanship from "./Craftsmanship";
import Heritage from "./Heritage";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import {
  brands,
  featuredWatches,
  features,
  stats,
  testimonials,
} from "../../data";

export const LuxuryLanding = () => {
  return (
    <>
      <Hero />
      <BrandTicker brands={brands} />
      <FeaturedCollections featuredWatches={featuredWatches} />
      <Stats stats={stats} />
      <Craftsmanship features={features} />
      <Heritage />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
      <Contact />
    </>
  );
};
