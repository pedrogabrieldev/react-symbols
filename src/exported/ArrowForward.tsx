import IconArrowForwardFill0Wght100Grad0Opsz48 from '../components/ArrowForwardFill0Wght100Grad0Opsz48'
import IconArrowForwardFill0Wght200Grad0Opsz48 from '../components/ArrowForwardFill0Wght200Grad0Opsz48'
import IconArrowForwardFill0Wght300Grad0Opsz48 from '../components/ArrowForwardFill0Wght300Grad0Opsz48'
import IconArrowForwardFill0Wght400Grad0Opsz48 from '../components/ArrowForwardFill0Wght400Grad0Opsz48'
import IconArrowForwardFill0Wght500Grad0Opsz48 from '../components/ArrowForwardFill0Wght500Grad0Opsz48'
import IconArrowForwardFill0Wght600Grad0Opsz48 from '../components/ArrowForwardFill0Wght600Grad0Opsz48'
import IconArrowForwardFill0Wght700Grad0Opsz48 from '../components/ArrowForwardFill0Wght700Grad0Opsz48'
import IconArrowForwardFill1Wght100Grad0Opsz48 from '../components/ArrowForwardFill1Wght100Grad0Opsz48'
import IconArrowForwardFill1Wght200Grad0Opsz48 from '../components/ArrowForwardFill1Wght200Grad0Opsz48'
import IconArrowForwardFill1Wght300Grad0Opsz48 from '../components/ArrowForwardFill1Wght300Grad0Opsz48'
import IconArrowForwardFill1Wght400Grad0Opsz48 from '../components/ArrowForwardFill1Wght400Grad0Opsz48'
import IconArrowForwardFill1Wght500Grad0Opsz48 from '../components/ArrowForwardFill1Wght500Grad0Opsz48'
import IconArrowForwardFill1Wght600Grad0Opsz48 from '../components/ArrowForwardFill1Wght600Grad0Opsz48'
import IconArrowForwardFill1Wght700Grad0Opsz48 from '../components/ArrowForwardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowForward = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowForwardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowForwardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowForwardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowForwardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowForwardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowForwardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowForwardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowForwardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowForwardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowForwardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowForwardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowForwardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowForwardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowForwardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
