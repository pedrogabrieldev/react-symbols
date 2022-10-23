import IconVoiceOverOffFill0Wght100Grad0Opsz48 from '../components/VoiceOverOffFill0Wght100Grad0Opsz48'
import IconVoiceOverOffFill0Wght200Grad0Opsz48 from '../components/VoiceOverOffFill0Wght200Grad0Opsz48'
import IconVoiceOverOffFill0Wght300Grad0Opsz48 from '../components/VoiceOverOffFill0Wght300Grad0Opsz48'
import IconVoiceOverOffFill0Wght400Grad0Opsz48 from '../components/VoiceOverOffFill0Wght400Grad0Opsz48'
import IconVoiceOverOffFill0Wght500Grad0Opsz48 from '../components/VoiceOverOffFill0Wght500Grad0Opsz48'
import IconVoiceOverOffFill0Wght600Grad0Opsz48 from '../components/VoiceOverOffFill0Wght600Grad0Opsz48'
import IconVoiceOverOffFill0Wght700Grad0Opsz48 from '../components/VoiceOverOffFill0Wght700Grad0Opsz48'
import IconVoiceOverOffFill1Wght100Grad0Opsz48 from '../components/VoiceOverOffFill1Wght100Grad0Opsz48'
import IconVoiceOverOffFill1Wght200Grad0Opsz48 from '../components/VoiceOverOffFill1Wght200Grad0Opsz48'
import IconVoiceOverOffFill1Wght300Grad0Opsz48 from '../components/VoiceOverOffFill1Wght300Grad0Opsz48'
import IconVoiceOverOffFill1Wght400Grad0Opsz48 from '../components/VoiceOverOffFill1Wght400Grad0Opsz48'
import IconVoiceOverOffFill1Wght500Grad0Opsz48 from '../components/VoiceOverOffFill1Wght500Grad0Opsz48'
import IconVoiceOverOffFill1Wght600Grad0Opsz48 from '../components/VoiceOverOffFill1Wght600Grad0Opsz48'
import IconVoiceOverOffFill1Wght700Grad0Opsz48 from '../components/VoiceOverOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVoiceOverOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVoiceOverOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVoiceOverOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVoiceOverOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVoiceOverOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVoiceOverOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVoiceOverOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVoiceOverOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVoiceOverOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVoiceOverOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVoiceOverOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVoiceOverOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVoiceOverOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVoiceOverOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVoiceOverOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
