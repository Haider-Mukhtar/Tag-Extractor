import IntroBadge from '../components/intro-badge';
import { NavBar } from '../components/navbar';
import { Cover } from '../components/ui/cover';

const Home = () => {
  return (
    <>
      <NavBar />
      <IntroBadge />
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white text-center my-10">
        Boost Your Video SEO Instantly
        <br />
        <Cover>YouTube Tag Extractor</Cover>
      </h1>
    </>
  );
};

export default Home;