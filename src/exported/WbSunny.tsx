import IconWbSunnyFill0Wght100Grad0Opsz48 from '../components/WbSunnyFill0Wght100Grad0Opsz48'
import IconWbSunnyFill0Wght200Grad0Opsz48 from '../components/WbSunnyFill0Wght200Grad0Opsz48'
import IconWbSunnyFill0Wght300Grad0Opsz48 from '../components/WbSunnyFill0Wght300Grad0Opsz48'
import IconWbSunnyFill0Wght400Grad0Opsz48 from '../components/WbSunnyFill0Wght400Grad0Opsz48'
import IconWbSunnyFill0Wght500Grad0Opsz48 from '../components/WbSunnyFill0Wght500Grad0Opsz48'
import IconWbSunnyFill0Wght600Grad0Opsz48 from '../components/WbSunnyFill0Wght600Grad0Opsz48'
import IconWbSunnyFill0Wght700Grad0Opsz48 from '../components/WbSunnyFill0Wght700Grad0Opsz48'
import IconWbSunnyFill1Wght100Grad0Opsz48 from '../components/WbSunnyFill1Wght100Grad0Opsz48'
import IconWbSunnyFill1Wght200Grad0Opsz48 from '../components/WbSunnyFill1Wght200Grad0Opsz48'
import IconWbSunnyFill1Wght300Grad0Opsz48 from '../components/WbSunnyFill1Wght300Grad0Opsz48'
import IconWbSunnyFill1Wght400Grad0Opsz48 from '../components/WbSunnyFill1Wght400Grad0Opsz48'
import IconWbSunnyFill1Wght500Grad0Opsz48 from '../components/WbSunnyFill1Wght500Grad0Opsz48'
import IconWbSunnyFill1Wght600Grad0Opsz48 from '../components/WbSunnyFill1Wght600Grad0Opsz48'
import IconWbSunnyFill1Wght700Grad0Opsz48 from '../components/WbSunnyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWbSunny = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWbSunnyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWbSunnyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWbSunnyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWbSunnyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWbSunnyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWbSunnyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWbSunnyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWbSunnyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWbSunnyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWbSunnyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWbSunnyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWbSunnyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWbSunnyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWbSunnyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
