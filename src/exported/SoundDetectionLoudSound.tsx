import IconSoundDetectionLoudSoundFill0Wght100Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill0Wght100Grad0Opsz48'
import IconSoundDetectionLoudSoundFill0Wght200Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill0Wght200Grad0Opsz48'
import IconSoundDetectionLoudSoundFill0Wght300Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill0Wght300Grad0Opsz48'
import IconSoundDetectionLoudSoundFill0Wght400Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill0Wght400Grad0Opsz48'
import IconSoundDetectionLoudSoundFill0Wght500Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill0Wght500Grad0Opsz48'
import IconSoundDetectionLoudSoundFill0Wght600Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill0Wght600Grad0Opsz48'
import IconSoundDetectionLoudSoundFill0Wght700Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill0Wght700Grad0Opsz48'
import IconSoundDetectionLoudSoundFill1Wght100Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill1Wght100Grad0Opsz48'
import IconSoundDetectionLoudSoundFill1Wght200Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill1Wght200Grad0Opsz48'
import IconSoundDetectionLoudSoundFill1Wght300Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill1Wght300Grad0Opsz48'
import IconSoundDetectionLoudSoundFill1Wght400Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill1Wght400Grad0Opsz48'
import IconSoundDetectionLoudSoundFill1Wght500Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill1Wght500Grad0Opsz48'
import IconSoundDetectionLoudSoundFill1Wght600Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill1Wght600Grad0Opsz48'
import IconSoundDetectionLoudSoundFill1Wght700Grad0Opsz48 from '../components/SoundDetectionLoudSoundFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSoundDetectionLoudSound = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSoundDetectionLoudSoundFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSoundDetectionLoudSoundFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSoundDetectionLoudSoundFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSoundDetectionLoudSoundFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSoundDetectionLoudSoundFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSoundDetectionLoudSoundFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSoundDetectionLoudSoundFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSoundDetectionLoudSoundFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSoundDetectionLoudSoundFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSoundDetectionLoudSoundFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSoundDetectionLoudSoundFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSoundDetectionLoudSoundFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSoundDetectionLoudSoundFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSoundDetectionLoudSoundFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
