import IconArrowsMoreUpFill0Wght100Grad0Opsz48 from '../components/ArrowsMoreUpFill0Wght100Grad0Opsz48'
import IconArrowsMoreUpFill0Wght200Grad0Opsz48 from '../components/ArrowsMoreUpFill0Wght200Grad0Opsz48'
import IconArrowsMoreUpFill0Wght300Grad0Opsz48 from '../components/ArrowsMoreUpFill0Wght300Grad0Opsz48'
import IconArrowsMoreUpFill0Wght400Grad0Opsz48 from '../components/ArrowsMoreUpFill0Wght400Grad0Opsz48'
import IconArrowsMoreUpFill0Wght500Grad0Opsz48 from '../components/ArrowsMoreUpFill0Wght500Grad0Opsz48'
import IconArrowsMoreUpFill0Wght600Grad0Opsz48 from '../components/ArrowsMoreUpFill0Wght600Grad0Opsz48'
import IconArrowsMoreUpFill0Wght700Grad0Opsz48 from '../components/ArrowsMoreUpFill0Wght700Grad0Opsz48'
import IconArrowsMoreUpFill1Wght100Grad0Opsz48 from '../components/ArrowsMoreUpFill1Wght100Grad0Opsz48'
import IconArrowsMoreUpFill1Wght200Grad0Opsz48 from '../components/ArrowsMoreUpFill1Wght200Grad0Opsz48'
import IconArrowsMoreUpFill1Wght300Grad0Opsz48 from '../components/ArrowsMoreUpFill1Wght300Grad0Opsz48'
import IconArrowsMoreUpFill1Wght400Grad0Opsz48 from '../components/ArrowsMoreUpFill1Wght400Grad0Opsz48'
import IconArrowsMoreUpFill1Wght500Grad0Opsz48 from '../components/ArrowsMoreUpFill1Wght500Grad0Opsz48'
import IconArrowsMoreUpFill1Wght600Grad0Opsz48 from '../components/ArrowsMoreUpFill1Wght600Grad0Opsz48'
import IconArrowsMoreUpFill1Wght700Grad0Opsz48 from '../components/ArrowsMoreUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowsMoreUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowsMoreUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowsMoreUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowsMoreUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowsMoreUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowsMoreUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowsMoreUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowsMoreUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowsMoreUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowsMoreUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowsMoreUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowsMoreUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowsMoreUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowsMoreUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowsMoreUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
