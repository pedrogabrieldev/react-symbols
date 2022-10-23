import IconNightlightFill0Wght100Grad0Opsz48 from '../components/NightlightFill0Wght100Grad0Opsz48'
import IconNightlightFill0Wght200Grad0Opsz48 from '../components/NightlightFill0Wght200Grad0Opsz48'
import IconNightlightFill0Wght300Grad0Opsz48 from '../components/NightlightFill0Wght300Grad0Opsz48'
import IconNightlightFill0Wght400Grad0Opsz48 from '../components/NightlightFill0Wght400Grad0Opsz48'
import IconNightlightFill0Wght500Grad0Opsz48 from '../components/NightlightFill0Wght500Grad0Opsz48'
import IconNightlightFill0Wght600Grad0Opsz48 from '../components/NightlightFill0Wght600Grad0Opsz48'
import IconNightlightFill0Wght700Grad0Opsz48 from '../components/NightlightFill0Wght700Grad0Opsz48'
import IconNightlightFill1Wght100Grad0Opsz48 from '../components/NightlightFill1Wght100Grad0Opsz48'
import IconNightlightFill1Wght200Grad0Opsz48 from '../components/NightlightFill1Wght200Grad0Opsz48'
import IconNightlightFill1Wght300Grad0Opsz48 from '../components/NightlightFill1Wght300Grad0Opsz48'
import IconNightlightFill1Wght400Grad0Opsz48 from '../components/NightlightFill1Wght400Grad0Opsz48'
import IconNightlightFill1Wght500Grad0Opsz48 from '../components/NightlightFill1Wght500Grad0Opsz48'
import IconNightlightFill1Wght600Grad0Opsz48 from '../components/NightlightFill1Wght600Grad0Opsz48'
import IconNightlightFill1Wght700Grad0Opsz48 from '../components/NightlightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNightlight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNightlightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNightlightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNightlightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNightlightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNightlightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNightlightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNightlightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNightlightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNightlightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNightlightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNightlightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNightlightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNightlightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNightlightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
