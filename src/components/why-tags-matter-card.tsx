import SpotlightCard from './ui/spot-light-card'

const WhyTagsMatterCard = () => {
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
    <div className='my-10 relative'>
            <div className='bg-gradient-to-r from-[#0000B6]/20 via-black to-[#0000B6]/20 h-full w-full absolute top-0 left-0 rounded-3xl'/>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.2)">
        <h2 className='mb-8 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tighter text-white text-center'>
          Why YouTube Tags Matter
        </h2>
        <p className='mb-8 text-base lg:text-lg tracking-tighter text-white text-center'>
          While YouTube’s algorithm has evolved, tags still play a key role in video discovery.
          <br />
          They help:
        </p>
        <ul className="space-y-2 justify-self-center text-base md:text-lg text-white">
          <ListItem text="Improve search rankings by optimizing for relevant keywords." />
          <ListItem text="Increase visibility in related videos and YouTube recommendations." />
          <ListItem text="Provide essential context to YouTube’s content classification system." />
          <ListItem text="Make your videos more discoverable to your target audience." />
        </ul>
      </SpotlightCard>
    </div>
  )
}

export default WhyTagsMatterCard