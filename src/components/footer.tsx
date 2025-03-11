import { Github, Linkedin, Twitter } from 'lucide-react';
import LOGO from '../assets/img/youtube-logo.png';
import { footerItems } from '../lib/constants';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center border-t border-white/40 py-10'>
      {/* Logo */}
      <div>
        <img className='size-16' src={LOGO} alt='logo' />
      </div>
      {/* Heading */}
      <div className=''>
        <p className='text-white font-bold text-xl'>
          TagExtractor
        </p>
      </div>
      {/* Subheading */}
      <div className='mt-2'>
        <p className='text-white text-sm text-center'>
          Your go-to tool for extracting and optimizing YouTube video tags effortlessly.
        </p>
      </div>
      {/* Links */}
      <nav className="my-6 flex flex-wrap justify-center gap-3 md:gap-6 text-white/80 text-sm">
        {
          footerItems.map((item) => (
            <Link key={item.id} to={item.url} className="hover:text-white hover:underline underline-offset-[3px]">
              {item.name}
            </Link>
          ))
        }
      </nav>
      {/* Social Links */}
      <div className='my-4 flex gap-6'>
        <a href='#' className='rounded-xl border border-white/10 hover:border-white/50 text-white bg-white/20 backdrop-blur-lg aspect-square w-12 flex justify-center items-center hover:scale-105 duration-300 drop-shadow-2xl shadow-blue-500'>
          <Twitter className='size-5' />
        </a>
        <a href='https://github.com/Haider-Mukhtar/Tag-Extractor' target='_blank' className='rounded-xl border border-white/10 hover:border-white/50 text-white bg-white/20 backdrop-blur-lg aspect-square w-12 flex justify-center items-center hover:scale-105 duration-300 drop-shadow-2xl shadow-blue-500'>
          <Github className='size-5' />
        </a>
        <a href='#' className='rounded-xl border border-white/10 hover:border-white/50 text-white bg-white/20 backdrop-blur-lg aspect-square w-12 flex justify-center items-center hover:scale-105 duration-300'>
          <Linkedin className='size-5' />
        </a>
      </div>
      {/* Rights */}
      <div className='text-white text-xs py-4'>
        © {new Date().getFullYear()} TagExtractor. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
