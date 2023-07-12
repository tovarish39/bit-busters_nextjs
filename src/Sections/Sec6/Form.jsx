import { useState, useContext } from 'react'
import { texts } from '@/lib/texts'
// import emailjs from '@emailjs/browser';

const text = texts.Section6.form

export default function Form({ lg }) {
  const [checked, setChecked] = useState(false)
  const [formState, setFormState] = useState({})

  const sendEmail = (e) => {
    e.preventDefault()
    // emailjs
    //   .sendForm(
    //     'service_gbrwdnb',
    //     'template_nmeyier',
    //     formState,
    //     'eARrDbjbAR95ZVZRU'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <form className='Form'>
      <input
        className='Form-Input'
        type='text'
        placeholder={text.phone[lg]}
        name='phone'
        value={formState.phone || ''}
        onChange={handleChange}
      />
      <input
        className='Form-Input'
        type='text'
        placeholder={text.eMail[lg]}
        name='eMail'
        value={formState.eMail || ''}
        onChange={handleChange}
      />

      <input
        className='Form-Input'
        type='text'
        placeholder={text.telegram[lg]}
        name='telegram'
        value={formState.telegram || ''}
        onChange={handleChange}
      />

      <div className='Form-Checkbox' onClick={() => setChecked(!checked)}>
        <img
          className={`Form-Checkbox-CheckedImg Form-Checkbox-CheckedImg_${checked}`}
          src='/images/checked-checkbox.png'
          alt=''
        />
        <div className='Form-Checkbox-Container'></div>
        <span className='Form-Checkbox-Label'>{text.consentData[lg]}</span>
      </div>

      <div className='Form-Submit' onClick={sendEmail}>
        <div className='Form-Submit-Text'>{text.send[lg]}</div>
        <img className='Form-Submit-Img' src='/images/стрелочка.png' alt='' />
      </div>
    </form>
  )
}
