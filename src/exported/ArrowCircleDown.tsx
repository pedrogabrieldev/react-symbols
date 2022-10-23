import IconArrowCircleDownFill0Wght100Grad0Opsz48 from '../components/ArrowCircleDownFill0Wght100Grad0Opsz48'
import IconArrowCircleDownFill0Wght200Grad0Opsz48 from '../components/ArrowCircleDownFill0Wght200Grad0Opsz48'
import IconArrowCircleDownFill0Wght300Grad0Opsz48 from '../components/ArrowCircleDownFill0Wght300Grad0Opsz48'
import IconArrowCircleDownFill0Wght400Grad0Opsz48 from '../components/ArrowCircleDownFill0Wght400Grad0Opsz48'
import IconArrowCircleDownFill0Wght500Grad0Opsz48 from '../components/ArrowCircleDownFill0Wght500Grad0Opsz48'
import IconArrowCircleDownFill0Wght600Grad0Opsz48 from '../components/ArrowCircleDownFill0Wght600Grad0Opsz48'
import IconArrowCircleDownFill0Wght700Grad0Opsz48 from '../components/ArrowCircleDownFill0Wght700Grad0Opsz48'
import IconArrowCircleDownFill1Wght100Grad0Opsz48 from '../components/ArrowCircleDownFill1Wght100Grad0Opsz48'
import IconArrowCircleDownFill1Wght200Grad0Opsz48 from '../components/ArrowCircleDownFill1Wght200Grad0Opsz48'
import IconArrowCircleDownFill1Wght300Grad0Opsz48 from '../components/ArrowCircleDownFill1Wght300Grad0Opsz48'
import IconArrowCircleDownFill1Wght400Grad0Opsz48 from '../components/ArrowCircleDownFill1Wght400Grad0Opsz48'
import IconArrowCircleDownFill1Wght500Grad0Opsz48 from '../components/ArrowCircleDownFill1Wght500Grad0Opsz48'
import IconArrowCircleDownFill1Wght600Grad0Opsz48 from '../components/ArrowCircleDownFill1Wght600Grad0Opsz48'
import IconArrowCircleDownFill1Wght700Grad0Opsz48 from '../components/ArrowCircleDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowCircleDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowCircleDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowCircleDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowCircleDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowCircleDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowCircleDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowCircleDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowCircleDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowCircleDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowCircleDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowCircleDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowCircleDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowCircleDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowCircleDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowCircleDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
