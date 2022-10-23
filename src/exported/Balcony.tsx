import IconBalconyFill0Wght100Grad0Opsz48 from '../components/BalconyFill0Wght100Grad0Opsz48'
import IconBalconyFill0Wght200Grad0Opsz48 from '../components/BalconyFill0Wght200Grad0Opsz48'
import IconBalconyFill0Wght300Grad0Opsz48 from '../components/BalconyFill0Wght300Grad0Opsz48'
import IconBalconyFill0Wght400Grad0Opsz48 from '../components/BalconyFill0Wght400Grad0Opsz48'
import IconBalconyFill0Wght500Grad0Opsz48 from '../components/BalconyFill0Wght500Grad0Opsz48'
import IconBalconyFill0Wght600Grad0Opsz48 from '../components/BalconyFill0Wght600Grad0Opsz48'
import IconBalconyFill0Wght700Grad0Opsz48 from '../components/BalconyFill0Wght700Grad0Opsz48'
import IconBalconyFill1Wght100Grad0Opsz48 from '../components/BalconyFill1Wght100Grad0Opsz48'
import IconBalconyFill1Wght200Grad0Opsz48 from '../components/BalconyFill1Wght200Grad0Opsz48'
import IconBalconyFill1Wght300Grad0Opsz48 from '../components/BalconyFill1Wght300Grad0Opsz48'
import IconBalconyFill1Wght400Grad0Opsz48 from '../components/BalconyFill1Wght400Grad0Opsz48'
import IconBalconyFill1Wght500Grad0Opsz48 from '../components/BalconyFill1Wght500Grad0Opsz48'
import IconBalconyFill1Wght600Grad0Opsz48 from '../components/BalconyFill1Wght600Grad0Opsz48'
import IconBalconyFill1Wght700Grad0Opsz48 from '../components/BalconyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBalcony = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBalconyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBalconyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBalconyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBalconyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBalconyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBalconyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBalconyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBalconyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBalconyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBalconyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBalconyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBalconyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBalconyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBalconyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
