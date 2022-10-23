import IconSoundDetectionGlassBreakFill0Wght100Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill0Wght100Grad0Opsz48'
import IconSoundDetectionGlassBreakFill0Wght200Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill0Wght200Grad0Opsz48'
import IconSoundDetectionGlassBreakFill0Wght300Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill0Wght300Grad0Opsz48'
import IconSoundDetectionGlassBreakFill0Wght400Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill0Wght400Grad0Opsz48'
import IconSoundDetectionGlassBreakFill0Wght500Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill0Wght500Grad0Opsz48'
import IconSoundDetectionGlassBreakFill0Wght600Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill0Wght600Grad0Opsz48'
import IconSoundDetectionGlassBreakFill0Wght700Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill0Wght700Grad0Opsz48'
import IconSoundDetectionGlassBreakFill1Wght100Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill1Wght100Grad0Opsz48'
import IconSoundDetectionGlassBreakFill1Wght200Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill1Wght200Grad0Opsz48'
import IconSoundDetectionGlassBreakFill1Wght300Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill1Wght300Grad0Opsz48'
import IconSoundDetectionGlassBreakFill1Wght400Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill1Wght400Grad0Opsz48'
import IconSoundDetectionGlassBreakFill1Wght500Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill1Wght500Grad0Opsz48'
import IconSoundDetectionGlassBreakFill1Wght600Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill1Wght600Grad0Opsz48'
import IconSoundDetectionGlassBreakFill1Wght700Grad0Opsz48 from '../components/SoundDetectionGlassBreakFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSoundDetectionGlassBreak = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSoundDetectionGlassBreakFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSoundDetectionGlassBreakFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSoundDetectionGlassBreakFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSoundDetectionGlassBreakFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSoundDetectionGlassBreakFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSoundDetectionGlassBreakFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSoundDetectionGlassBreakFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSoundDetectionGlassBreakFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSoundDetectionGlassBreakFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSoundDetectionGlassBreakFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSoundDetectionGlassBreakFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSoundDetectionGlassBreakFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSoundDetectionGlassBreakFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSoundDetectionGlassBreakFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
