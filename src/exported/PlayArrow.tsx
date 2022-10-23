import IconPlayArrowFill0Wght100Grad0Opsz48 from '../components/PlayArrowFill0Wght100Grad0Opsz48'
import IconPlayArrowFill0Wght200Grad0Opsz48 from '../components/PlayArrowFill0Wght200Grad0Opsz48'
import IconPlayArrowFill0Wght300Grad0Opsz48 from '../components/PlayArrowFill0Wght300Grad0Opsz48'
import IconPlayArrowFill0Wght400Grad0Opsz48 from '../components/PlayArrowFill0Wght400Grad0Opsz48'
import IconPlayArrowFill0Wght500Grad0Opsz48 from '../components/PlayArrowFill0Wght500Grad0Opsz48'
import IconPlayArrowFill0Wght600Grad0Opsz48 from '../components/PlayArrowFill0Wght600Grad0Opsz48'
import IconPlayArrowFill0Wght700Grad0Opsz48 from '../components/PlayArrowFill0Wght700Grad0Opsz48'
import IconPlayArrowFill1Wght100Grad0Opsz48 from '../components/PlayArrowFill1Wght100Grad0Opsz48'
import IconPlayArrowFill1Wght200Grad0Opsz48 from '../components/PlayArrowFill1Wght200Grad0Opsz48'
import IconPlayArrowFill1Wght300Grad0Opsz48 from '../components/PlayArrowFill1Wght300Grad0Opsz48'
import IconPlayArrowFill1Wght400Grad0Opsz48 from '../components/PlayArrowFill1Wght400Grad0Opsz48'
import IconPlayArrowFill1Wght500Grad0Opsz48 from '../components/PlayArrowFill1Wght500Grad0Opsz48'
import IconPlayArrowFill1Wght600Grad0Opsz48 from '../components/PlayArrowFill1Wght600Grad0Opsz48'
import IconPlayArrowFill1Wght700Grad0Opsz48 from '../components/PlayArrowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlayArrow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlayArrowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlayArrowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlayArrowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlayArrowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlayArrowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlayArrowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlayArrowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlayArrowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlayArrowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlayArrowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlayArrowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlayArrowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlayArrowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlayArrowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
