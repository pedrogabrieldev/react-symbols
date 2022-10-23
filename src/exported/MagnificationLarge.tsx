import IconMagnificationLargeFill0Wght100Grad0Opsz48 from '../components/MagnificationLargeFill0Wght100Grad0Opsz48'
import IconMagnificationLargeFill0Wght200Grad0Opsz48 from '../components/MagnificationLargeFill0Wght200Grad0Opsz48'
import IconMagnificationLargeFill0Wght300Grad0Opsz48 from '../components/MagnificationLargeFill0Wght300Grad0Opsz48'
import IconMagnificationLargeFill0Wght400Grad0Opsz48 from '../components/MagnificationLargeFill0Wght400Grad0Opsz48'
import IconMagnificationLargeFill0Wght500Grad0Opsz48 from '../components/MagnificationLargeFill0Wght500Grad0Opsz48'
import IconMagnificationLargeFill0Wght600Grad0Opsz48 from '../components/MagnificationLargeFill0Wght600Grad0Opsz48'
import IconMagnificationLargeFill0Wght700Grad0Opsz48 from '../components/MagnificationLargeFill0Wght700Grad0Opsz48'
import IconMagnificationLargeFill1Wght100Grad0Opsz48 from '../components/MagnificationLargeFill1Wght100Grad0Opsz48'
import IconMagnificationLargeFill1Wght200Grad0Opsz48 from '../components/MagnificationLargeFill1Wght200Grad0Opsz48'
import IconMagnificationLargeFill1Wght300Grad0Opsz48 from '../components/MagnificationLargeFill1Wght300Grad0Opsz48'
import IconMagnificationLargeFill1Wght400Grad0Opsz48 from '../components/MagnificationLargeFill1Wght400Grad0Opsz48'
import IconMagnificationLargeFill1Wght500Grad0Opsz48 from '../components/MagnificationLargeFill1Wght500Grad0Opsz48'
import IconMagnificationLargeFill1Wght600Grad0Opsz48 from '../components/MagnificationLargeFill1Wght600Grad0Opsz48'
import IconMagnificationLargeFill1Wght700Grad0Opsz48 from '../components/MagnificationLargeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMagnificationLarge = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMagnificationLargeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMagnificationLargeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMagnificationLargeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMagnificationLargeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMagnificationLargeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMagnificationLargeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMagnificationLargeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMagnificationLargeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMagnificationLargeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMagnificationLargeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMagnificationLargeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMagnificationLargeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMagnificationLargeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMagnificationLargeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
