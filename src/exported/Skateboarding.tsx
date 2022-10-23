import IconSkateboardingFill0Wght100Grad0Opsz48 from '../components/SkateboardingFill0Wght100Grad0Opsz48'
import IconSkateboardingFill0Wght200Grad0Opsz48 from '../components/SkateboardingFill0Wght200Grad0Opsz48'
import IconSkateboardingFill0Wght300Grad0Opsz48 from '../components/SkateboardingFill0Wght300Grad0Opsz48'
import IconSkateboardingFill0Wght400Grad0Opsz48 from '../components/SkateboardingFill0Wght400Grad0Opsz48'
import IconSkateboardingFill0Wght500Grad0Opsz48 from '../components/SkateboardingFill0Wght500Grad0Opsz48'
import IconSkateboardingFill0Wght600Grad0Opsz48 from '../components/SkateboardingFill0Wght600Grad0Opsz48'
import IconSkateboardingFill0Wght700Grad0Opsz48 from '../components/SkateboardingFill0Wght700Grad0Opsz48'
import IconSkateboardingFill1Wght100Grad0Opsz48 from '../components/SkateboardingFill1Wght100Grad0Opsz48'
import IconSkateboardingFill1Wght200Grad0Opsz48 from '../components/SkateboardingFill1Wght200Grad0Opsz48'
import IconSkateboardingFill1Wght300Grad0Opsz48 from '../components/SkateboardingFill1Wght300Grad0Opsz48'
import IconSkateboardingFill1Wght400Grad0Opsz48 from '../components/SkateboardingFill1Wght400Grad0Opsz48'
import IconSkateboardingFill1Wght500Grad0Opsz48 from '../components/SkateboardingFill1Wght500Grad0Opsz48'
import IconSkateboardingFill1Wght600Grad0Opsz48 from '../components/SkateboardingFill1Wght600Grad0Opsz48'
import IconSkateboardingFill1Wght700Grad0Opsz48 from '../components/SkateboardingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSkateboarding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSkateboardingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSkateboardingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSkateboardingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSkateboardingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSkateboardingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSkateboardingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSkateboardingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSkateboardingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSkateboardingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSkateboardingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSkateboardingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSkateboardingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSkateboardingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSkateboardingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
