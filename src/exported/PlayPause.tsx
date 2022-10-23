import IconPlayPauseFill0Wght100Grad0Opsz48 from '../components/PlayPauseFill0Wght100Grad0Opsz48'
import IconPlayPauseFill0Wght200Grad0Opsz48 from '../components/PlayPauseFill0Wght200Grad0Opsz48'
import IconPlayPauseFill0Wght300Grad0Opsz48 from '../components/PlayPauseFill0Wght300Grad0Opsz48'
import IconPlayPauseFill0Wght400Grad0Opsz48 from '../components/PlayPauseFill0Wght400Grad0Opsz48'
import IconPlayPauseFill0Wght500Grad0Opsz48 from '../components/PlayPauseFill0Wght500Grad0Opsz48'
import IconPlayPauseFill0Wght600Grad0Opsz48 from '../components/PlayPauseFill0Wght600Grad0Opsz48'
import IconPlayPauseFill0Wght700Grad0Opsz48 from '../components/PlayPauseFill0Wght700Grad0Opsz48'
import IconPlayPauseFill1Wght100Grad0Opsz48 from '../components/PlayPauseFill1Wght100Grad0Opsz48'
import IconPlayPauseFill1Wght200Grad0Opsz48 from '../components/PlayPauseFill1Wght200Grad0Opsz48'
import IconPlayPauseFill1Wght300Grad0Opsz48 from '../components/PlayPauseFill1Wght300Grad0Opsz48'
import IconPlayPauseFill1Wght400Grad0Opsz48 from '../components/PlayPauseFill1Wght400Grad0Opsz48'
import IconPlayPauseFill1Wght500Grad0Opsz48 from '../components/PlayPauseFill1Wght500Grad0Opsz48'
import IconPlayPauseFill1Wght600Grad0Opsz48 from '../components/PlayPauseFill1Wght600Grad0Opsz48'
import IconPlayPauseFill1Wght700Grad0Opsz48 from '../components/PlayPauseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlayPause = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlayPauseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlayPauseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlayPauseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlayPauseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlayPauseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlayPauseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlayPauseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlayPauseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlayPauseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlayPauseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlayPauseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlayPauseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlayPauseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlayPauseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
