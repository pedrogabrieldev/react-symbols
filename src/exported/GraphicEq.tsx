import IconGraphicEqFill0Wght100Grad0Opsz48 from '../components/GraphicEqFill0Wght100Grad0Opsz48'
import IconGraphicEqFill0Wght200Grad0Opsz48 from '../components/GraphicEqFill0Wght200Grad0Opsz48'
import IconGraphicEqFill0Wght300Grad0Opsz48 from '../components/GraphicEqFill0Wght300Grad0Opsz48'
import IconGraphicEqFill0Wght400Grad0Opsz48 from '../components/GraphicEqFill0Wght400Grad0Opsz48'
import IconGraphicEqFill0Wght500Grad0Opsz48 from '../components/GraphicEqFill0Wght500Grad0Opsz48'
import IconGraphicEqFill0Wght600Grad0Opsz48 from '../components/GraphicEqFill0Wght600Grad0Opsz48'
import IconGraphicEqFill0Wght700Grad0Opsz48 from '../components/GraphicEqFill0Wght700Grad0Opsz48'
import IconGraphicEqFill1Wght100Grad0Opsz48 from '../components/GraphicEqFill1Wght100Grad0Opsz48'
import IconGraphicEqFill1Wght200Grad0Opsz48 from '../components/GraphicEqFill1Wght200Grad0Opsz48'
import IconGraphicEqFill1Wght300Grad0Opsz48 from '../components/GraphicEqFill1Wght300Grad0Opsz48'
import IconGraphicEqFill1Wght400Grad0Opsz48 from '../components/GraphicEqFill1Wght400Grad0Opsz48'
import IconGraphicEqFill1Wght500Grad0Opsz48 from '../components/GraphicEqFill1Wght500Grad0Opsz48'
import IconGraphicEqFill1Wght600Grad0Opsz48 from '../components/GraphicEqFill1Wght600Grad0Opsz48'
import IconGraphicEqFill1Wght700Grad0Opsz48 from '../components/GraphicEqFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGraphicEq = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGraphicEqFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGraphicEqFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGraphicEqFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGraphicEqFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGraphicEqFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGraphicEqFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGraphicEqFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGraphicEqFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGraphicEqFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGraphicEqFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGraphicEqFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGraphicEqFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGraphicEqFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGraphicEqFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
