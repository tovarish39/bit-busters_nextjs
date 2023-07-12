import { texts } from '@/lib/texts'

const text = texts.Section6.badge

export default function Badge({ lg }) {
  return (
    <div className='Badge'>
      <div className='Badge-Title'>{text.title[lg]}</div>

      <div className='Badge-Contacts'>
        <div className='Badge-Contacts-Key'>{text.telegram.title[lg]}</div>
        <div className='Badge-Contacts-Value'>{text.telegram.value}</div>
      </div>

      <div className='Badge-Contacts'>
        <div className='Badge-Contacts-Key'>{text.eMail.title[lg]}</div>
        <div className='Badge-Contacts-Value'>
          <a href={`mailto:${text.eMail.value}`} target='_blank'>
            {text.eMail.value}
          </a>
        </div>
      </div>

      <div className='Badge-Contacts'>
        <div className='Badge-Contacts-Key'>{text.phone.title[lg]}</div>
        <div className='Badge-Contacts-Value'>
          <a href='tel:+79959266192' target='_blank'>
            {text.phone.value}
          </a>
        </div>
      </div>

      <div id='contact'></div>

      <div className='Badge-Footer'>
        <p>{text.footer.line1[lg]}</p>
        <p>{text.footer.line2[lg]}</p>
      </div>
    </div>
  )
}
