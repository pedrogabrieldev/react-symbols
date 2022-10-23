import IconDoubleArrowFill0Wght100Grad0Opsz48 from '../components/DoubleArrowFill0Wght100Grad0Opsz48'
import IconDoubleArrowFill0Wght200Grad0Opsz48 from '../components/DoubleArrowFill0Wght200Grad0Opsz48'
import IconDoubleArrowFill0Wght300Grad0Opsz48 from '../components/DoubleArrowFill0Wght300Grad0Opsz48'
import IconDoubleArrowFill0Wght400Grad0Opsz48 from '../components/DoubleArrowFill0Wght400Grad0Opsz48'
import IconDoubleArrowFill0Wght500Grad0Opsz48 from '../components/DoubleArrowFill0Wght500Grad0Opsz48'
import IconDoubleArrowFill0Wght600Grad0Opsz48 from '../components/DoubleArrowFill0Wght600Grad0Opsz48'
import IconDoubleArrowFill0Wght700Grad0Opsz48 from '../components/DoubleArrowFill0Wght700Grad0Opsz48'
import IconDoubleArrowFill1Wght100Grad0Opsz48 from '../components/DoubleArrowFill1Wght100Grad0Opsz48'
import IconDoubleArrowFill1Wght200Grad0Opsz48 from '../components/DoubleArrowFill1Wght200Grad0Opsz48'
import IconDoubleArrowFill1Wght300Grad0Opsz48 from '../components/DoubleArrowFill1Wght300Grad0Opsz48'
import IconDoubleArrowFill1Wght400Grad0Opsz48 from '../components/DoubleArrowFill1Wght400Grad0Opsz48'
import IconDoubleArrowFill1Wght500Grad0Opsz48 from '../components/DoubleArrowFill1Wght500Grad0Opsz48'
import IconDoubleArrowFill1Wght600Grad0Opsz48 from '../components/DoubleArrowFill1Wght600Grad0Opsz48'
import IconDoubleArrowFill1Wght700Grad0Opsz48 from '../components/DoubleArrowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoubleArrow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoubleArrowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoubleArrowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoubleArrowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoubleArrowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoubleArrowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoubleArrowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoubleArrowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoubleArrowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoubleArrowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoubleArrowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoubleArrowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoubleArrowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoubleArrowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoubleArrowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
