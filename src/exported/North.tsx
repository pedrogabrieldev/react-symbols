import IconNorthFill0Wght100Grad0Opsz48 from '../components/NorthFill0Wght100Grad0Opsz48'
import IconNorthFill0Wght200Grad0Opsz48 from '../components/NorthFill0Wght200Grad0Opsz48'
import IconNorthFill0Wght300Grad0Opsz48 from '../components/NorthFill0Wght300Grad0Opsz48'
import IconNorthFill0Wght400Grad0Opsz48 from '../components/NorthFill0Wght400Grad0Opsz48'
import IconNorthFill0Wght500Grad0Opsz48 from '../components/NorthFill0Wght500Grad0Opsz48'
import IconNorthFill0Wght600Grad0Opsz48 from '../components/NorthFill0Wght600Grad0Opsz48'
import IconNorthFill0Wght700Grad0Opsz48 from '../components/NorthFill0Wght700Grad0Opsz48'
import IconNorthFill1Wght100Grad0Opsz48 from '../components/NorthFill1Wght100Grad0Opsz48'
import IconNorthFill1Wght200Grad0Opsz48 from '../components/NorthFill1Wght200Grad0Opsz48'
import IconNorthFill1Wght300Grad0Opsz48 from '../components/NorthFill1Wght300Grad0Opsz48'
import IconNorthFill1Wght400Grad0Opsz48 from '../components/NorthFill1Wght400Grad0Opsz48'
import IconNorthFill1Wght500Grad0Opsz48 from '../components/NorthFill1Wght500Grad0Opsz48'
import IconNorthFill1Wght600Grad0Opsz48 from '../components/NorthFill1Wght600Grad0Opsz48'
import IconNorthFill1Wght700Grad0Opsz48 from '../components/NorthFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNorth = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNorthFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNorthFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNorthFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNorthFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNorthFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNorthFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNorthFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNorthFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNorthFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNorthFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNorthFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNorthFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNorthFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNorthFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
