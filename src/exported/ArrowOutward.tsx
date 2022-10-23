import IconArrowOutwardFill0Wght100Grad0Opsz48 from '../components/ArrowOutwardFill0Wght100Grad0Opsz48'
import IconArrowOutwardFill0Wght200Grad0Opsz48 from '../components/ArrowOutwardFill0Wght200Grad0Opsz48'
import IconArrowOutwardFill0Wght300Grad0Opsz48 from '../components/ArrowOutwardFill0Wght300Grad0Opsz48'
import IconArrowOutwardFill0Wght400Grad0Opsz48 from '../components/ArrowOutwardFill0Wght400Grad0Opsz48'
import IconArrowOutwardFill0Wght500Grad0Opsz48 from '../components/ArrowOutwardFill0Wght500Grad0Opsz48'
import IconArrowOutwardFill0Wght600Grad0Opsz48 from '../components/ArrowOutwardFill0Wght600Grad0Opsz48'
import IconArrowOutwardFill0Wght700Grad0Opsz48 from '../components/ArrowOutwardFill0Wght700Grad0Opsz48'
import IconArrowOutwardFill1Wght100Grad0Opsz48 from '../components/ArrowOutwardFill1Wght100Grad0Opsz48'
import IconArrowOutwardFill1Wght200Grad0Opsz48 from '../components/ArrowOutwardFill1Wght200Grad0Opsz48'
import IconArrowOutwardFill1Wght300Grad0Opsz48 from '../components/ArrowOutwardFill1Wght300Grad0Opsz48'
import IconArrowOutwardFill1Wght400Grad0Opsz48 from '../components/ArrowOutwardFill1Wght400Grad0Opsz48'
import IconArrowOutwardFill1Wght500Grad0Opsz48 from '../components/ArrowOutwardFill1Wght500Grad0Opsz48'
import IconArrowOutwardFill1Wght600Grad0Opsz48 from '../components/ArrowOutwardFill1Wght600Grad0Opsz48'
import IconArrowOutwardFill1Wght700Grad0Opsz48 from '../components/ArrowOutwardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowOutward = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowOutwardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowOutwardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowOutwardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowOutwardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowOutwardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowOutwardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowOutwardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowOutwardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowOutwardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowOutwardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowOutwardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowOutwardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowOutwardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowOutwardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
