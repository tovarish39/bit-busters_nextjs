'use client'

import Form from './Sec6/Form'
import Badge from './Sec6/Badge'
import Footer from './Sec6/Footer'
import '@/styles/Section6.modules.scss'

export default function Section6({ lg }) {
  return (
    <div className='Section6'>
      <div className='WrapFormBadge'>
        <Badge lg={lg} />
        <Form lg={lg} />
      </div>
      <Footer lg={lg} />
    </div>
  )
}
