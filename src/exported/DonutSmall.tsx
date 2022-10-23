import IconDonutSmallFill0Wght100Grad0Opsz48 from '../components/DonutSmallFill0Wght100Grad0Opsz48'
import IconDonutSmallFill0Wght200Grad0Opsz48 from '../components/DonutSmallFill0Wght200Grad0Opsz48'
import IconDonutSmallFill0Wght300Grad0Opsz48 from '../components/DonutSmallFill0Wght300Grad0Opsz48'
import IconDonutSmallFill0Wght400Grad0Opsz48 from '../components/DonutSmallFill0Wght400Grad0Opsz48'
import IconDonutSmallFill0Wght500Grad0Opsz48 from '../components/DonutSmallFill0Wght500Grad0Opsz48'
import IconDonutSmallFill0Wght600Grad0Opsz48 from '../components/DonutSmallFill0Wght600Grad0Opsz48'
import IconDonutSmallFill0Wght700Grad0Opsz48 from '../components/DonutSmallFill0Wght700Grad0Opsz48'
import IconDonutSmallFill1Wght100Grad0Opsz48 from '../components/DonutSmallFill1Wght100Grad0Opsz48'
import IconDonutSmallFill1Wght200Grad0Opsz48 from '../components/DonutSmallFill1Wght200Grad0Opsz48'
import IconDonutSmallFill1Wght300Grad0Opsz48 from '../components/DonutSmallFill1Wght300Grad0Opsz48'
import IconDonutSmallFill1Wght400Grad0Opsz48 from '../components/DonutSmallFill1Wght400Grad0Opsz48'
import IconDonutSmallFill1Wght500Grad0Opsz48 from '../components/DonutSmallFill1Wght500Grad0Opsz48'
import IconDonutSmallFill1Wght600Grad0Opsz48 from '../components/DonutSmallFill1Wght600Grad0Opsz48'
import IconDonutSmallFill1Wght700Grad0Opsz48 from '../components/DonutSmallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDonutSmall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDonutSmallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDonutSmallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDonutSmallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDonutSmallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDonutSmallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDonutSmallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDonutSmallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDonutSmallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDonutSmallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDonutSmallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDonutSmallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDonutSmallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDonutSmallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDonutSmallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
