import Footer from '../components/footer';
import IntroBadge from '../components/intro-badge';
import { NavBar } from '../components/navbar';
import SEOBestPracticesCard from '../components/seo-best-practices-card';
import StepsToUseCard from '../components/steps-to-use-card';
import { Cover } from '../components/ui/cover';
import WhyTagsMatterCard from '../components/why-tags-matter-card';

const Home = () => {
  return (
    <>
      <NavBar />
      <IntroBadge />
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white text-center my-10">
        Boost Your Video SEO Instantly
        <br />
        <Cover>YouTube Tag Extractor</Cover>
      </h1>
      <StepsToUseCard />
      <SEOBestPracticesCard />
      <WhyTagsMatterCard />
      <Footer />
    </>
  );
};

export default Home;