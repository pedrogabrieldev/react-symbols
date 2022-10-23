import IconGridViewFill0Wght100Grad0Opsz48 from '../components/GridViewFill0Wght100Grad0Opsz48'
import IconGridViewFill0Wght200Grad0Opsz48 from '../components/GridViewFill0Wght200Grad0Opsz48'
import IconGridViewFill0Wght300Grad0Opsz48 from '../components/GridViewFill0Wght300Grad0Opsz48'
import IconGridViewFill0Wght400Grad0Opsz48 from '../components/GridViewFill0Wght400Grad0Opsz48'
import IconGridViewFill0Wght500Grad0Opsz48 from '../components/GridViewFill0Wght500Grad0Opsz48'
import IconGridViewFill0Wght600Grad0Opsz48 from '../components/GridViewFill0Wght600Grad0Opsz48'
import IconGridViewFill0Wght700Grad0Opsz48 from '../components/GridViewFill0Wght700Grad0Opsz48'
import IconGridViewFill1Wght100Grad0Opsz48 from '../components/GridViewFill1Wght100Grad0Opsz48'
import IconGridViewFill1Wght200Grad0Opsz48 from '../components/GridViewFill1Wght200Grad0Opsz48'
import IconGridViewFill1Wght300Grad0Opsz48 from '../components/GridViewFill1Wght300Grad0Opsz48'
import IconGridViewFill1Wght400Grad0Opsz48 from '../components/GridViewFill1Wght400Grad0Opsz48'
import IconGridViewFill1Wght500Grad0Opsz48 from '../components/GridViewFill1Wght500Grad0Opsz48'
import IconGridViewFill1Wght600Grad0Opsz48 from '../components/GridViewFill1Wght600Grad0Opsz48'
import IconGridViewFill1Wght700Grad0Opsz48 from '../components/GridViewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGridView = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGridViewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGridViewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGridViewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGridViewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGridViewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGridViewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGridViewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGridViewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGridViewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGridViewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGridViewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGridViewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGridViewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGridViewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
