import IconSouthWestFill0Wght100Grad0Opsz48 from '../components/SouthWestFill0Wght100Grad0Opsz48'
import IconSouthWestFill0Wght200Grad0Opsz48 from '../components/SouthWestFill0Wght200Grad0Opsz48'
import IconSouthWestFill0Wght300Grad0Opsz48 from '../components/SouthWestFill0Wght300Grad0Opsz48'
import IconSouthWestFill0Wght400Grad0Opsz48 from '../components/SouthWestFill0Wght400Grad0Opsz48'
import IconSouthWestFill0Wght500Grad0Opsz48 from '../components/SouthWestFill0Wght500Grad0Opsz48'
import IconSouthWestFill0Wght600Grad0Opsz48 from '../components/SouthWestFill0Wght600Grad0Opsz48'
import IconSouthWestFill0Wght700Grad0Opsz48 from '../components/SouthWestFill0Wght700Grad0Opsz48'
import IconSouthWestFill1Wght100Grad0Opsz48 from '../components/SouthWestFill1Wght100Grad0Opsz48'
import IconSouthWestFill1Wght200Grad0Opsz48 from '../components/SouthWestFill1Wght200Grad0Opsz48'
import IconSouthWestFill1Wght300Grad0Opsz48 from '../components/SouthWestFill1Wght300Grad0Opsz48'
import IconSouthWestFill1Wght400Grad0Opsz48 from '../components/SouthWestFill1Wght400Grad0Opsz48'
import IconSouthWestFill1Wght500Grad0Opsz48 from '../components/SouthWestFill1Wght500Grad0Opsz48'
import IconSouthWestFill1Wght600Grad0Opsz48 from '../components/SouthWestFill1Wght600Grad0Opsz48'
import IconSouthWestFill1Wght700Grad0Opsz48 from '../components/SouthWestFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSouthWest = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSouthWestFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSouthWestFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSouthWestFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSouthWestFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSouthWestFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSouthWestFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSouthWestFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSouthWestFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSouthWestFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSouthWestFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSouthWestFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSouthWestFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSouthWestFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSouthWestFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
