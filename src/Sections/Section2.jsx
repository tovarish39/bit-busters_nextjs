import { texts } from '@/lib/texts'
import '@/styles/Section2.modules.scss'

const text = texts.Section2

export default function Section2({ lg }) {
  return (
    <div className='Section2'>
      <img
        src='/images/desktop.png'
        className='ImgDesktop'
        alt=''
      />
      <div className='WrapContent'>
        <div id='aboutUs' />

        <div className='Title Title1'>{text.title.aboutUs[lg]}</div>

        <div className='Title Title2'>{text.title.whoWe[lg]}</div>

        <div className='WrapImgAndBlocks'>
          <img
            src='/images/TV.png'
            className='ImgTV'
            alt=''
          />
          <div className='WrapBlocks'>
            {text.blocks.map((block, index) => (
              <div
                key={index}
                className={`Block Block_${index}`}>
                <div className={`Block-Title Block-Title_${index}`}>
                  {block.title[lg]}
                </div>
                <div
                  className='Block-Content'
                  dangerouslySetInnerHTML={{ __html: block.content[lg] }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
