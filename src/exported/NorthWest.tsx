import IconNorthWestFill0Wght100Grad0Opsz48 from '../components/NorthWestFill0Wght100Grad0Opsz48'
import IconNorthWestFill0Wght200Grad0Opsz48 from '../components/NorthWestFill0Wght200Grad0Opsz48'
import IconNorthWestFill0Wght300Grad0Opsz48 from '../components/NorthWestFill0Wght300Grad0Opsz48'
import IconNorthWestFill0Wght400Grad0Opsz48 from '../components/NorthWestFill0Wght400Grad0Opsz48'
import IconNorthWestFill0Wght500Grad0Opsz48 from '../components/NorthWestFill0Wght500Grad0Opsz48'
import IconNorthWestFill0Wght600Grad0Opsz48 from '../components/NorthWestFill0Wght600Grad0Opsz48'
import IconNorthWestFill0Wght700Grad0Opsz48 from '../components/NorthWestFill0Wght700Grad0Opsz48'
import IconNorthWestFill1Wght100Grad0Opsz48 from '../components/NorthWestFill1Wght100Grad0Opsz48'
import IconNorthWestFill1Wght200Grad0Opsz48 from '../components/NorthWestFill1Wght200Grad0Opsz48'
import IconNorthWestFill1Wght300Grad0Opsz48 from '../components/NorthWestFill1Wght300Grad0Opsz48'
import IconNorthWestFill1Wght400Grad0Opsz48 from '../components/NorthWestFill1Wght400Grad0Opsz48'
import IconNorthWestFill1Wght500Grad0Opsz48 from '../components/NorthWestFill1Wght500Grad0Opsz48'
import IconNorthWestFill1Wght600Grad0Opsz48 from '../components/NorthWestFill1Wght600Grad0Opsz48'
import IconNorthWestFill1Wght700Grad0Opsz48 from '../components/NorthWestFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNorthWest = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNorthWestFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNorthWestFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNorthWestFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNorthWestFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNorthWestFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNorthWestFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNorthWestFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNorthWestFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNorthWestFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNorthWestFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNorthWestFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNorthWestFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNorthWestFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNorthWestFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
