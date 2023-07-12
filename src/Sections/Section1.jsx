'use client'

import { texts } from '@/lib/texts.js'
import Link from 'next/link'
import s from '@/styles/Section1.module.scss'

const links2 = texts.Section5.data.slice(0, 2)
const links3 = texts.Section5.data.slice(2, texts.Section5.data.length)
const text = texts.Section1

export default function Section1({ lg }) {
  const line1 = [text.aboutUs, text.processDev, text.whatCanWeDo, text.contact]
  const line2 = [links2[0], links2[1]]
  const line3 = [links3[0], links3[1], links3[2]]

  function handleClickLinkWhatCanWeDo(e) {
    const localLinkIndex = Number(e.currentTarget.id)
    const remoteLinks = document.querySelectorAll('.swiper-pagination-bullet')
    const remoteTargerLink = remoteLinks[localLinkIndex]
    remoteTargerLink.click()
  }
  return (
    <div className={`${s.Section1}`}>
      <div className={`${s.Line} ${s.LineFirst}`}>
        {line1.map((link, index) => (
          <Link
            href={`#${link.to}`}
            key={index}
            className={`
              ${s.Line_Link}
              ${`${s.LineFirst_Link__fontSize}__${lg}`}
              ${index === 3 && s.LineFirst_Link__last}`}>
            {link[lg]}
          </Link>
        ))}
      </div>

      <img className={s.Logo} src='/images/logo.png' alt='logo' />

      <div className={`${s.Contact}`}>
        <Link href={`#${text.contact.to}`}>{text.contact[lg]}</Link>
      </div>

      <div className={`${s.Line} ${s.LineSecond}`}>
        {line2.map((link, index) => (
          <Link
            href='#whatCanWeDo'
            key={index}
            id={link.index}
            onClick={handleClickLinkWhatCanWeDo}
            className={`
              ${s.Line_Link}
              ${index === 0 && s.Line_Link__purple}
            `}>
            {link.linkSection2[lg]}
          </Link>
        ))}
      </div>

      <div className={`${s.Line} ${s.LineThird}`}>
        {line3.map((link, index) => (
          <Link
            key={index}
            href='#whatCanWeDo'
            id={link.index}
            onClick={handleClickLinkWhatCanWeDo}
            className={`
              ${s.Line_Link}
              ${index === 1 && s.Line_Link__purple}
            `}>
            {link.linkSection2[lg]}
          </Link>
        ))}
      </div>
    </div>
  )
}
