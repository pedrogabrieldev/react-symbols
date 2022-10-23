import IconMobileOffFill0Wght100Grad0Opsz48 from '../components/MobileOffFill0Wght100Grad0Opsz48'
import IconMobileOffFill0Wght200Grad0Opsz48 from '../components/MobileOffFill0Wght200Grad0Opsz48'
import IconMobileOffFill0Wght300Grad0Opsz48 from '../components/MobileOffFill0Wght300Grad0Opsz48'
import IconMobileOffFill0Wght400Grad0Opsz48 from '../components/MobileOffFill0Wght400Grad0Opsz48'
import IconMobileOffFill0Wght500Grad0Opsz48 from '../components/MobileOffFill0Wght500Grad0Opsz48'
import IconMobileOffFill0Wght600Grad0Opsz48 from '../components/MobileOffFill0Wght600Grad0Opsz48'
import IconMobileOffFill0Wght700Grad0Opsz48 from '../components/MobileOffFill0Wght700Grad0Opsz48'
import IconMobileOffFill1Wght100Grad0Opsz48 from '../components/MobileOffFill1Wght100Grad0Opsz48'
import IconMobileOffFill1Wght200Grad0Opsz48 from '../components/MobileOffFill1Wght200Grad0Opsz48'
import IconMobileOffFill1Wght300Grad0Opsz48 from '../components/MobileOffFill1Wght300Grad0Opsz48'
import IconMobileOffFill1Wght400Grad0Opsz48 from '../components/MobileOffFill1Wght400Grad0Opsz48'
import IconMobileOffFill1Wght500Grad0Opsz48 from '../components/MobileOffFill1Wght500Grad0Opsz48'
import IconMobileOffFill1Wght600Grad0Opsz48 from '../components/MobileOffFill1Wght600Grad0Opsz48'
import IconMobileOffFill1Wght700Grad0Opsz48 from '../components/MobileOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMobileOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMobileOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMobileOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMobileOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMobileOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMobileOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMobileOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMobileOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMobileOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMobileOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMobileOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMobileOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMobileOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMobileOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMobileOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
