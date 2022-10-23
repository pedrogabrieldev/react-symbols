import IconAutoDetectVoiceFill0Wght100Grad0Opsz48 from '../components/AutoDetectVoiceFill0Wght100Grad0Opsz48'
import IconAutoDetectVoiceFill0Wght200Grad0Opsz48 from '../components/AutoDetectVoiceFill0Wght200Grad0Opsz48'
import IconAutoDetectVoiceFill0Wght300Grad0Opsz48 from '../components/AutoDetectVoiceFill0Wght300Grad0Opsz48'
import IconAutoDetectVoiceFill0Wght400Grad0Opsz48 from '../components/AutoDetectVoiceFill0Wght400Grad0Opsz48'
import IconAutoDetectVoiceFill0Wght500Grad0Opsz48 from '../components/AutoDetectVoiceFill0Wght500Grad0Opsz48'
import IconAutoDetectVoiceFill0Wght600Grad0Opsz48 from '../components/AutoDetectVoiceFill0Wght600Grad0Opsz48'
import IconAutoDetectVoiceFill0Wght700Grad0Opsz48 from '../components/AutoDetectVoiceFill0Wght700Grad0Opsz48'
import IconAutoDetectVoiceFill1Wght100Grad0Opsz48 from '../components/AutoDetectVoiceFill1Wght100Grad0Opsz48'
import IconAutoDetectVoiceFill1Wght200Grad0Opsz48 from '../components/AutoDetectVoiceFill1Wght200Grad0Opsz48'
import IconAutoDetectVoiceFill1Wght300Grad0Opsz48 from '../components/AutoDetectVoiceFill1Wght300Grad0Opsz48'
import IconAutoDetectVoiceFill1Wght400Grad0Opsz48 from '../components/AutoDetectVoiceFill1Wght400Grad0Opsz48'
import IconAutoDetectVoiceFill1Wght500Grad0Opsz48 from '../components/AutoDetectVoiceFill1Wght500Grad0Opsz48'
import IconAutoDetectVoiceFill1Wght600Grad0Opsz48 from '../components/AutoDetectVoiceFill1Wght600Grad0Opsz48'
import IconAutoDetectVoiceFill1Wght700Grad0Opsz48 from '../components/AutoDetectVoiceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoDetectVoice = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoDetectVoiceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoDetectVoiceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoDetectVoiceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoDetectVoiceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoDetectVoiceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoDetectVoiceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoDetectVoiceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoDetectVoiceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoDetectVoiceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoDetectVoiceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoDetectVoiceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoDetectVoiceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoDetectVoiceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoDetectVoiceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
