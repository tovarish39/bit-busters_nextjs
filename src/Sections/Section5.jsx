'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative, Keyboard, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/keyboard'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { texts } from '@/lib/texts'
import '@/styles/Section5.modules.scss'

const blocks = texts.Section5.data
const title = texts.Section5.title

export default function Section5({ lg }) {
  const paginationProps = {
    type: 'bullets',
    clickable: true,
    el: '.Titles',
    renderBullet: function (index, className) {
      const title = blocks[index].title[lg]
      return '<div class="' + className + '">' + title + '</div>'
    },
  }
  const creativeEffectProps = {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  }

  return (
    <div className='Section5'>
      <div className='HeightElement'></div>
      <div id='whatCanWeDo' className='Title'>
        {title[lg]}
      </div>

      <div className='WrapSwiper'>
        <div className='Titles'></div>

        <Swiper
          modules={[EffectCreative, Autoplay, Keyboard, Pagination]}
          pagination={{ ...paginationProps }}
          effect='creative'
          creativeEffect={{ ...creativeEffectProps }}
          keyboard={{ enabled: true }}
          grabCursor={true}
          loop
          autoplay={{ delay: 4000 }}>
          {blocks.map((block, index) => (
            <SwiperSlide key={index} className='Slide'>
              <div className='Slide-Title'>{block.title[lg]}</div>

              <div
                className='Slide-Text'
                dangerouslySetInnerHTML={{
                  __html: block.content.text[lg],
                }}></div>

              <div className='Slide-SubTitle'>{block.content.subTitle[lg]}</div>

              {block.content.points.map((point, index) => (
                <div className='Slide-Point' key={index}>
                  <div className='Slide-Point-Square'></div>
                  <div className='Slide-Point-Text'>{point.point[lg]}</div>
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
