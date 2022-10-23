import IconWidthFullFill0Wght100Grad0Opsz48 from '../components/WidthFullFill0Wght100Grad0Opsz48'
import IconWidthFullFill0Wght200Grad0Opsz48 from '../components/WidthFullFill0Wght200Grad0Opsz48'
import IconWidthFullFill0Wght300Grad0Opsz48 from '../components/WidthFullFill0Wght300Grad0Opsz48'
import IconWidthFullFill0Wght400Grad0Opsz48 from '../components/WidthFullFill0Wght400Grad0Opsz48'
import IconWidthFullFill0Wght500Grad0Opsz48 from '../components/WidthFullFill0Wght500Grad0Opsz48'
import IconWidthFullFill0Wght600Grad0Opsz48 from '../components/WidthFullFill0Wght600Grad0Opsz48'
import IconWidthFullFill0Wght700Grad0Opsz48 from '../components/WidthFullFill0Wght700Grad0Opsz48'
import IconWidthFullFill1Wght100Grad0Opsz48 from '../components/WidthFullFill1Wght100Grad0Opsz48'
import IconWidthFullFill1Wght200Grad0Opsz48 from '../components/WidthFullFill1Wght200Grad0Opsz48'
import IconWidthFullFill1Wght300Grad0Opsz48 from '../components/WidthFullFill1Wght300Grad0Opsz48'
import IconWidthFullFill1Wght400Grad0Opsz48 from '../components/WidthFullFill1Wght400Grad0Opsz48'
import IconWidthFullFill1Wght500Grad0Opsz48 from '../components/WidthFullFill1Wght500Grad0Opsz48'
import IconWidthFullFill1Wght600Grad0Opsz48 from '../components/WidthFullFill1Wght600Grad0Opsz48'
import IconWidthFullFill1Wght700Grad0Opsz48 from '../components/WidthFullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWidthFull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWidthFullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWidthFullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWidthFullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWidthFullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWidthFullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWidthFullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWidthFullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWidthFullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWidthFullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWidthFullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWidthFullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWidthFullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWidthFullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWidthFullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
