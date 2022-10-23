import IconPriorityHighFill0Wght100Grad0Opsz48 from '../components/PriorityHighFill0Wght100Grad0Opsz48'
import IconPriorityHighFill0Wght200Grad0Opsz48 from '../components/PriorityHighFill0Wght200Grad0Opsz48'
import IconPriorityHighFill0Wght300Grad0Opsz48 from '../components/PriorityHighFill0Wght300Grad0Opsz48'
import IconPriorityHighFill0Wght400Grad0Opsz48 from '../components/PriorityHighFill0Wght400Grad0Opsz48'
import IconPriorityHighFill0Wght500Grad0Opsz48 from '../components/PriorityHighFill0Wght500Grad0Opsz48'
import IconPriorityHighFill0Wght600Grad0Opsz48 from '../components/PriorityHighFill0Wght600Grad0Opsz48'
import IconPriorityHighFill0Wght700Grad0Opsz48 from '../components/PriorityHighFill0Wght700Grad0Opsz48'
import IconPriorityHighFill1Wght100Grad0Opsz48 from '../components/PriorityHighFill1Wght100Grad0Opsz48'
import IconPriorityHighFill1Wght200Grad0Opsz48 from '../components/PriorityHighFill1Wght200Grad0Opsz48'
import IconPriorityHighFill1Wght300Grad0Opsz48 from '../components/PriorityHighFill1Wght300Grad0Opsz48'
import IconPriorityHighFill1Wght400Grad0Opsz48 from '../components/PriorityHighFill1Wght400Grad0Opsz48'
import IconPriorityHighFill1Wght500Grad0Opsz48 from '../components/PriorityHighFill1Wght500Grad0Opsz48'
import IconPriorityHighFill1Wght600Grad0Opsz48 from '../components/PriorityHighFill1Wght600Grad0Opsz48'
import IconPriorityHighFill1Wght700Grad0Opsz48 from '../components/PriorityHighFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPriorityHigh = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPriorityHighFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPriorityHighFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPriorityHighFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPriorityHighFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPriorityHighFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPriorityHighFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPriorityHighFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPriorityHighFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPriorityHighFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPriorityHighFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPriorityHighFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPriorityHighFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPriorityHighFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPriorityHighFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
