import IconMarginFill0Wght100Grad0Opsz48 from '../components/MarginFill0Wght100Grad0Opsz48'
import IconMarginFill0Wght200Grad0Opsz48 from '../components/MarginFill0Wght200Grad0Opsz48'
import IconMarginFill0Wght300Grad0Opsz48 from '../components/MarginFill0Wght300Grad0Opsz48'
import IconMarginFill0Wght400Grad0Opsz48 from '../components/MarginFill0Wght400Grad0Opsz48'
import IconMarginFill0Wght500Grad0Opsz48 from '../components/MarginFill0Wght500Grad0Opsz48'
import IconMarginFill0Wght600Grad0Opsz48 from '../components/MarginFill0Wght600Grad0Opsz48'
import IconMarginFill0Wght700Grad0Opsz48 from '../components/MarginFill0Wght700Grad0Opsz48'
import IconMarginFill1Wght100Grad0Opsz48 from '../components/MarginFill1Wght100Grad0Opsz48'
import IconMarginFill1Wght200Grad0Opsz48 from '../components/MarginFill1Wght200Grad0Opsz48'
import IconMarginFill1Wght300Grad0Opsz48 from '../components/MarginFill1Wght300Grad0Opsz48'
import IconMarginFill1Wght400Grad0Opsz48 from '../components/MarginFill1Wght400Grad0Opsz48'
import IconMarginFill1Wght500Grad0Opsz48 from '../components/MarginFill1Wght500Grad0Opsz48'
import IconMarginFill1Wght600Grad0Opsz48 from '../components/MarginFill1Wght600Grad0Opsz48'
import IconMarginFill1Wght700Grad0Opsz48 from '../components/MarginFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMargin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMarginFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMarginFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMarginFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMarginFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMarginFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMarginFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMarginFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMarginFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMarginFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMarginFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMarginFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMarginFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMarginFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMarginFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
