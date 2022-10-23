import IconWidthNormalFill0Wght100Grad0Opsz48 from '../components/WidthNormalFill0Wght100Grad0Opsz48'
import IconWidthNormalFill0Wght200Grad0Opsz48 from '../components/WidthNormalFill0Wght200Grad0Opsz48'
import IconWidthNormalFill0Wght300Grad0Opsz48 from '../components/WidthNormalFill0Wght300Grad0Opsz48'
import IconWidthNormalFill0Wght400Grad0Opsz48 from '../components/WidthNormalFill0Wght400Grad0Opsz48'
import IconWidthNormalFill0Wght500Grad0Opsz48 from '../components/WidthNormalFill0Wght500Grad0Opsz48'
import IconWidthNormalFill0Wght600Grad0Opsz48 from '../components/WidthNormalFill0Wght600Grad0Opsz48'
import IconWidthNormalFill0Wght700Grad0Opsz48 from '../components/WidthNormalFill0Wght700Grad0Opsz48'
import IconWidthNormalFill1Wght100Grad0Opsz48 from '../components/WidthNormalFill1Wght100Grad0Opsz48'
import IconWidthNormalFill1Wght200Grad0Opsz48 from '../components/WidthNormalFill1Wght200Grad0Opsz48'
import IconWidthNormalFill1Wght300Grad0Opsz48 from '../components/WidthNormalFill1Wght300Grad0Opsz48'
import IconWidthNormalFill1Wght400Grad0Opsz48 from '../components/WidthNormalFill1Wght400Grad0Opsz48'
import IconWidthNormalFill1Wght500Grad0Opsz48 from '../components/WidthNormalFill1Wght500Grad0Opsz48'
import IconWidthNormalFill1Wght600Grad0Opsz48 from '../components/WidthNormalFill1Wght600Grad0Opsz48'
import IconWidthNormalFill1Wght700Grad0Opsz48 from '../components/WidthNormalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWidthNormal = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWidthNormalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWidthNormalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWidthNormalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWidthNormalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWidthNormalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWidthNormalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWidthNormalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWidthNormalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWidthNormalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWidthNormalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWidthNormalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWidthNormalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWidthNormalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWidthNormalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
