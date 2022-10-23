import IconCircleFill0Wght100Grad0Opsz48 from '../components/CircleFill0Wght100Grad0Opsz48'
import IconCircleFill0Wght200Grad0Opsz48 from '../components/CircleFill0Wght200Grad0Opsz48'
import IconCircleFill0Wght300Grad0Opsz48 from '../components/CircleFill0Wght300Grad0Opsz48'
import IconCircleFill0Wght400Grad0Opsz48 from '../components/CircleFill0Wght400Grad0Opsz48'
import IconCircleFill0Wght500Grad0Opsz48 from '../components/CircleFill0Wght500Grad0Opsz48'
import IconCircleFill0Wght600Grad0Opsz48 from '../components/CircleFill0Wght600Grad0Opsz48'
import IconCircleFill0Wght700Grad0Opsz48 from '../components/CircleFill0Wght700Grad0Opsz48'
import IconCircleFill1Wght100Grad0Opsz48 from '../components/CircleFill1Wght100Grad0Opsz48'
import IconCircleFill1Wght200Grad0Opsz48 from '../components/CircleFill1Wght200Grad0Opsz48'
import IconCircleFill1Wght300Grad0Opsz48 from '../components/CircleFill1Wght300Grad0Opsz48'
import IconCircleFill1Wght400Grad0Opsz48 from '../components/CircleFill1Wght400Grad0Opsz48'
import IconCircleFill1Wght500Grad0Opsz48 from '../components/CircleFill1Wght500Grad0Opsz48'
import IconCircleFill1Wght600Grad0Opsz48 from '../components/CircleFill1Wght600Grad0Opsz48'
import IconCircleFill1Wght700Grad0Opsz48 from '../components/CircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
