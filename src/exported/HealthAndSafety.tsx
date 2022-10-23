import IconHealthAndSafetyFill0Wght100Grad0Opsz48 from '../components/HealthAndSafetyFill0Wght100Grad0Opsz48'
import IconHealthAndSafetyFill0Wght200Grad0Opsz48 from '../components/HealthAndSafetyFill0Wght200Grad0Opsz48'
import IconHealthAndSafetyFill0Wght300Grad0Opsz48 from '../components/HealthAndSafetyFill0Wght300Grad0Opsz48'
import IconHealthAndSafetyFill0Wght400Grad0Opsz48 from '../components/HealthAndSafetyFill0Wght400Grad0Opsz48'
import IconHealthAndSafetyFill0Wght500Grad0Opsz48 from '../components/HealthAndSafetyFill0Wght500Grad0Opsz48'
import IconHealthAndSafetyFill0Wght600Grad0Opsz48 from '../components/HealthAndSafetyFill0Wght600Grad0Opsz48'
import IconHealthAndSafetyFill0Wght700Grad0Opsz48 from '../components/HealthAndSafetyFill0Wght700Grad0Opsz48'
import IconHealthAndSafetyFill1Wght100Grad0Opsz48 from '../components/HealthAndSafetyFill1Wght100Grad0Opsz48'
import IconHealthAndSafetyFill1Wght200Grad0Opsz48 from '../components/HealthAndSafetyFill1Wght200Grad0Opsz48'
import IconHealthAndSafetyFill1Wght300Grad0Opsz48 from '../components/HealthAndSafetyFill1Wght300Grad0Opsz48'
import IconHealthAndSafetyFill1Wght400Grad0Opsz48 from '../components/HealthAndSafetyFill1Wght400Grad0Opsz48'
import IconHealthAndSafetyFill1Wght500Grad0Opsz48 from '../components/HealthAndSafetyFill1Wght500Grad0Opsz48'
import IconHealthAndSafetyFill1Wght600Grad0Opsz48 from '../components/HealthAndSafetyFill1Wght600Grad0Opsz48'
import IconHealthAndSafetyFill1Wght700Grad0Opsz48 from '../components/HealthAndSafetyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHealthAndSafety = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHealthAndSafetyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHealthAndSafetyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHealthAndSafetyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHealthAndSafetyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHealthAndSafetyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHealthAndSafetyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHealthAndSafetyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHealthAndSafetyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHealthAndSafetyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHealthAndSafetyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHealthAndSafetyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHealthAndSafetyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHealthAndSafetyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHealthAndSafetyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
