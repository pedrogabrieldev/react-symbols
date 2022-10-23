import IconArrowDropUpFill0Wght100Grad0Opsz48 from '../components/ArrowDropUpFill0Wght100Grad0Opsz48'
import IconArrowDropUpFill0Wght200Grad0Opsz48 from '../components/ArrowDropUpFill0Wght200Grad0Opsz48'
import IconArrowDropUpFill0Wght300Grad0Opsz48 from '../components/ArrowDropUpFill0Wght300Grad0Opsz48'
import IconArrowDropUpFill0Wght400Grad0Opsz48 from '../components/ArrowDropUpFill0Wght400Grad0Opsz48'
import IconArrowDropUpFill0Wght500Grad0Opsz48 from '../components/ArrowDropUpFill0Wght500Grad0Opsz48'
import IconArrowDropUpFill0Wght600Grad0Opsz48 from '../components/ArrowDropUpFill0Wght600Grad0Opsz48'
import IconArrowDropUpFill0Wght700Grad0Opsz48 from '../components/ArrowDropUpFill0Wght700Grad0Opsz48'
import IconArrowDropUpFill1Wght100Grad0Opsz48 from '../components/ArrowDropUpFill1Wght100Grad0Opsz48'
import IconArrowDropUpFill1Wght200Grad0Opsz48 from '../components/ArrowDropUpFill1Wght200Grad0Opsz48'
import IconArrowDropUpFill1Wght300Grad0Opsz48 from '../components/ArrowDropUpFill1Wght300Grad0Opsz48'
import IconArrowDropUpFill1Wght400Grad0Opsz48 from '../components/ArrowDropUpFill1Wght400Grad0Opsz48'
import IconArrowDropUpFill1Wght500Grad0Opsz48 from '../components/ArrowDropUpFill1Wght500Grad0Opsz48'
import IconArrowDropUpFill1Wght600Grad0Opsz48 from '../components/ArrowDropUpFill1Wght600Grad0Opsz48'
import IconArrowDropUpFill1Wght700Grad0Opsz48 from '../components/ArrowDropUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowDropUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowDropUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowDropUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowDropUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowDropUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowDropUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowDropUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowDropUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowDropUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowDropUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowDropUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowDropUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowDropUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowDropUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowDropUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
