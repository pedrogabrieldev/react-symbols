import IconNightSightAutoFill0Wght100Grad0Opsz48 from '../components/NightSightAutoFill0Wght100Grad0Opsz48'
import IconNightSightAutoFill0Wght200Grad0Opsz48 from '../components/NightSightAutoFill0Wght200Grad0Opsz48'
import IconNightSightAutoFill0Wght300Grad0Opsz48 from '../components/NightSightAutoFill0Wght300Grad0Opsz48'
import IconNightSightAutoFill0Wght400Grad0Opsz48 from '../components/NightSightAutoFill0Wght400Grad0Opsz48'
import IconNightSightAutoFill0Wght500Grad0Opsz48 from '../components/NightSightAutoFill0Wght500Grad0Opsz48'
import IconNightSightAutoFill0Wght600Grad0Opsz48 from '../components/NightSightAutoFill0Wght600Grad0Opsz48'
import IconNightSightAutoFill0Wght700Grad0Opsz48 from '../components/NightSightAutoFill0Wght700Grad0Opsz48'
import IconNightSightAutoFill1Wght100Grad0Opsz48 from '../components/NightSightAutoFill1Wght100Grad0Opsz48'
import IconNightSightAutoFill1Wght200Grad0Opsz48 from '../components/NightSightAutoFill1Wght200Grad0Opsz48'
import IconNightSightAutoFill1Wght300Grad0Opsz48 from '../components/NightSightAutoFill1Wght300Grad0Opsz48'
import IconNightSightAutoFill1Wght400Grad0Opsz48 from '../components/NightSightAutoFill1Wght400Grad0Opsz48'
import IconNightSightAutoFill1Wght500Grad0Opsz48 from '../components/NightSightAutoFill1Wght500Grad0Opsz48'
import IconNightSightAutoFill1Wght600Grad0Opsz48 from '../components/NightSightAutoFill1Wght600Grad0Opsz48'
import IconNightSightAutoFill1Wght700Grad0Opsz48 from '../components/NightSightAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNightSightAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNightSightAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNightSightAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNightSightAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNightSightAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNightSightAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNightSightAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNightSightAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNightSightAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNightSightAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNightSightAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNightSightAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNightSightAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNightSightAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNightSightAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
