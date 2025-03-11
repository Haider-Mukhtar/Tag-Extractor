import SpotlightCard from './ui/spot-light-card'

const SEOBestPracticesCard = () => {
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
    <div className='my-10 relative borde'>
      <div className='bg-gradient-to-r from-[#0000B6]/20 via-black to-[#0000B6]/20 h-full w-full absolute top-0 left-0 rounded-3xl'/>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.2)">
        <h2 className='mb-8 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tighter text-white text-center'>
          YouTube SEO Best Practices
        </h2>
        <p className='mb-8 text-base lg:text-lg text-white text-center'>
          Tags are essential for improving your video’s visibility and reaching the right audience.
          <br />
          Follow these best practices to optimize your tags effectively:
        </p>
        <ul className="space-y-2 justify-self-center text-base md:text-lg text-white">
          <ListItem text="Use highly relevant and specific tags that describe your content accurately." />
          <ListItem text="Combine broad keywords with niche-specific terms for better discoverability." />
          <ListItem text="Place the most important keywords at the beginning of your tag list." />
          <ListItem text="Include common misspellings or variations of relevant search terms." />
          <ListItem text="Use 10-15 well-researched tags for the best SEO results." />
        </ul>
      </SpotlightCard>
    </div>
  )
}

export default SEOBestPracticesCard