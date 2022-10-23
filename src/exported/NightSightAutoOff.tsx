import IconNightSightAutoOffFill0Wght100Grad0Opsz48 from '../components/NightSightAutoOffFill0Wght100Grad0Opsz48'
import IconNightSightAutoOffFill0Wght200Grad0Opsz48 from '../components/NightSightAutoOffFill0Wght200Grad0Opsz48'
import IconNightSightAutoOffFill0Wght300Grad0Opsz48 from '../components/NightSightAutoOffFill0Wght300Grad0Opsz48'
import IconNightSightAutoOffFill0Wght400Grad0Opsz48 from '../components/NightSightAutoOffFill0Wght400Grad0Opsz48'
import IconNightSightAutoOffFill0Wght500Grad0Opsz48 from '../components/NightSightAutoOffFill0Wght500Grad0Opsz48'
import IconNightSightAutoOffFill0Wght600Grad0Opsz48 from '../components/NightSightAutoOffFill0Wght600Grad0Opsz48'
import IconNightSightAutoOffFill0Wght700Grad0Opsz48 from '../components/NightSightAutoOffFill0Wght700Grad0Opsz48'
import IconNightSightAutoOffFill1Wght100Grad0Opsz48 from '../components/NightSightAutoOffFill1Wght100Grad0Opsz48'
import IconNightSightAutoOffFill1Wght200Grad0Opsz48 from '../components/NightSightAutoOffFill1Wght200Grad0Opsz48'
import IconNightSightAutoOffFill1Wght300Grad0Opsz48 from '../components/NightSightAutoOffFill1Wght300Grad0Opsz48'
import IconNightSightAutoOffFill1Wght400Grad0Opsz48 from '../components/NightSightAutoOffFill1Wght400Grad0Opsz48'
import IconNightSightAutoOffFill1Wght500Grad0Opsz48 from '../components/NightSightAutoOffFill1Wght500Grad0Opsz48'
import IconNightSightAutoOffFill1Wght600Grad0Opsz48 from '../components/NightSightAutoOffFill1Wght600Grad0Opsz48'
import IconNightSightAutoOffFill1Wght700Grad0Opsz48 from '../components/NightSightAutoOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNightSightAutoOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNightSightAutoOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNightSightAutoOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNightSightAutoOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNightSightAutoOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNightSightAutoOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNightSightAutoOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNightSightAutoOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNightSightAutoOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNightSightAutoOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNightSightAutoOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNightSightAutoOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNightSightAutoOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNightSightAutoOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNightSightAutoOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
