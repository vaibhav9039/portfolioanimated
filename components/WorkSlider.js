// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Portfolio',
          path: '/thumb1.jpg',
          url: 'https://vaibhavportfoliok.netlify.app/',
        },
        {
          title: 'Crowdfunding Platform',
          path: '/thumb2.jpg',
          url: 'https://crowdfunding-crypto.netlify.app/',
        },
        {
          title: 'Crpto Tracker',
          path: '/thumb3.jpg',
          url: 'https://crypto-hunter.netlify.app/',
        },
        {
          title: 'VideoChat App',
          path: '/thumb4.jpg',
          url: 'https://videochatopp.netlify.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Image Generation App',
          path: '/thumb4.jpg',
          url: 'https://dall-e-imagegenerator.netlify.app/',
        },
        {
          title: 'Dashboard Template',
          path: '/thumb1.jpg',
          url: 'https://vaibhav-dashboard.netlify.app/',
        },
        {
          title: 'Meme Generator',
          path: '/thumb2.jpg',
          url: 'https://vaibhav9039.github.io/Meme-generator/',
        },
        {
          title: 'Ether Transaction App',
          path: '/thumb3.jpg',
          url: 'https://web30ether.netlify.app/',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import {
  BsArrowRight
} from 'react-icons/bs'

import { Pagination } from 'swiper'
import Image from 'next/image';
// data


const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {
        workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                      <a href={image.url} className="block w-full h-full">
                        <div className='flex items-center justify-center realtive overflow-hidden group'>
                          <Image src={image.path} width={500} height={300} alt='' />
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                          <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              <div className='delay-100'>LIVE</div>
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Projects</div>
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default WorkSlider;

