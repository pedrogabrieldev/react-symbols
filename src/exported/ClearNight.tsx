import IconClearNightFill0Wght100Grad0Opsz48 from '../components/ClearNightFill0Wght100Grad0Opsz48'
import IconClearNightFill0Wght200Grad0Opsz48 from '../components/ClearNightFill0Wght200Grad0Opsz48'
import IconClearNightFill0Wght300Grad0Opsz48 from '../components/ClearNightFill0Wght300Grad0Opsz48'
import IconClearNightFill0Wght400Grad0Opsz48 from '../components/ClearNightFill0Wght400Grad0Opsz48'
import IconClearNightFill0Wght500Grad0Opsz48 from '../components/ClearNightFill0Wght500Grad0Opsz48'
import IconClearNightFill0Wght600Grad0Opsz48 from '../components/ClearNightFill0Wght600Grad0Opsz48'
import IconClearNightFill0Wght700Grad0Opsz48 from '../components/ClearNightFill0Wght700Grad0Opsz48'
import IconClearNightFill1Wght100Grad0Opsz48 from '../components/ClearNightFill1Wght100Grad0Opsz48'
import IconClearNightFill1Wght200Grad0Opsz48 from '../components/ClearNightFill1Wght200Grad0Opsz48'
import IconClearNightFill1Wght300Grad0Opsz48 from '../components/ClearNightFill1Wght300Grad0Opsz48'
import IconClearNightFill1Wght400Grad0Opsz48 from '../components/ClearNightFill1Wght400Grad0Opsz48'
import IconClearNightFill1Wght500Grad0Opsz48 from '../components/ClearNightFill1Wght500Grad0Opsz48'
import IconClearNightFill1Wght600Grad0Opsz48 from '../components/ClearNightFill1Wght600Grad0Opsz48'
import IconClearNightFill1Wght700Grad0Opsz48 from '../components/ClearNightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconClearNight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconClearNightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconClearNightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconClearNightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconClearNightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconClearNightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconClearNightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconClearNightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconClearNightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconClearNightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconClearNightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconClearNightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconClearNightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconClearNightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconClearNightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
