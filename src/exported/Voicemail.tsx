import IconVoicemailFill0Wght100Grad0Opsz48 from '../components/VoicemailFill0Wght100Grad0Opsz48'
import IconVoicemailFill0Wght200Grad0Opsz48 from '../components/VoicemailFill0Wght200Grad0Opsz48'
import IconVoicemailFill0Wght300Grad0Opsz48 from '../components/VoicemailFill0Wght300Grad0Opsz48'
import IconVoicemailFill0Wght400Grad0Opsz48 from '../components/VoicemailFill0Wght400Grad0Opsz48'
import IconVoicemailFill0Wght500Grad0Opsz48 from '../components/VoicemailFill0Wght500Grad0Opsz48'
import IconVoicemailFill0Wght600Grad0Opsz48 from '../components/VoicemailFill0Wght600Grad0Opsz48'
import IconVoicemailFill0Wght700Grad0Opsz48 from '../components/VoicemailFill0Wght700Grad0Opsz48'
import IconVoicemailFill1Wght100Grad0Opsz48 from '../components/VoicemailFill1Wght100Grad0Opsz48'
import IconVoicemailFill1Wght200Grad0Opsz48 from '../components/VoicemailFill1Wght200Grad0Opsz48'
import IconVoicemailFill1Wght300Grad0Opsz48 from '../components/VoicemailFill1Wght300Grad0Opsz48'
import IconVoicemailFill1Wght400Grad0Opsz48 from '../components/VoicemailFill1Wght400Grad0Opsz48'
import IconVoicemailFill1Wght500Grad0Opsz48 from '../components/VoicemailFill1Wght500Grad0Opsz48'
import IconVoicemailFill1Wght600Grad0Opsz48 from '../components/VoicemailFill1Wght600Grad0Opsz48'
import IconVoicemailFill1Wght700Grad0Opsz48 from '../components/VoicemailFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVoicemail = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVoicemailFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVoicemailFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVoicemailFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVoicemailFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVoicemailFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVoicemailFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVoicemailFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVoicemailFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVoicemailFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVoicemailFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVoicemailFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVoicemailFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVoicemailFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVoicemailFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
