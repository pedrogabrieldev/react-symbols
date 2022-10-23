import IconSpeakerPhoneFill0Wght100Grad0Opsz48 from '../components/SpeakerPhoneFill0Wght100Grad0Opsz48'
import IconSpeakerPhoneFill0Wght200Grad0Opsz48 from '../components/SpeakerPhoneFill0Wght200Grad0Opsz48'
import IconSpeakerPhoneFill0Wght300Grad0Opsz48 from '../components/SpeakerPhoneFill0Wght300Grad0Opsz48'
import IconSpeakerPhoneFill0Wght400Grad0Opsz48 from '../components/SpeakerPhoneFill0Wght400Grad0Opsz48'
import IconSpeakerPhoneFill0Wght500Grad0Opsz48 from '../components/SpeakerPhoneFill0Wght500Grad0Opsz48'
import IconSpeakerPhoneFill0Wght600Grad0Opsz48 from '../components/SpeakerPhoneFill0Wght600Grad0Opsz48'
import IconSpeakerPhoneFill0Wght700Grad0Opsz48 from '../components/SpeakerPhoneFill0Wght700Grad0Opsz48'
import IconSpeakerPhoneFill1Wght100Grad0Opsz48 from '../components/SpeakerPhoneFill1Wght100Grad0Opsz48'
import IconSpeakerPhoneFill1Wght200Grad0Opsz48 from '../components/SpeakerPhoneFill1Wght200Grad0Opsz48'
import IconSpeakerPhoneFill1Wght300Grad0Opsz48 from '../components/SpeakerPhoneFill1Wght300Grad0Opsz48'
import IconSpeakerPhoneFill1Wght400Grad0Opsz48 from '../components/SpeakerPhoneFill1Wght400Grad0Opsz48'
import IconSpeakerPhoneFill1Wght500Grad0Opsz48 from '../components/SpeakerPhoneFill1Wght500Grad0Opsz48'
import IconSpeakerPhoneFill1Wght600Grad0Opsz48 from '../components/SpeakerPhoneFill1Wght600Grad0Opsz48'
import IconSpeakerPhoneFill1Wght700Grad0Opsz48 from '../components/SpeakerPhoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpeakerPhone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpeakerPhoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpeakerPhoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpeakerPhoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpeakerPhoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpeakerPhoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpeakerPhoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpeakerPhoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpeakerPhoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpeakerPhoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpeakerPhoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpeakerPhoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpeakerPhoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpeakerPhoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpeakerPhoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
