import IconSunnyFill0Wght100Grad0Opsz48 from '../components/SunnyFill0Wght100Grad0Opsz48'
import IconSunnyFill0Wght200Grad0Opsz48 from '../components/SunnyFill0Wght200Grad0Opsz48'
import IconSunnyFill0Wght300Grad0Opsz48 from '../components/SunnyFill0Wght300Grad0Opsz48'
import IconSunnyFill0Wght400Grad0Opsz48 from '../components/SunnyFill0Wght400Grad0Opsz48'
import IconSunnyFill0Wght500Grad0Opsz48 from '../components/SunnyFill0Wght500Grad0Opsz48'
import IconSunnyFill0Wght600Grad0Opsz48 from '../components/SunnyFill0Wght600Grad0Opsz48'
import IconSunnyFill0Wght700Grad0Opsz48 from '../components/SunnyFill0Wght700Grad0Opsz48'
import IconSunnyFill1Wght100Grad0Opsz48 from '../components/SunnyFill1Wght100Grad0Opsz48'
import IconSunnyFill1Wght200Grad0Opsz48 from '../components/SunnyFill1Wght200Grad0Opsz48'
import IconSunnyFill1Wght300Grad0Opsz48 from '../components/SunnyFill1Wght300Grad0Opsz48'
import IconSunnyFill1Wght400Grad0Opsz48 from '../components/SunnyFill1Wght400Grad0Opsz48'
import IconSunnyFill1Wght500Grad0Opsz48 from '../components/SunnyFill1Wght500Grad0Opsz48'
import IconSunnyFill1Wght600Grad0Opsz48 from '../components/SunnyFill1Wght600Grad0Opsz48'
import IconSunnyFill1Wght700Grad0Opsz48 from '../components/SunnyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSunny = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSunnyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSunnyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSunnyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSunnyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSunnyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSunnyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSunnyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSunnyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSunnyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSunnyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSunnyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSunnyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSunnyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSunnyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
