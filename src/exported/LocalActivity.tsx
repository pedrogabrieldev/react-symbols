import IconLocalActivityFill0Wght100Grad0Opsz48 from '../components/LocalActivityFill0Wght100Grad0Opsz48'
import IconLocalActivityFill0Wght200Grad0Opsz48 from '../components/LocalActivityFill0Wght200Grad0Opsz48'
import IconLocalActivityFill0Wght300Grad0Opsz48 from '../components/LocalActivityFill0Wght300Grad0Opsz48'
import IconLocalActivityFill0Wght400Grad0Opsz48 from '../components/LocalActivityFill0Wght400Grad0Opsz48'
import IconLocalActivityFill0Wght500Grad0Opsz48 from '../components/LocalActivityFill0Wght500Grad0Opsz48'
import IconLocalActivityFill0Wght600Grad0Opsz48 from '../components/LocalActivityFill0Wght600Grad0Opsz48'
import IconLocalActivityFill0Wght700Grad0Opsz48 from '../components/LocalActivityFill0Wght700Grad0Opsz48'
import IconLocalActivityFill1Wght100Grad0Opsz48 from '../components/LocalActivityFill1Wght100Grad0Opsz48'
import IconLocalActivityFill1Wght200Grad0Opsz48 from '../components/LocalActivityFill1Wght200Grad0Opsz48'
import IconLocalActivityFill1Wght300Grad0Opsz48 from '../components/LocalActivityFill1Wght300Grad0Opsz48'
import IconLocalActivityFill1Wght400Grad0Opsz48 from '../components/LocalActivityFill1Wght400Grad0Opsz48'
import IconLocalActivityFill1Wght500Grad0Opsz48 from '../components/LocalActivityFill1Wght500Grad0Opsz48'
import IconLocalActivityFill1Wght600Grad0Opsz48 from '../components/LocalActivityFill1Wght600Grad0Opsz48'
import IconLocalActivityFill1Wght700Grad0Opsz48 from '../components/LocalActivityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalActivity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalActivityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalActivityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalActivityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalActivityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalActivityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalActivityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalActivityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalActivityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalActivityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalActivityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalActivityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalActivityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalActivityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalActivityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
