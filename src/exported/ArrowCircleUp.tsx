import IconArrowCircleUpFill0Wght100Grad0Opsz48 from '../components/ArrowCircleUpFill0Wght100Grad0Opsz48'
import IconArrowCircleUpFill0Wght200Grad0Opsz48 from '../components/ArrowCircleUpFill0Wght200Grad0Opsz48'
import IconArrowCircleUpFill0Wght300Grad0Opsz48 from '../components/ArrowCircleUpFill0Wght300Grad0Opsz48'
import IconArrowCircleUpFill0Wght400Grad0Opsz48 from '../components/ArrowCircleUpFill0Wght400Grad0Opsz48'
import IconArrowCircleUpFill0Wght500Grad0Opsz48 from '../components/ArrowCircleUpFill0Wght500Grad0Opsz48'
import IconArrowCircleUpFill0Wght600Grad0Opsz48 from '../components/ArrowCircleUpFill0Wght600Grad0Opsz48'
import IconArrowCircleUpFill0Wght700Grad0Opsz48 from '../components/ArrowCircleUpFill0Wght700Grad0Opsz48'
import IconArrowCircleUpFill1Wght100Grad0Opsz48 from '../components/ArrowCircleUpFill1Wght100Grad0Opsz48'
import IconArrowCircleUpFill1Wght200Grad0Opsz48 from '../components/ArrowCircleUpFill1Wght200Grad0Opsz48'
import IconArrowCircleUpFill1Wght300Grad0Opsz48 from '../components/ArrowCircleUpFill1Wght300Grad0Opsz48'
import IconArrowCircleUpFill1Wght400Grad0Opsz48 from '../components/ArrowCircleUpFill1Wght400Grad0Opsz48'
import IconArrowCircleUpFill1Wght500Grad0Opsz48 from '../components/ArrowCircleUpFill1Wght500Grad0Opsz48'
import IconArrowCircleUpFill1Wght600Grad0Opsz48 from '../components/ArrowCircleUpFill1Wght600Grad0Opsz48'
import IconArrowCircleUpFill1Wght700Grad0Opsz48 from '../components/ArrowCircleUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowCircleUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowCircleUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowCircleUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowCircleUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowCircleUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowCircleUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowCircleUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowCircleUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowCircleUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowCircleUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowCircleUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowCircleUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowCircleUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowCircleUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowCircleUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
