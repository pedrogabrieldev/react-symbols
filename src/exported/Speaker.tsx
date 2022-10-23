import IconSpeakerFill0Wght100Grad0Opsz48 from '../components/SpeakerFill0Wght100Grad0Opsz48'
import IconSpeakerFill0Wght200Grad0Opsz48 from '../components/SpeakerFill0Wght200Grad0Opsz48'
import IconSpeakerFill0Wght300Grad0Opsz48 from '../components/SpeakerFill0Wght300Grad0Opsz48'
import IconSpeakerFill0Wght400Grad0Opsz48 from '../components/SpeakerFill0Wght400Grad0Opsz48'
import IconSpeakerFill0Wght500Grad0Opsz48 from '../components/SpeakerFill0Wght500Grad0Opsz48'
import IconSpeakerFill0Wght600Grad0Opsz48 from '../components/SpeakerFill0Wght600Grad0Opsz48'
import IconSpeakerFill0Wght700Grad0Opsz48 from '../components/SpeakerFill0Wght700Grad0Opsz48'
import IconSpeakerFill1Wght100Grad0Opsz48 from '../components/SpeakerFill1Wght100Grad0Opsz48'
import IconSpeakerFill1Wght200Grad0Opsz48 from '../components/SpeakerFill1Wght200Grad0Opsz48'
import IconSpeakerFill1Wght300Grad0Opsz48 from '../components/SpeakerFill1Wght300Grad0Opsz48'
import IconSpeakerFill1Wght400Grad0Opsz48 from '../components/SpeakerFill1Wght400Grad0Opsz48'
import IconSpeakerFill1Wght500Grad0Opsz48 from '../components/SpeakerFill1Wght500Grad0Opsz48'
import IconSpeakerFill1Wght600Grad0Opsz48 from '../components/SpeakerFill1Wght600Grad0Opsz48'
import IconSpeakerFill1Wght700Grad0Opsz48 from '../components/SpeakerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpeaker = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpeakerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpeakerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpeakerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpeakerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpeakerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpeakerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpeakerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpeakerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpeakerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpeakerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpeakerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpeakerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpeakerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpeakerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
