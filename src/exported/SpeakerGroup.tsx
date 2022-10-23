import IconSpeakerGroupFill0Wght100Grad0Opsz48 from '../components/SpeakerGroupFill0Wght100Grad0Opsz48'
import IconSpeakerGroupFill0Wght200Grad0Opsz48 from '../components/SpeakerGroupFill0Wght200Grad0Opsz48'
import IconSpeakerGroupFill0Wght300Grad0Opsz48 from '../components/SpeakerGroupFill0Wght300Grad0Opsz48'
import IconSpeakerGroupFill0Wght400Grad0Opsz48 from '../components/SpeakerGroupFill0Wght400Grad0Opsz48'
import IconSpeakerGroupFill0Wght500Grad0Opsz48 from '../components/SpeakerGroupFill0Wght500Grad0Opsz48'
import IconSpeakerGroupFill0Wght600Grad0Opsz48 from '../components/SpeakerGroupFill0Wght600Grad0Opsz48'
import IconSpeakerGroupFill0Wght700Grad0Opsz48 from '../components/SpeakerGroupFill0Wght700Grad0Opsz48'
import IconSpeakerGroupFill1Wght100Grad0Opsz48 from '../components/SpeakerGroupFill1Wght100Grad0Opsz48'
import IconSpeakerGroupFill1Wght200Grad0Opsz48 from '../components/SpeakerGroupFill1Wght200Grad0Opsz48'
import IconSpeakerGroupFill1Wght300Grad0Opsz48 from '../components/SpeakerGroupFill1Wght300Grad0Opsz48'
import IconSpeakerGroupFill1Wght400Grad0Opsz48 from '../components/SpeakerGroupFill1Wght400Grad0Opsz48'
import IconSpeakerGroupFill1Wght500Grad0Opsz48 from '../components/SpeakerGroupFill1Wght500Grad0Opsz48'
import IconSpeakerGroupFill1Wght600Grad0Opsz48 from '../components/SpeakerGroupFill1Wght600Grad0Opsz48'
import IconSpeakerGroupFill1Wght700Grad0Opsz48 from '../components/SpeakerGroupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpeakerGroup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpeakerGroupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpeakerGroupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpeakerGroupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpeakerGroupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpeakerGroupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpeakerGroupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpeakerGroupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpeakerGroupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpeakerGroupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpeakerGroupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpeakerGroupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpeakerGroupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpeakerGroupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpeakerGroupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
