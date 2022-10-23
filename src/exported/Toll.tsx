import IconTollFill0Wght100Grad0Opsz48 from '../components/TollFill0Wght100Grad0Opsz48'
import IconTollFill0Wght200Grad0Opsz48 from '../components/TollFill0Wght200Grad0Opsz48'
import IconTollFill0Wght300Grad0Opsz48 from '../components/TollFill0Wght300Grad0Opsz48'
import IconTollFill0Wght400Grad0Opsz48 from '../components/TollFill0Wght400Grad0Opsz48'
import IconTollFill0Wght500Grad0Opsz48 from '../components/TollFill0Wght500Grad0Opsz48'
import IconTollFill0Wght600Grad0Opsz48 from '../components/TollFill0Wght600Grad0Opsz48'
import IconTollFill0Wght700Grad0Opsz48 from '../components/TollFill0Wght700Grad0Opsz48'
import IconTollFill1Wght100Grad0Opsz48 from '../components/TollFill1Wght100Grad0Opsz48'
import IconTollFill1Wght200Grad0Opsz48 from '../components/TollFill1Wght200Grad0Opsz48'
import IconTollFill1Wght300Grad0Opsz48 from '../components/TollFill1Wght300Grad0Opsz48'
import IconTollFill1Wght400Grad0Opsz48 from '../components/TollFill1Wght400Grad0Opsz48'
import IconTollFill1Wght500Grad0Opsz48 from '../components/TollFill1Wght500Grad0Opsz48'
import IconTollFill1Wght600Grad0Opsz48 from '../components/TollFill1Wght600Grad0Opsz48'
import IconTollFill1Wght700Grad0Opsz48 from '../components/TollFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTollFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTollFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTollFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTollFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTollFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTollFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTollFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTollFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTollFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTollFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTollFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTollFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTollFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTollFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
