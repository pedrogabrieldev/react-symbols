import IconAudioFileFill0Wght100Grad0Opsz48 from '../components/AudioFileFill0Wght100Grad0Opsz48'
import IconAudioFileFill0Wght200Grad0Opsz48 from '../components/AudioFileFill0Wght200Grad0Opsz48'
import IconAudioFileFill0Wght300Grad0Opsz48 from '../components/AudioFileFill0Wght300Grad0Opsz48'
import IconAudioFileFill0Wght400Grad0Opsz48 from '../components/AudioFileFill0Wght400Grad0Opsz48'
import IconAudioFileFill0Wght500Grad0Opsz48 from '../components/AudioFileFill0Wght500Grad0Opsz48'
import IconAudioFileFill0Wght600Grad0Opsz48 from '../components/AudioFileFill0Wght600Grad0Opsz48'
import IconAudioFileFill0Wght700Grad0Opsz48 from '../components/AudioFileFill0Wght700Grad0Opsz48'
import IconAudioFileFill1Wght100Grad0Opsz48 from '../components/AudioFileFill1Wght100Grad0Opsz48'
import IconAudioFileFill1Wght200Grad0Opsz48 from '../components/AudioFileFill1Wght200Grad0Opsz48'
import IconAudioFileFill1Wght300Grad0Opsz48 from '../components/AudioFileFill1Wght300Grad0Opsz48'
import IconAudioFileFill1Wght400Grad0Opsz48 from '../components/AudioFileFill1Wght400Grad0Opsz48'
import IconAudioFileFill1Wght500Grad0Opsz48 from '../components/AudioFileFill1Wght500Grad0Opsz48'
import IconAudioFileFill1Wght600Grad0Opsz48 from '../components/AudioFileFill1Wght600Grad0Opsz48'
import IconAudioFileFill1Wght700Grad0Opsz48 from '../components/AudioFileFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAudioFile = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAudioFileFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAudioFileFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAudioFileFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAudioFileFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAudioFileFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAudioFileFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAudioFileFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAudioFileFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAudioFileFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAudioFileFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAudioFileFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAudioFileFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAudioFileFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAudioFileFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
