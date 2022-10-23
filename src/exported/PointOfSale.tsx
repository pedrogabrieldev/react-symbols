import IconPointOfSaleFill0Wght100Grad0Opsz48 from '../components/PointOfSaleFill0Wght100Grad0Opsz48'
import IconPointOfSaleFill0Wght200Grad0Opsz48 from '../components/PointOfSaleFill0Wght200Grad0Opsz48'
import IconPointOfSaleFill0Wght300Grad0Opsz48 from '../components/PointOfSaleFill0Wght300Grad0Opsz48'
import IconPointOfSaleFill0Wght400Grad0Opsz48 from '../components/PointOfSaleFill0Wght400Grad0Opsz48'
import IconPointOfSaleFill0Wght500Grad0Opsz48 from '../components/PointOfSaleFill0Wght500Grad0Opsz48'
import IconPointOfSaleFill0Wght600Grad0Opsz48 from '../components/PointOfSaleFill0Wght600Grad0Opsz48'
import IconPointOfSaleFill0Wght700Grad0Opsz48 from '../components/PointOfSaleFill0Wght700Grad0Opsz48'
import IconPointOfSaleFill1Wght100Grad0Opsz48 from '../components/PointOfSaleFill1Wght100Grad0Opsz48'
import IconPointOfSaleFill1Wght200Grad0Opsz48 from '../components/PointOfSaleFill1Wght200Grad0Opsz48'
import IconPointOfSaleFill1Wght300Grad0Opsz48 from '../components/PointOfSaleFill1Wght300Grad0Opsz48'
import IconPointOfSaleFill1Wght400Grad0Opsz48 from '../components/PointOfSaleFill1Wght400Grad0Opsz48'
import IconPointOfSaleFill1Wght500Grad0Opsz48 from '../components/PointOfSaleFill1Wght500Grad0Opsz48'
import IconPointOfSaleFill1Wght600Grad0Opsz48 from '../components/PointOfSaleFill1Wght600Grad0Opsz48'
import IconPointOfSaleFill1Wght700Grad0Opsz48 from '../components/PointOfSaleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPointOfSale = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPointOfSaleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPointOfSaleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPointOfSaleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPointOfSaleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPointOfSaleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPointOfSaleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPointOfSaleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPointOfSaleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPointOfSaleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPointOfSaleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPointOfSaleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPointOfSaleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPointOfSaleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPointOfSaleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
