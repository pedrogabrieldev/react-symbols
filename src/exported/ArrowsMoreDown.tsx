import IconArrowsMoreDownFill0Wght100Grad0Opsz48 from '../components/ArrowsMoreDownFill0Wght100Grad0Opsz48'
import IconArrowsMoreDownFill0Wght200Grad0Opsz48 from '../components/ArrowsMoreDownFill0Wght200Grad0Opsz48'
import IconArrowsMoreDownFill0Wght300Grad0Opsz48 from '../components/ArrowsMoreDownFill0Wght300Grad0Opsz48'
import IconArrowsMoreDownFill0Wght400Grad0Opsz48 from '../components/ArrowsMoreDownFill0Wght400Grad0Opsz48'
import IconArrowsMoreDownFill0Wght500Grad0Opsz48 from '../components/ArrowsMoreDownFill0Wght500Grad0Opsz48'
import IconArrowsMoreDownFill0Wght600Grad0Opsz48 from '../components/ArrowsMoreDownFill0Wght600Grad0Opsz48'
import IconArrowsMoreDownFill0Wght700Grad0Opsz48 from '../components/ArrowsMoreDownFill0Wght700Grad0Opsz48'
import IconArrowsMoreDownFill1Wght100Grad0Opsz48 from '../components/ArrowsMoreDownFill1Wght100Grad0Opsz48'
import IconArrowsMoreDownFill1Wght200Grad0Opsz48 from '../components/ArrowsMoreDownFill1Wght200Grad0Opsz48'
import IconArrowsMoreDownFill1Wght300Grad0Opsz48 from '../components/ArrowsMoreDownFill1Wght300Grad0Opsz48'
import IconArrowsMoreDownFill1Wght400Grad0Opsz48 from '../components/ArrowsMoreDownFill1Wght400Grad0Opsz48'
import IconArrowsMoreDownFill1Wght500Grad0Opsz48 from '../components/ArrowsMoreDownFill1Wght500Grad0Opsz48'
import IconArrowsMoreDownFill1Wght600Grad0Opsz48 from '../components/ArrowsMoreDownFill1Wght600Grad0Opsz48'
import IconArrowsMoreDownFill1Wght700Grad0Opsz48 from '../components/ArrowsMoreDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowsMoreDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowsMoreDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowsMoreDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowsMoreDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowsMoreDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowsMoreDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowsMoreDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowsMoreDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowsMoreDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowsMoreDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowsMoreDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowsMoreDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowsMoreDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowsMoreDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowsMoreDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
