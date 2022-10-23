import IconSouthAmericaFill0Wght100Grad0Opsz48 from '../components/SouthAmericaFill0Wght100Grad0Opsz48'
import IconSouthAmericaFill0Wght200Grad0Opsz48 from '../components/SouthAmericaFill0Wght200Grad0Opsz48'
import IconSouthAmericaFill0Wght300Grad0Opsz48 from '../components/SouthAmericaFill0Wght300Grad0Opsz48'
import IconSouthAmericaFill0Wght400Grad0Opsz48 from '../components/SouthAmericaFill0Wght400Grad0Opsz48'
import IconSouthAmericaFill0Wght500Grad0Opsz48 from '../components/SouthAmericaFill0Wght500Grad0Opsz48'
import IconSouthAmericaFill0Wght600Grad0Opsz48 from '../components/SouthAmericaFill0Wght600Grad0Opsz48'
import IconSouthAmericaFill0Wght700Grad0Opsz48 from '../components/SouthAmericaFill0Wght700Grad0Opsz48'
import IconSouthAmericaFill1Wght100Grad0Opsz48 from '../components/SouthAmericaFill1Wght100Grad0Opsz48'
import IconSouthAmericaFill1Wght200Grad0Opsz48 from '../components/SouthAmericaFill1Wght200Grad0Opsz48'
import IconSouthAmericaFill1Wght300Grad0Opsz48 from '../components/SouthAmericaFill1Wght300Grad0Opsz48'
import IconSouthAmericaFill1Wght400Grad0Opsz48 from '../components/SouthAmericaFill1Wght400Grad0Opsz48'
import IconSouthAmericaFill1Wght500Grad0Opsz48 from '../components/SouthAmericaFill1Wght500Grad0Opsz48'
import IconSouthAmericaFill1Wght600Grad0Opsz48 from '../components/SouthAmericaFill1Wght600Grad0Opsz48'
import IconSouthAmericaFill1Wght700Grad0Opsz48 from '../components/SouthAmericaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSouthAmerica = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSouthAmericaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSouthAmericaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSouthAmericaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSouthAmericaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSouthAmericaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSouthAmericaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSouthAmericaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSouthAmericaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSouthAmericaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSouthAmericaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSouthAmericaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSouthAmericaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSouthAmericaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSouthAmericaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
