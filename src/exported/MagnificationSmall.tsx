import IconMagnificationSmallFill0Wght100Grad0Opsz48 from '../components/MagnificationSmallFill0Wght100Grad0Opsz48'
import IconMagnificationSmallFill0Wght200Grad0Opsz48 from '../components/MagnificationSmallFill0Wght200Grad0Opsz48'
import IconMagnificationSmallFill0Wght300Grad0Opsz48 from '../components/MagnificationSmallFill0Wght300Grad0Opsz48'
import IconMagnificationSmallFill0Wght400Grad0Opsz48 from '../components/MagnificationSmallFill0Wght400Grad0Opsz48'
import IconMagnificationSmallFill0Wght500Grad0Opsz48 from '../components/MagnificationSmallFill0Wght500Grad0Opsz48'
import IconMagnificationSmallFill0Wght600Grad0Opsz48 from '../components/MagnificationSmallFill0Wght600Grad0Opsz48'
import IconMagnificationSmallFill0Wght700Grad0Opsz48 from '../components/MagnificationSmallFill0Wght700Grad0Opsz48'
import IconMagnificationSmallFill1Wght100Grad0Opsz48 from '../components/MagnificationSmallFill1Wght100Grad0Opsz48'
import IconMagnificationSmallFill1Wght200Grad0Opsz48 from '../components/MagnificationSmallFill1Wght200Grad0Opsz48'
import IconMagnificationSmallFill1Wght300Grad0Opsz48 from '../components/MagnificationSmallFill1Wght300Grad0Opsz48'
import IconMagnificationSmallFill1Wght400Grad0Opsz48 from '../components/MagnificationSmallFill1Wght400Grad0Opsz48'
import IconMagnificationSmallFill1Wght500Grad0Opsz48 from '../components/MagnificationSmallFill1Wght500Grad0Opsz48'
import IconMagnificationSmallFill1Wght600Grad0Opsz48 from '../components/MagnificationSmallFill1Wght600Grad0Opsz48'
import IconMagnificationSmallFill1Wght700Grad0Opsz48 from '../components/MagnificationSmallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMagnificationSmall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMagnificationSmallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMagnificationSmallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMagnificationSmallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMagnificationSmallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMagnificationSmallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMagnificationSmallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMagnificationSmallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMagnificationSmallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMagnificationSmallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMagnificationSmallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMagnificationSmallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMagnificationSmallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMagnificationSmallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMagnificationSmallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
