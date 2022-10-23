import IconSnowboardingFill0Wght100Grad0Opsz48 from '../components/SnowboardingFill0Wght100Grad0Opsz48'
import IconSnowboardingFill0Wght200Grad0Opsz48 from '../components/SnowboardingFill0Wght200Grad0Opsz48'
import IconSnowboardingFill0Wght300Grad0Opsz48 from '../components/SnowboardingFill0Wght300Grad0Opsz48'
import IconSnowboardingFill0Wght400Grad0Opsz48 from '../components/SnowboardingFill0Wght400Grad0Opsz48'
import IconSnowboardingFill0Wght500Grad0Opsz48 from '../components/SnowboardingFill0Wght500Grad0Opsz48'
import IconSnowboardingFill0Wght600Grad0Opsz48 from '../components/SnowboardingFill0Wght600Grad0Opsz48'
import IconSnowboardingFill0Wght700Grad0Opsz48 from '../components/SnowboardingFill0Wght700Grad0Opsz48'
import IconSnowboardingFill1Wght100Grad0Opsz48 from '../components/SnowboardingFill1Wght100Grad0Opsz48'
import IconSnowboardingFill1Wght200Grad0Opsz48 from '../components/SnowboardingFill1Wght200Grad0Opsz48'
import IconSnowboardingFill1Wght300Grad0Opsz48 from '../components/SnowboardingFill1Wght300Grad0Opsz48'
import IconSnowboardingFill1Wght400Grad0Opsz48 from '../components/SnowboardingFill1Wght400Grad0Opsz48'
import IconSnowboardingFill1Wght500Grad0Opsz48 from '../components/SnowboardingFill1Wght500Grad0Opsz48'
import IconSnowboardingFill1Wght600Grad0Opsz48 from '../components/SnowboardingFill1Wght600Grad0Opsz48'
import IconSnowboardingFill1Wght700Grad0Opsz48 from '../components/SnowboardingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSnowboarding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSnowboardingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSnowboardingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSnowboardingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSnowboardingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSnowboardingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSnowboardingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSnowboardingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSnowboardingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSnowboardingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSnowboardingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSnowboardingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSnowboardingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSnowboardingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSnowboardingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
