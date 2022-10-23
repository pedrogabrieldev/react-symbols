import IconNightlifeFill0Wght100Grad0Opsz48 from '../components/NightlifeFill0Wght100Grad0Opsz48'
import IconNightlifeFill0Wght200Grad0Opsz48 from '../components/NightlifeFill0Wght200Grad0Opsz48'
import IconNightlifeFill0Wght300Grad0Opsz48 from '../components/NightlifeFill0Wght300Grad0Opsz48'
import IconNightlifeFill0Wght400Grad0Opsz48 from '../components/NightlifeFill0Wght400Grad0Opsz48'
import IconNightlifeFill0Wght500Grad0Opsz48 from '../components/NightlifeFill0Wght500Grad0Opsz48'
import IconNightlifeFill0Wght600Grad0Opsz48 from '../components/NightlifeFill0Wght600Grad0Opsz48'
import IconNightlifeFill0Wght700Grad0Opsz48 from '../components/NightlifeFill0Wght700Grad0Opsz48'
import IconNightlifeFill1Wght100Grad0Opsz48 from '../components/NightlifeFill1Wght100Grad0Opsz48'
import IconNightlifeFill1Wght200Grad0Opsz48 from '../components/NightlifeFill1Wght200Grad0Opsz48'
import IconNightlifeFill1Wght300Grad0Opsz48 from '../components/NightlifeFill1Wght300Grad0Opsz48'
import IconNightlifeFill1Wght400Grad0Opsz48 from '../components/NightlifeFill1Wght400Grad0Opsz48'
import IconNightlifeFill1Wght500Grad0Opsz48 from '../components/NightlifeFill1Wght500Grad0Opsz48'
import IconNightlifeFill1Wght600Grad0Opsz48 from '../components/NightlifeFill1Wght600Grad0Opsz48'
import IconNightlifeFill1Wght700Grad0Opsz48 from '../components/NightlifeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNightlife = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNightlifeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNightlifeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNightlifeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNightlifeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNightlifeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNightlifeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNightlifeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNightlifeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNightlifeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNightlifeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNightlifeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNightlifeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNightlifeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNightlifeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
