import IconArrowCircleLeftFill0Wght100Grad0Opsz48 from '../components/ArrowCircleLeftFill0Wght100Grad0Opsz48'
import IconArrowCircleLeftFill0Wght200Grad0Opsz48 from '../components/ArrowCircleLeftFill0Wght200Grad0Opsz48'
import IconArrowCircleLeftFill0Wght300Grad0Opsz48 from '../components/ArrowCircleLeftFill0Wght300Grad0Opsz48'
import IconArrowCircleLeftFill0Wght400Grad0Opsz48 from '../components/ArrowCircleLeftFill0Wght400Grad0Opsz48'
import IconArrowCircleLeftFill0Wght500Grad0Opsz48 from '../components/ArrowCircleLeftFill0Wght500Grad0Opsz48'
import IconArrowCircleLeftFill0Wght600Grad0Opsz48 from '../components/ArrowCircleLeftFill0Wght600Grad0Opsz48'
import IconArrowCircleLeftFill0Wght700Grad0Opsz48 from '../components/ArrowCircleLeftFill0Wght700Grad0Opsz48'
import IconArrowCircleLeftFill1Wght100Grad0Opsz48 from '../components/ArrowCircleLeftFill1Wght100Grad0Opsz48'
import IconArrowCircleLeftFill1Wght200Grad0Opsz48 from '../components/ArrowCircleLeftFill1Wght200Grad0Opsz48'
import IconArrowCircleLeftFill1Wght300Grad0Opsz48 from '../components/ArrowCircleLeftFill1Wght300Grad0Opsz48'
import IconArrowCircleLeftFill1Wght400Grad0Opsz48 from '../components/ArrowCircleLeftFill1Wght400Grad0Opsz48'
import IconArrowCircleLeftFill1Wght500Grad0Opsz48 from '../components/ArrowCircleLeftFill1Wght500Grad0Opsz48'
import IconArrowCircleLeftFill1Wght600Grad0Opsz48 from '../components/ArrowCircleLeftFill1Wght600Grad0Opsz48'
import IconArrowCircleLeftFill1Wght700Grad0Opsz48 from '../components/ArrowCircleLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowCircleLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowCircleLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowCircleLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowCircleLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowCircleLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowCircleLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowCircleLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowCircleLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowCircleLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowCircleLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowCircleLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowCircleLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowCircleLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowCircleLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowCircleLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
