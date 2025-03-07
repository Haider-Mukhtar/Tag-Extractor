import SpotlightCard from './ui/spot-light-card'

const StepsToUseCard = () => {
  return (
    <div className='my-10 relative'>
                  <div className='bg-gradient-to-r from-[#0000B6]/20 via-black to-[#0000B6]/20 h-full w-full absolute top-0 left-0 rounded-3xl'/>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.2)">
        <h2 className='mb-8 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tighter text-white text-center'>
          How to Use Tag Extractor
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
          {/* Step 1 */}
          <div className='flex flex-col items-center gap-4'>
            <div className='rounded-xl border border-white/10 text-white bg-white/10 backdrop-blur-lg aspect-square w-12 flex justify-center items-center font-bold text-base md:text-lg'>
              1
            </div>
            <p className='text-center text-base md:text-lg'>Copy the URL of any YouTube video you want to analyze.</p>
          </div>
          {/* Step 2 */}
          <div className='flex flex-col items-center gap-4'>
            <div className='rounded-xl border border-white/10 text-white bg-white/10 backdrop-blur-lg aspect-square w-12 flex justify-center items-center font-bold text-base md:text-lg'>
              2
            </div>
            <p className='text-center text-base md:text-lg'>Paste the URL into the input field above.</p>
          </div>
          {/* Step 3 */}
          <div className='flex flex-col items-center gap-4'>
            <div className='rounded-xl border border-white/10 text-white bg-white/10 backdrop-blur-lg aspect-square w-12 flex justify-center items-center font-bold text-base md:text-lg'>
              3
            </div>
            <p className='text-center text-base md:text-lg'>
              Click the&nbsp;
              <span className='font-semibold'>"Extract Tags"</span>
              &nbsp;button to retrieve the video’s tags.
            </p>
          </div>
          {/* Step 4 */}
          <div className='flex flex-col items-center gap-4'>
            <div className='rounded-xl border border-white/10 text-white bg-white/10 backdrop-blur-lg aspect-square w-12 flex justify-center items-center font-bold text-base md:text-lg'>
              4
            </div>
            <p className='text-center text-base md:text-lg'>
              Use the&nbsp;
              <span className='font-semibold'>"Copy All"</span>
              &nbsp;button to copy tags to your clipboard.
            </p>
          </div>
          {/* Step 5 */}
          <div className='flex flex-col items-center gap-4'>
            <div className='rounded-xl border border-white/10 text-white bg-white/10 backdrop-blur-lg aspect-square w-12 flex justify-center items-center font-bold text-base md:text-lg'>
              5
            </div>
            <p className='text-center text-base md:text-lg'>
              Click&nbsp;
              <span className='font-semibold'>"Download"</span>
              &nbsp;to save tags as a text file for future use.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </div>
  )
}

export default StepsToUseCard