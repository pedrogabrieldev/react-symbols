import IconPauseFill0Wght100Grad0Opsz48 from '../components/PauseFill0Wght100Grad0Opsz48'
import IconPauseFill0Wght200Grad0Opsz48 from '../components/PauseFill0Wght200Grad0Opsz48'
import IconPauseFill0Wght300Grad0Opsz48 from '../components/PauseFill0Wght300Grad0Opsz48'
import IconPauseFill0Wght400Grad0Opsz48 from '../components/PauseFill0Wght400Grad0Opsz48'
import IconPauseFill0Wght500Grad0Opsz48 from '../components/PauseFill0Wght500Grad0Opsz48'
import IconPauseFill0Wght600Grad0Opsz48 from '../components/PauseFill0Wght600Grad0Opsz48'
import IconPauseFill0Wght700Grad0Opsz48 from '../components/PauseFill0Wght700Grad0Opsz48'
import IconPauseFill1Wght100Grad0Opsz48 from '../components/PauseFill1Wght100Grad0Opsz48'
import IconPauseFill1Wght200Grad0Opsz48 from '../components/PauseFill1Wght200Grad0Opsz48'
import IconPauseFill1Wght300Grad0Opsz48 from '../components/PauseFill1Wght300Grad0Opsz48'
import IconPauseFill1Wght400Grad0Opsz48 from '../components/PauseFill1Wght400Grad0Opsz48'
import IconPauseFill1Wght500Grad0Opsz48 from '../components/PauseFill1Wght500Grad0Opsz48'
import IconPauseFill1Wght600Grad0Opsz48 from '../components/PauseFill1Wght600Grad0Opsz48'
import IconPauseFill1Wght700Grad0Opsz48 from '../components/PauseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPause = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPauseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPauseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPauseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPauseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPauseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPauseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPauseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPauseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPauseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPauseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPauseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPauseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPauseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPauseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
