import IconLowPriorityFill0Wght100Grad0Opsz48 from '../components/LowPriorityFill0Wght100Grad0Opsz48'
import IconLowPriorityFill0Wght200Grad0Opsz48 from '../components/LowPriorityFill0Wght200Grad0Opsz48'
import IconLowPriorityFill0Wght300Grad0Opsz48 from '../components/LowPriorityFill0Wght300Grad0Opsz48'
import IconLowPriorityFill0Wght400Grad0Opsz48 from '../components/LowPriorityFill0Wght400Grad0Opsz48'
import IconLowPriorityFill0Wght500Grad0Opsz48 from '../components/LowPriorityFill0Wght500Grad0Opsz48'
import IconLowPriorityFill0Wght600Grad0Opsz48 from '../components/LowPriorityFill0Wght600Grad0Opsz48'
import IconLowPriorityFill0Wght700Grad0Opsz48 from '../components/LowPriorityFill0Wght700Grad0Opsz48'
import IconLowPriorityFill1Wght100Grad0Opsz48 from '../components/LowPriorityFill1Wght100Grad0Opsz48'
import IconLowPriorityFill1Wght200Grad0Opsz48 from '../components/LowPriorityFill1Wght200Grad0Opsz48'
import IconLowPriorityFill1Wght300Grad0Opsz48 from '../components/LowPriorityFill1Wght300Grad0Opsz48'
import IconLowPriorityFill1Wght400Grad0Opsz48 from '../components/LowPriorityFill1Wght400Grad0Opsz48'
import IconLowPriorityFill1Wght500Grad0Opsz48 from '../components/LowPriorityFill1Wght500Grad0Opsz48'
import IconLowPriorityFill1Wght600Grad0Opsz48 from '../components/LowPriorityFill1Wght600Grad0Opsz48'
import IconLowPriorityFill1Wght700Grad0Opsz48 from '../components/LowPriorityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLowPriority = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLowPriorityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLowPriorityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLowPriorityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLowPriorityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLowPriorityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLowPriorityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLowPriorityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLowPriorityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLowPriorityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLowPriorityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLowPriorityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLowPriorityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLowPriorityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLowPriorityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
