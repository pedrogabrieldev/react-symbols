import IconDiningFill0Wght100Grad0Opsz48 from '../components/DiningFill0Wght100Grad0Opsz48'
import IconDiningFill0Wght200Grad0Opsz48 from '../components/DiningFill0Wght200Grad0Opsz48'
import IconDiningFill0Wght300Grad0Opsz48 from '../components/DiningFill0Wght300Grad0Opsz48'
import IconDiningFill0Wght400Grad0Opsz48 from '../components/DiningFill0Wght400Grad0Opsz48'
import IconDiningFill0Wght500Grad0Opsz48 from '../components/DiningFill0Wght500Grad0Opsz48'
import IconDiningFill0Wght600Grad0Opsz48 from '../components/DiningFill0Wght600Grad0Opsz48'
import IconDiningFill0Wght700Grad0Opsz48 from '../components/DiningFill0Wght700Grad0Opsz48'
import IconDiningFill1Wght100Grad0Opsz48 from '../components/DiningFill1Wght100Grad0Opsz48'
import IconDiningFill1Wght200Grad0Opsz48 from '../components/DiningFill1Wght200Grad0Opsz48'
import IconDiningFill1Wght300Grad0Opsz48 from '../components/DiningFill1Wght300Grad0Opsz48'
import IconDiningFill1Wght400Grad0Opsz48 from '../components/DiningFill1Wght400Grad0Opsz48'
import IconDiningFill1Wght500Grad0Opsz48 from '../components/DiningFill1Wght500Grad0Opsz48'
import IconDiningFill1Wght600Grad0Opsz48 from '../components/DiningFill1Wght600Grad0Opsz48'
import IconDiningFill1Wght700Grad0Opsz48 from '../components/DiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
