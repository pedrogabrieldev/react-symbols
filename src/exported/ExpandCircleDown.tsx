import IconExpandCircleDownFill0Wght100Grad0Opsz48 from '../components/ExpandCircleDownFill0Wght100Grad0Opsz48'
import IconExpandCircleDownFill0Wght200Grad0Opsz48 from '../components/ExpandCircleDownFill0Wght200Grad0Opsz48'
import IconExpandCircleDownFill0Wght300Grad0Opsz48 from '../components/ExpandCircleDownFill0Wght300Grad0Opsz48'
import IconExpandCircleDownFill0Wght400Grad0Opsz48 from '../components/ExpandCircleDownFill0Wght400Grad0Opsz48'
import IconExpandCircleDownFill0Wght500Grad0Opsz48 from '../components/ExpandCircleDownFill0Wght500Grad0Opsz48'
import IconExpandCircleDownFill0Wght600Grad0Opsz48 from '../components/ExpandCircleDownFill0Wght600Grad0Opsz48'
import IconExpandCircleDownFill0Wght700Grad0Opsz48 from '../components/ExpandCircleDownFill0Wght700Grad0Opsz48'
import IconExpandCircleDownFill1Wght100Grad0Opsz48 from '../components/ExpandCircleDownFill1Wght100Grad0Opsz48'
import IconExpandCircleDownFill1Wght200Grad0Opsz48 from '../components/ExpandCircleDownFill1Wght200Grad0Opsz48'
import IconExpandCircleDownFill1Wght300Grad0Opsz48 from '../components/ExpandCircleDownFill1Wght300Grad0Opsz48'
import IconExpandCircleDownFill1Wght400Grad0Opsz48 from '../components/ExpandCircleDownFill1Wght400Grad0Opsz48'
import IconExpandCircleDownFill1Wght500Grad0Opsz48 from '../components/ExpandCircleDownFill1Wght500Grad0Opsz48'
import IconExpandCircleDownFill1Wght600Grad0Opsz48 from '../components/ExpandCircleDownFill1Wght600Grad0Opsz48'
import IconExpandCircleDownFill1Wght700Grad0Opsz48 from '../components/ExpandCircleDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExpandCircleDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExpandCircleDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExpandCircleDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExpandCircleDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExpandCircleDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExpandCircleDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExpandCircleDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExpandCircleDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExpandCircleDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExpandCircleDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExpandCircleDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExpandCircleDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExpandCircleDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExpandCircleDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExpandCircleDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
