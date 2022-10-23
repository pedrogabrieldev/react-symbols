import IconSunnySnowingFill0Wght100Grad0Opsz48 from '../components/SunnySnowingFill0Wght100Grad0Opsz48'
import IconSunnySnowingFill0Wght200Grad0Opsz48 from '../components/SunnySnowingFill0Wght200Grad0Opsz48'
import IconSunnySnowingFill0Wght300Grad0Opsz48 from '../components/SunnySnowingFill0Wght300Grad0Opsz48'
import IconSunnySnowingFill0Wght400Grad0Opsz48 from '../components/SunnySnowingFill0Wght400Grad0Opsz48'
import IconSunnySnowingFill0Wght500Grad0Opsz48 from '../components/SunnySnowingFill0Wght500Grad0Opsz48'
import IconSunnySnowingFill0Wght600Grad0Opsz48 from '../components/SunnySnowingFill0Wght600Grad0Opsz48'
import IconSunnySnowingFill0Wght700Grad0Opsz48 from '../components/SunnySnowingFill0Wght700Grad0Opsz48'
import IconSunnySnowingFill1Wght100Grad0Opsz48 from '../components/SunnySnowingFill1Wght100Grad0Opsz48'
import IconSunnySnowingFill1Wght200Grad0Opsz48 from '../components/SunnySnowingFill1Wght200Grad0Opsz48'
import IconSunnySnowingFill1Wght300Grad0Opsz48 from '../components/SunnySnowingFill1Wght300Grad0Opsz48'
import IconSunnySnowingFill1Wght400Grad0Opsz48 from '../components/SunnySnowingFill1Wght400Grad0Opsz48'
import IconSunnySnowingFill1Wght500Grad0Opsz48 from '../components/SunnySnowingFill1Wght500Grad0Opsz48'
import IconSunnySnowingFill1Wght600Grad0Opsz48 from '../components/SunnySnowingFill1Wght600Grad0Opsz48'
import IconSunnySnowingFill1Wght700Grad0Opsz48 from '../components/SunnySnowingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSunnySnowing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSunnySnowingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSunnySnowingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSunnySnowingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSunnySnowingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSunnySnowingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSunnySnowingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSunnySnowingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSunnySnowingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSunnySnowingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSunnySnowingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSunnySnowingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSunnySnowingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSunnySnowingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSunnySnowingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
