import IconArrowRightFill0Wght100Grad0Opsz48 from '../components/ArrowRightFill0Wght100Grad0Opsz48'
import IconArrowRightFill0Wght200Grad0Opsz48 from '../components/ArrowRightFill0Wght200Grad0Opsz48'
import IconArrowRightFill0Wght300Grad0Opsz48 from '../components/ArrowRightFill0Wght300Grad0Opsz48'
import IconArrowRightFill0Wght400Grad0Opsz48 from '../components/ArrowRightFill0Wght400Grad0Opsz48'
import IconArrowRightFill0Wght500Grad0Opsz48 from '../components/ArrowRightFill0Wght500Grad0Opsz48'
import IconArrowRightFill0Wght600Grad0Opsz48 from '../components/ArrowRightFill0Wght600Grad0Opsz48'
import IconArrowRightFill0Wght700Grad0Opsz48 from '../components/ArrowRightFill0Wght700Grad0Opsz48'
import IconArrowRightFill1Wght100Grad0Opsz48 from '../components/ArrowRightFill1Wght100Grad0Opsz48'
import IconArrowRightFill1Wght200Grad0Opsz48 from '../components/ArrowRightFill1Wght200Grad0Opsz48'
import IconArrowRightFill1Wght300Grad0Opsz48 from '../components/ArrowRightFill1Wght300Grad0Opsz48'
import IconArrowRightFill1Wght400Grad0Opsz48 from '../components/ArrowRightFill1Wght400Grad0Opsz48'
import IconArrowRightFill1Wght500Grad0Opsz48 from '../components/ArrowRightFill1Wght500Grad0Opsz48'
import IconArrowRightFill1Wght600Grad0Opsz48 from '../components/ArrowRightFill1Wght600Grad0Opsz48'
import IconArrowRightFill1Wght700Grad0Opsz48 from '../components/ArrowRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
