import IconWestFill0Wght100Grad0Opsz48 from '../components/WestFill0Wght100Grad0Opsz48'
import IconWestFill0Wght200Grad0Opsz48 from '../components/WestFill0Wght200Grad0Opsz48'
import IconWestFill0Wght300Grad0Opsz48 from '../components/WestFill0Wght300Grad0Opsz48'
import IconWestFill0Wght400Grad0Opsz48 from '../components/WestFill0Wght400Grad0Opsz48'
import IconWestFill0Wght500Grad0Opsz48 from '../components/WestFill0Wght500Grad0Opsz48'
import IconWestFill0Wght600Grad0Opsz48 from '../components/WestFill0Wght600Grad0Opsz48'
import IconWestFill0Wght700Grad0Opsz48 from '../components/WestFill0Wght700Grad0Opsz48'
import IconWestFill1Wght100Grad0Opsz48 from '../components/WestFill1Wght100Grad0Opsz48'
import IconWestFill1Wght200Grad0Opsz48 from '../components/WestFill1Wght200Grad0Opsz48'
import IconWestFill1Wght300Grad0Opsz48 from '../components/WestFill1Wght300Grad0Opsz48'
import IconWestFill1Wght400Grad0Opsz48 from '../components/WestFill1Wght400Grad0Opsz48'
import IconWestFill1Wght500Grad0Opsz48 from '../components/WestFill1Wght500Grad0Opsz48'
import IconWestFill1Wght600Grad0Opsz48 from '../components/WestFill1Wght600Grad0Opsz48'
import IconWestFill1Wght700Grad0Opsz48 from '../components/WestFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWest = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWestFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWestFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWestFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWestFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWestFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWestFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWestFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWestFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWestFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWestFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWestFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWestFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWestFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWestFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
