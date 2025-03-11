import SpotlightCard from './ui/spot-light-card'

const WhyUseTagExtractorCard = () => {
  const ListItem = ({ text }: { text: string }) => {
    return (
      <li className="flex items-start gap-3">
        {/* Custom Circle Marker */}
        <div className="mt-1 rounded-xl border border-white/10 bg-white/10 backdrop-blur-lg aspect-square w-5 flex justify-center items-center shrink-0">
          <div className='w-2 bg-white/50 aspect-square rounded-full' />
        </div>
        {/* List Text */}
        <span>{text}</span>
      </li>
    );
  };

  return (
    <div className='my-10 relative w-full md:w-[80%] justify-self-center'>
      <div className='bg-gradient-to-r from-[#0000B6]/15 via-black to-[#0000B6]/15 h-full w-full absolute top-0 left-0 rounded-3xl'/>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.2)">
        <h2 className='mb-8 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tighter text-white text-center'>
          Why use YT Tags Extractor?
        </h2>
        <ul className="space-y-2 justify-self-center text-start text-base md:text-lg text-white">
          <ListItem text="Free and easy to use." />
          <ListItem text="Instant tag extraction." />
          <ListItem text="No downloads or installations required." />
          <ListItem text="Boosts YouTube SEO and ranking." />
          <ListItem text="Helps you find the best tags for your content." />
        </ul>
      </SpotlightCard>
    </div>
  )
}

export default WhyUseTagExtractorCard