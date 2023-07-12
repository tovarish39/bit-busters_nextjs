import { headers } from 'next/dist/client/components/headers'
import Section1 from '../Sections/Section1'
import Section2 from '../Sections/Section2'
import Section3 from '../Sections/Section3'
import Section4 from '../Sections/Section4'
import Section5 from '../Sections/Section5'
import Section6 from '../Sections/Section6'

export default function Page() {
  const acceptLanguageHeader = headers().get('accept-language')
  const preferredLanguage = 'ru'
  // acceptLanguageHeader && acceptLanguageHeader.split(',')[0] === 'ru'
  //   ? 'ru'
  //   : 'else'

  return (
    <>
      <Section1 lg={preferredLanguage} />
      <Section2 lg={preferredLanguage} />
      <Section3 lg={preferredLanguage} />
      <Section4 lg={preferredLanguage} />
      <Section5 lg={preferredLanguage} />
      <Section6 lg={preferredLanguage} />
    </>
  )
}
