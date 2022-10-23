import IconSouthFill0Wght100Grad0Opsz48 from '../components/SouthFill0Wght100Grad0Opsz48'
import IconSouthFill0Wght200Grad0Opsz48 from '../components/SouthFill0Wght200Grad0Opsz48'
import IconSouthFill0Wght300Grad0Opsz48 from '../components/SouthFill0Wght300Grad0Opsz48'
import IconSouthFill0Wght400Grad0Opsz48 from '../components/SouthFill0Wght400Grad0Opsz48'
import IconSouthFill0Wght500Grad0Opsz48 from '../components/SouthFill0Wght500Grad0Opsz48'
import IconSouthFill0Wght600Grad0Opsz48 from '../components/SouthFill0Wght600Grad0Opsz48'
import IconSouthFill0Wght700Grad0Opsz48 from '../components/SouthFill0Wght700Grad0Opsz48'
import IconSouthFill1Wght100Grad0Opsz48 from '../components/SouthFill1Wght100Grad0Opsz48'
import IconSouthFill1Wght200Grad0Opsz48 from '../components/SouthFill1Wght200Grad0Opsz48'
import IconSouthFill1Wght300Grad0Opsz48 from '../components/SouthFill1Wght300Grad0Opsz48'
import IconSouthFill1Wght400Grad0Opsz48 from '../components/SouthFill1Wght400Grad0Opsz48'
import IconSouthFill1Wght500Grad0Opsz48 from '../components/SouthFill1Wght500Grad0Opsz48'
import IconSouthFill1Wght600Grad0Opsz48 from '../components/SouthFill1Wght600Grad0Opsz48'
import IconSouthFill1Wght700Grad0Opsz48 from '../components/SouthFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSouth = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSouthFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSouthFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSouthFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSouthFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSouthFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSouthFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSouthFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSouthFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSouthFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSouthFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSouthFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSouthFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSouthFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSouthFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
