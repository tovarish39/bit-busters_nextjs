import { useContext } from 'react'
import { texts } from '@/lib/texts'

const text = texts.Section6.footer

export default function Footer({ lg }) {
  return (
    <footer className='Footer'>
      <div className='Footer-Block'>{text.line1[lg]}</div>
      <div className='Footer-Block'>{text.line2[lg]}</div>
    </footer>
  )
}
