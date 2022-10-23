import IconSouthEastFill0Wght100Grad0Opsz48 from '../components/SouthEastFill0Wght100Grad0Opsz48'
import IconSouthEastFill0Wght200Grad0Opsz48 from '../components/SouthEastFill0Wght200Grad0Opsz48'
import IconSouthEastFill0Wght300Grad0Opsz48 from '../components/SouthEastFill0Wght300Grad0Opsz48'
import IconSouthEastFill0Wght400Grad0Opsz48 from '../components/SouthEastFill0Wght400Grad0Opsz48'
import IconSouthEastFill0Wght500Grad0Opsz48 from '../components/SouthEastFill0Wght500Grad0Opsz48'
import IconSouthEastFill0Wght600Grad0Opsz48 from '../components/SouthEastFill0Wght600Grad0Opsz48'
import IconSouthEastFill0Wght700Grad0Opsz48 from '../components/SouthEastFill0Wght700Grad0Opsz48'
import IconSouthEastFill1Wght100Grad0Opsz48 from '../components/SouthEastFill1Wght100Grad0Opsz48'
import IconSouthEastFill1Wght200Grad0Opsz48 from '../components/SouthEastFill1Wght200Grad0Opsz48'
import IconSouthEastFill1Wght300Grad0Opsz48 from '../components/SouthEastFill1Wght300Grad0Opsz48'
import IconSouthEastFill1Wght400Grad0Opsz48 from '../components/SouthEastFill1Wght400Grad0Opsz48'
import IconSouthEastFill1Wght500Grad0Opsz48 from '../components/SouthEastFill1Wght500Grad0Opsz48'
import IconSouthEastFill1Wght600Grad0Opsz48 from '../components/SouthEastFill1Wght600Grad0Opsz48'
import IconSouthEastFill1Wght700Grad0Opsz48 from '../components/SouthEastFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSouthEast = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSouthEastFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSouthEastFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSouthEastFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSouthEastFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSouthEastFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSouthEastFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSouthEastFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSouthEastFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSouthEastFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSouthEastFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSouthEastFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSouthEastFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSouthEastFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSouthEastFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
