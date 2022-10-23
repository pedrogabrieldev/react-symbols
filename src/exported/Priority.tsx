import IconPriorityFill0Wght100Grad0Opsz48 from '../components/PriorityFill0Wght100Grad0Opsz48'
import IconPriorityFill0Wght200Grad0Opsz48 from '../components/PriorityFill0Wght200Grad0Opsz48'
import IconPriorityFill0Wght300Grad0Opsz48 from '../components/PriorityFill0Wght300Grad0Opsz48'
import IconPriorityFill0Wght400Grad0Opsz48 from '../components/PriorityFill0Wght400Grad0Opsz48'
import IconPriorityFill0Wght500Grad0Opsz48 from '../components/PriorityFill0Wght500Grad0Opsz48'
import IconPriorityFill0Wght600Grad0Opsz48 from '../components/PriorityFill0Wght600Grad0Opsz48'
import IconPriorityFill0Wght700Grad0Opsz48 from '../components/PriorityFill0Wght700Grad0Opsz48'
import IconPriorityFill1Wght100Grad0Opsz48 from '../components/PriorityFill1Wght100Grad0Opsz48'
import IconPriorityFill1Wght200Grad0Opsz48 from '../components/PriorityFill1Wght200Grad0Opsz48'
import IconPriorityFill1Wght300Grad0Opsz48 from '../components/PriorityFill1Wght300Grad0Opsz48'
import IconPriorityFill1Wght400Grad0Opsz48 from '../components/PriorityFill1Wght400Grad0Opsz48'
import IconPriorityFill1Wght500Grad0Opsz48 from '../components/PriorityFill1Wght500Grad0Opsz48'
import IconPriorityFill1Wght600Grad0Opsz48 from '../components/PriorityFill1Wght600Grad0Opsz48'
import IconPriorityFill1Wght700Grad0Opsz48 from '../components/PriorityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPriority = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPriorityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPriorityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPriorityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPriorityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPriorityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPriorityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPriorityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPriorityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPriorityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPriorityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPriorityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPriorityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPriorityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPriorityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
