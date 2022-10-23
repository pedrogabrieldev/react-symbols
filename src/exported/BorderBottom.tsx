import IconBorderBottomFill0Wght100Grad0Opsz48 from '../components/BorderBottomFill0Wght100Grad0Opsz48'
import IconBorderBottomFill0Wght200Grad0Opsz48 from '../components/BorderBottomFill0Wght200Grad0Opsz48'
import IconBorderBottomFill0Wght300Grad0Opsz48 from '../components/BorderBottomFill0Wght300Grad0Opsz48'
import IconBorderBottomFill0Wght400Grad0Opsz48 from '../components/BorderBottomFill0Wght400Grad0Opsz48'
import IconBorderBottomFill0Wght500Grad0Opsz48 from '../components/BorderBottomFill0Wght500Grad0Opsz48'
import IconBorderBottomFill0Wght600Grad0Opsz48 from '../components/BorderBottomFill0Wght600Grad0Opsz48'
import IconBorderBottomFill0Wght700Grad0Opsz48 from '../components/BorderBottomFill0Wght700Grad0Opsz48'
import IconBorderBottomFill1Wght100Grad0Opsz48 from '../components/BorderBottomFill1Wght100Grad0Opsz48'
import IconBorderBottomFill1Wght200Grad0Opsz48 from '../components/BorderBottomFill1Wght200Grad0Opsz48'
import IconBorderBottomFill1Wght300Grad0Opsz48 from '../components/BorderBottomFill1Wght300Grad0Opsz48'
import IconBorderBottomFill1Wght400Grad0Opsz48 from '../components/BorderBottomFill1Wght400Grad0Opsz48'
import IconBorderBottomFill1Wght500Grad0Opsz48 from '../components/BorderBottomFill1Wght500Grad0Opsz48'
import IconBorderBottomFill1Wght600Grad0Opsz48 from '../components/BorderBottomFill1Wght600Grad0Opsz48'
import IconBorderBottomFill1Wght700Grad0Opsz48 from '../components/BorderBottomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderBottom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderBottomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderBottomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderBottomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderBottomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderBottomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderBottomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderBottomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderBottomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderBottomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderBottomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderBottomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderBottomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderBottomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderBottomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
