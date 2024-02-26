import Link from 'next/link'

import { RiInstagramLine, RiTwitterLine, RiLinkedinLine, RiGithubLine, RiCodeBoxLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/kushwahavaibhav/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/vaibhav9039'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.instagram.com/vaibhav_0959/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://leetcode.com/vaibhavkushwahaq345/'} className='hover:text-accent transition-all duration-300'>
        <RiCodeBoxLine />
      </Link>
      <Link href={'https://twitter.com/VaibhavKus31470'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Socials;
