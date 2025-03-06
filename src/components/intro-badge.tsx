import { ArrowRight } from 'lucide-react'
import { AnimatedShinyText } from './ui/animated-shiny-text'
import { cn } from '../lib/utils'

const IntroBadge = () => {
  return (
    <div className="z-10 flex items-center justify-center mt-20">
    <div
      className={cn(
        "group rounded-full border border-white/50 bg-transparent text-base text-white transition-all ease-in hover:cursor-pointer",
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white/90 hover:text-white hover:duration-300">
        <span>✨ Introducing Tag Extractor</span>
        <ArrowRight className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </div>
  </div>
  )
}

export default IntroBadge