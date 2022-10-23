import IconNorthEastFill0Wght100Grad0Opsz48 from '../components/NorthEastFill0Wght100Grad0Opsz48'
import IconNorthEastFill0Wght200Grad0Opsz48 from '../components/NorthEastFill0Wght200Grad0Opsz48'
import IconNorthEastFill0Wght300Grad0Opsz48 from '../components/NorthEastFill0Wght300Grad0Opsz48'
import IconNorthEastFill0Wght400Grad0Opsz48 from '../components/NorthEastFill0Wght400Grad0Opsz48'
import IconNorthEastFill0Wght500Grad0Opsz48 from '../components/NorthEastFill0Wght500Grad0Opsz48'
import IconNorthEastFill0Wght600Grad0Opsz48 from '../components/NorthEastFill0Wght600Grad0Opsz48'
import IconNorthEastFill0Wght700Grad0Opsz48 from '../components/NorthEastFill0Wght700Grad0Opsz48'
import IconNorthEastFill1Wght100Grad0Opsz48 from '../components/NorthEastFill1Wght100Grad0Opsz48'
import IconNorthEastFill1Wght200Grad0Opsz48 from '../components/NorthEastFill1Wght200Grad0Opsz48'
import IconNorthEastFill1Wght300Grad0Opsz48 from '../components/NorthEastFill1Wght300Grad0Opsz48'
import IconNorthEastFill1Wght400Grad0Opsz48 from '../components/NorthEastFill1Wght400Grad0Opsz48'
import IconNorthEastFill1Wght500Grad0Opsz48 from '../components/NorthEastFill1Wght500Grad0Opsz48'
import IconNorthEastFill1Wght600Grad0Opsz48 from '../components/NorthEastFill1Wght600Grad0Opsz48'
import IconNorthEastFill1Wght700Grad0Opsz48 from '../components/NorthEastFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNorthEast = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNorthEastFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNorthEastFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNorthEastFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNorthEastFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNorthEastFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNorthEastFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNorthEastFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNorthEastFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNorthEastFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNorthEastFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNorthEastFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNorthEastFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNorthEastFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNorthEastFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
