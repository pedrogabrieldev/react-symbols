import IconMobileFriendlyFill0Wght100Grad0Opsz48 from '../components/MobileFriendlyFill0Wght100Grad0Opsz48'
import IconMobileFriendlyFill0Wght200Grad0Opsz48 from '../components/MobileFriendlyFill0Wght200Grad0Opsz48'
import IconMobileFriendlyFill0Wght300Grad0Opsz48 from '../components/MobileFriendlyFill0Wght300Grad0Opsz48'
import IconMobileFriendlyFill0Wght400Grad0Opsz48 from '../components/MobileFriendlyFill0Wght400Grad0Opsz48'
import IconMobileFriendlyFill0Wght500Grad0Opsz48 from '../components/MobileFriendlyFill0Wght500Grad0Opsz48'
import IconMobileFriendlyFill0Wght600Grad0Opsz48 from '../components/MobileFriendlyFill0Wght600Grad0Opsz48'
import IconMobileFriendlyFill0Wght700Grad0Opsz48 from '../components/MobileFriendlyFill0Wght700Grad0Opsz48'
import IconMobileFriendlyFill1Wght100Grad0Opsz48 from '../components/MobileFriendlyFill1Wght100Grad0Opsz48'
import IconMobileFriendlyFill1Wght200Grad0Opsz48 from '../components/MobileFriendlyFill1Wght200Grad0Opsz48'
import IconMobileFriendlyFill1Wght300Grad0Opsz48 from '../components/MobileFriendlyFill1Wght300Grad0Opsz48'
import IconMobileFriendlyFill1Wght400Grad0Opsz48 from '../components/MobileFriendlyFill1Wght400Grad0Opsz48'
import IconMobileFriendlyFill1Wght500Grad0Opsz48 from '../components/MobileFriendlyFill1Wght500Grad0Opsz48'
import IconMobileFriendlyFill1Wght600Grad0Opsz48 from '../components/MobileFriendlyFill1Wght600Grad0Opsz48'
import IconMobileFriendlyFill1Wght700Grad0Opsz48 from '../components/MobileFriendlyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMobileFriendly = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMobileFriendlyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMobileFriendlyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMobileFriendlyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMobileFriendlyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMobileFriendlyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMobileFriendlyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMobileFriendlyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMobileFriendlyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMobileFriendlyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMobileFriendlyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMobileFriendlyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMobileFriendlyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMobileFriendlyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMobileFriendlyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
