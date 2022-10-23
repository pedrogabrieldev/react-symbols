import IconFenceFill0Wght100Grad0Opsz48 from '../components/FenceFill0Wght100Grad0Opsz48'
import IconFenceFill0Wght200Grad0Opsz48 from '../components/FenceFill0Wght200Grad0Opsz48'
import IconFenceFill0Wght300Grad0Opsz48 from '../components/FenceFill0Wght300Grad0Opsz48'
import IconFenceFill0Wght400Grad0Opsz48 from '../components/FenceFill0Wght400Grad0Opsz48'
import IconFenceFill0Wght500Grad0Opsz48 from '../components/FenceFill0Wght500Grad0Opsz48'
import IconFenceFill0Wght600Grad0Opsz48 from '../components/FenceFill0Wght600Grad0Opsz48'
import IconFenceFill0Wght700Grad0Opsz48 from '../components/FenceFill0Wght700Grad0Opsz48'
import IconFenceFill1Wght100Grad0Opsz48 from '../components/FenceFill1Wght100Grad0Opsz48'
import IconFenceFill1Wght200Grad0Opsz48 from '../components/FenceFill1Wght200Grad0Opsz48'
import IconFenceFill1Wght300Grad0Opsz48 from '../components/FenceFill1Wght300Grad0Opsz48'
import IconFenceFill1Wght400Grad0Opsz48 from '../components/FenceFill1Wght400Grad0Opsz48'
import IconFenceFill1Wght500Grad0Opsz48 from '../components/FenceFill1Wght500Grad0Opsz48'
import IconFenceFill1Wght600Grad0Opsz48 from '../components/FenceFill1Wght600Grad0Opsz48'
import IconFenceFill1Wght700Grad0Opsz48 from '../components/FenceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFence = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFenceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFenceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFenceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFenceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFenceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFenceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFenceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFenceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFenceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFenceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFenceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFenceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFenceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFenceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
