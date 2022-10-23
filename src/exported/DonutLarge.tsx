import IconDonutLargeFill0Wght100Grad0Opsz48 from '../components/DonutLargeFill0Wght100Grad0Opsz48'
import IconDonutLargeFill0Wght200Grad0Opsz48 from '../components/DonutLargeFill0Wght200Grad0Opsz48'
import IconDonutLargeFill0Wght300Grad0Opsz48 from '../components/DonutLargeFill0Wght300Grad0Opsz48'
import IconDonutLargeFill0Wght400Grad0Opsz48 from '../components/DonutLargeFill0Wght400Grad0Opsz48'
import IconDonutLargeFill0Wght500Grad0Opsz48 from '../components/DonutLargeFill0Wght500Grad0Opsz48'
import IconDonutLargeFill0Wght600Grad0Opsz48 from '../components/DonutLargeFill0Wght600Grad0Opsz48'
import IconDonutLargeFill0Wght700Grad0Opsz48 from '../components/DonutLargeFill0Wght700Grad0Opsz48'
import IconDonutLargeFill1Wght100Grad0Opsz48 from '../components/DonutLargeFill1Wght100Grad0Opsz48'
import IconDonutLargeFill1Wght200Grad0Opsz48 from '../components/DonutLargeFill1Wght200Grad0Opsz48'
import IconDonutLargeFill1Wght300Grad0Opsz48 from '../components/DonutLargeFill1Wght300Grad0Opsz48'
import IconDonutLargeFill1Wght400Grad0Opsz48 from '../components/DonutLargeFill1Wght400Grad0Opsz48'
import IconDonutLargeFill1Wght500Grad0Opsz48 from '../components/DonutLargeFill1Wght500Grad0Opsz48'
import IconDonutLargeFill1Wght600Grad0Opsz48 from '../components/DonutLargeFill1Wght600Grad0Opsz48'
import IconDonutLargeFill1Wght700Grad0Opsz48 from '../components/DonutLargeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDonutLarge = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDonutLargeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDonutLargeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDonutLargeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDonutLargeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDonutLargeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDonutLargeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDonutLargeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDonutLargeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDonutLargeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDonutLargeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDonutLargeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDonutLargeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDonutLargeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDonutLargeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
