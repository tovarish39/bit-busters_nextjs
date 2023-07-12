'use client'

import { InView } from 'react-intersection-observer'
import { texts } from '@/lib/texts'
import '@/styles/Section4.modules.scss'

const slogan = texts.Section4.slogan

export default function Section4() {
  return (
    <div className='Section4'>
      <div className='Block'>
        <InView>
          {({ inView, ref, entry }) => (
            <>
              <div className='Block-Title'>{slogan}</div>
              <img
                src='/images/left-hand.png'
                alt=''
                className={`
                                Block-LeftHand 
                                ${inView && 'Block-LeftHand_visible'}
                            `}
              />
              <img
                ref={ref}
                alt=''
                src='/images/right-hand.png'
                className={`
                                Block-RightHand 
                                ${inView && 'Block-RightHand_visible'}
                            `}
              />
            </>
          )}
        </InView>
      </div>
    </div>
  )
}
