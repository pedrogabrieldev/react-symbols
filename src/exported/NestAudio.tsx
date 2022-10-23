import IconNestAudioFill0Wght100Grad0Opsz48 from '../components/NestAudioFill0Wght100Grad0Opsz48'
import IconNestAudioFill0Wght200Grad0Opsz48 from '../components/NestAudioFill0Wght200Grad0Opsz48'
import IconNestAudioFill0Wght300Grad0Opsz48 from '../components/NestAudioFill0Wght300Grad0Opsz48'
import IconNestAudioFill0Wght400Grad0Opsz48 from '../components/NestAudioFill0Wght400Grad0Opsz48'
import IconNestAudioFill0Wght500Grad0Opsz48 from '../components/NestAudioFill0Wght500Grad0Opsz48'
import IconNestAudioFill0Wght600Grad0Opsz48 from '../components/NestAudioFill0Wght600Grad0Opsz48'
import IconNestAudioFill0Wght700Grad0Opsz48 from '../components/NestAudioFill0Wght700Grad0Opsz48'
import IconNestAudioFill1Wght100Grad0Opsz48 from '../components/NestAudioFill1Wght100Grad0Opsz48'
import IconNestAudioFill1Wght200Grad0Opsz48 from '../components/NestAudioFill1Wght200Grad0Opsz48'
import IconNestAudioFill1Wght300Grad0Opsz48 from '../components/NestAudioFill1Wght300Grad0Opsz48'
import IconNestAudioFill1Wght400Grad0Opsz48 from '../components/NestAudioFill1Wght400Grad0Opsz48'
import IconNestAudioFill1Wght500Grad0Opsz48 from '../components/NestAudioFill1Wght500Grad0Opsz48'
import IconNestAudioFill1Wght600Grad0Opsz48 from '../components/NestAudioFill1Wght600Grad0Opsz48'
import IconNestAudioFill1Wght700Grad0Opsz48 from '../components/NestAudioFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestAudio = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestAudioFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestAudioFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestAudioFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestAudioFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestAudioFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestAudioFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestAudioFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestAudioFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestAudioFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestAudioFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestAudioFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestAudioFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestAudioFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestAudioFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
