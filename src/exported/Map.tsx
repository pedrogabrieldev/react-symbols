import IconMapFill0Wght100Grad0Opsz48 from '../components/MapFill0Wght100Grad0Opsz48'
import IconMapFill0Wght200Grad0Opsz48 from '../components/MapFill0Wght200Grad0Opsz48'
import IconMapFill0Wght300Grad0Opsz48 from '../components/MapFill0Wght300Grad0Opsz48'
import IconMapFill0Wght400Grad0Opsz48 from '../components/MapFill0Wght400Grad0Opsz48'
import IconMapFill0Wght500Grad0Opsz48 from '../components/MapFill0Wght500Grad0Opsz48'
import IconMapFill0Wght600Grad0Opsz48 from '../components/MapFill0Wght600Grad0Opsz48'
import IconMapFill0Wght700Grad0Opsz48 from '../components/MapFill0Wght700Grad0Opsz48'
import IconMapFill1Wght100Grad0Opsz48 from '../components/MapFill1Wght100Grad0Opsz48'
import IconMapFill1Wght200Grad0Opsz48 from '../components/MapFill1Wght200Grad0Opsz48'
import IconMapFill1Wght300Grad0Opsz48 from '../components/MapFill1Wght300Grad0Opsz48'
import IconMapFill1Wght400Grad0Opsz48 from '../components/MapFill1Wght400Grad0Opsz48'
import IconMapFill1Wght500Grad0Opsz48 from '../components/MapFill1Wght500Grad0Opsz48'
import IconMapFill1Wght600Grad0Opsz48 from '../components/MapFill1Wght600Grad0Opsz48'
import IconMapFill1Wght700Grad0Opsz48 from '../components/MapFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMap = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMapFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMapFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMapFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMapFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMapFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMapFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMapFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMapFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMapFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMapFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMapFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMapFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMapFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMapFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
