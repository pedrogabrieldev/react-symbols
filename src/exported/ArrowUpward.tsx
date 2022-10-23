import IconArrowUpwardFill0Wght100Grad0Opsz48 from '../components/ArrowUpwardFill0Wght100Grad0Opsz48'
import IconArrowUpwardFill0Wght200Grad0Opsz48 from '../components/ArrowUpwardFill0Wght200Grad0Opsz48'
import IconArrowUpwardFill0Wght300Grad0Opsz48 from '../components/ArrowUpwardFill0Wght300Grad0Opsz48'
import IconArrowUpwardFill0Wght400Grad0Opsz48 from '../components/ArrowUpwardFill0Wght400Grad0Opsz48'
import IconArrowUpwardFill0Wght500Grad0Opsz48 from '../components/ArrowUpwardFill0Wght500Grad0Opsz48'
import IconArrowUpwardFill0Wght600Grad0Opsz48 from '../components/ArrowUpwardFill0Wght600Grad0Opsz48'
import IconArrowUpwardFill0Wght700Grad0Opsz48 from '../components/ArrowUpwardFill0Wght700Grad0Opsz48'
import IconArrowUpwardFill1Wght100Grad0Opsz48 from '../components/ArrowUpwardFill1Wght100Grad0Opsz48'
import IconArrowUpwardFill1Wght200Grad0Opsz48 from '../components/ArrowUpwardFill1Wght200Grad0Opsz48'
import IconArrowUpwardFill1Wght300Grad0Opsz48 from '../components/ArrowUpwardFill1Wght300Grad0Opsz48'
import IconArrowUpwardFill1Wght400Grad0Opsz48 from '../components/ArrowUpwardFill1Wght400Grad0Opsz48'
import IconArrowUpwardFill1Wght500Grad0Opsz48 from '../components/ArrowUpwardFill1Wght500Grad0Opsz48'
import IconArrowUpwardFill1Wght600Grad0Opsz48 from '../components/ArrowUpwardFill1Wght600Grad0Opsz48'
import IconArrowUpwardFill1Wght700Grad0Opsz48 from '../components/ArrowUpwardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowUpward = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowUpwardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowUpwardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowUpwardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowUpwardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowUpwardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowUpwardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowUpwardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowUpwardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowUpwardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowUpwardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowUpwardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowUpwardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowUpwardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowUpwardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
