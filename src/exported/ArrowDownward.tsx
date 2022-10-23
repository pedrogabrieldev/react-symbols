import IconArrowDownwardFill0Wght100Grad0Opsz48 from '../components/ArrowDownwardFill0Wght100Grad0Opsz48'
import IconArrowDownwardFill0Wght200Grad0Opsz48 from '../components/ArrowDownwardFill0Wght200Grad0Opsz48'
import IconArrowDownwardFill0Wght300Grad0Opsz48 from '../components/ArrowDownwardFill0Wght300Grad0Opsz48'
import IconArrowDownwardFill0Wght400Grad0Opsz48 from '../components/ArrowDownwardFill0Wght400Grad0Opsz48'
import IconArrowDownwardFill0Wght500Grad0Opsz48 from '../components/ArrowDownwardFill0Wght500Grad0Opsz48'
import IconArrowDownwardFill0Wght600Grad0Opsz48 from '../components/ArrowDownwardFill0Wght600Grad0Opsz48'
import IconArrowDownwardFill0Wght700Grad0Opsz48 from '../components/ArrowDownwardFill0Wght700Grad0Opsz48'
import IconArrowDownwardFill1Wght100Grad0Opsz48 from '../components/ArrowDownwardFill1Wght100Grad0Opsz48'
import IconArrowDownwardFill1Wght200Grad0Opsz48 from '../components/ArrowDownwardFill1Wght200Grad0Opsz48'
import IconArrowDownwardFill1Wght300Grad0Opsz48 from '../components/ArrowDownwardFill1Wght300Grad0Opsz48'
import IconArrowDownwardFill1Wght400Grad0Opsz48 from '../components/ArrowDownwardFill1Wght400Grad0Opsz48'
import IconArrowDownwardFill1Wght500Grad0Opsz48 from '../components/ArrowDownwardFill1Wght500Grad0Opsz48'
import IconArrowDownwardFill1Wght600Grad0Opsz48 from '../components/ArrowDownwardFill1Wght600Grad0Opsz48'
import IconArrowDownwardFill1Wght700Grad0Opsz48 from '../components/ArrowDownwardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowDownward = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowDownwardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowDownwardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowDownwardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowDownwardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowDownwardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowDownwardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowDownwardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowDownwardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowDownwardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowDownwardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowDownwardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowDownwardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowDownwardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowDownwardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
