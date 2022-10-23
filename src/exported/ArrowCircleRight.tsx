import IconArrowCircleRightFill0Wght100Grad0Opsz48 from '../components/ArrowCircleRightFill0Wght100Grad0Opsz48'
import IconArrowCircleRightFill0Wght200Grad0Opsz48 from '../components/ArrowCircleRightFill0Wght200Grad0Opsz48'
import IconArrowCircleRightFill0Wght300Grad0Opsz48 from '../components/ArrowCircleRightFill0Wght300Grad0Opsz48'
import IconArrowCircleRightFill0Wght400Grad0Opsz48 from '../components/ArrowCircleRightFill0Wght400Grad0Opsz48'
import IconArrowCircleRightFill0Wght500Grad0Opsz48 from '../components/ArrowCircleRightFill0Wght500Grad0Opsz48'
import IconArrowCircleRightFill0Wght600Grad0Opsz48 from '../components/ArrowCircleRightFill0Wght600Grad0Opsz48'
import IconArrowCircleRightFill0Wght700Grad0Opsz48 from '../components/ArrowCircleRightFill0Wght700Grad0Opsz48'
import IconArrowCircleRightFill1Wght100Grad0Opsz48 from '../components/ArrowCircleRightFill1Wght100Grad0Opsz48'
import IconArrowCircleRightFill1Wght200Grad0Opsz48 from '../components/ArrowCircleRightFill1Wght200Grad0Opsz48'
import IconArrowCircleRightFill1Wght300Grad0Opsz48 from '../components/ArrowCircleRightFill1Wght300Grad0Opsz48'
import IconArrowCircleRightFill1Wght400Grad0Opsz48 from '../components/ArrowCircleRightFill1Wght400Grad0Opsz48'
import IconArrowCircleRightFill1Wght500Grad0Opsz48 from '../components/ArrowCircleRightFill1Wght500Grad0Opsz48'
import IconArrowCircleRightFill1Wght600Grad0Opsz48 from '../components/ArrowCircleRightFill1Wght600Grad0Opsz48'
import IconArrowCircleRightFill1Wght700Grad0Opsz48 from '../components/ArrowCircleRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowCircleRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowCircleRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowCircleRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowCircleRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowCircleRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowCircleRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowCircleRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowCircleRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowCircleRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowCircleRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowCircleRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowCircleRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowCircleRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowCircleRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowCircleRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
