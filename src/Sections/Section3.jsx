'use client'

import { texts } from '@/lib/texts'
import '@/styles/Section3.modules.scss'
import { useState, useEffect } from 'react'

const blocks = texts.Section3.blocks
const title = texts.Section3.title
export default function Section3({ lg }) {
  const [isScrolling, setIsScrollint] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const handleScroll2 = () => {
      const elementPosition = document
        .getElementById('processDev')
        .getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (elementPosition.top < windowHeight * 0.8) {
        setIsAnimated(true)
      } else {
        setIsAnimated(false)
      }
    }

    let timeout
    const handleScroll = () => {
      setIsScrollint(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsScrollint(false)
      }, 100)
    }
    window.addEventListener('scroll', handleScroll2)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className='Section3'>
      <div className=''>
        <div id='processDev' className='Title'>
          {title[lg]}
        </div>
        <div className={`Blocks Blocks_scalling_${isScrolling}`}>
          {blocks.map((block, index) => {
            const is_eval = index % 2 === 0
            const side = index % 2 ? 'right' : 'left'
            return (
              <div
                key={index}
                className={`
                                Block 
                                Block_side_${side}_index_${index}    
                                Block_side_${side}_index_${index}_animation_${isAnimated}
                                `}>
                <div className='Block-TitleBlock'>
                  <div className='Block-TitleBlock-Square'>{index + 1}</div>
                  <div
                    className={`
                                        Block-TitleBlock-Title 
                                        Block-TitleBlock-Title_eval_${is_eval}
                                    `}>
                    {block.title[lg]}
                  </div>
                </div>
                <div className='Block-Content'>{block.content[lg]}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
