import IconCenterFocusWeakFill0Wght100Grad0Opsz48 from '../components/CenterFocusWeakFill0Wght100Grad0Opsz48'
import IconCenterFocusWeakFill0Wght200Grad0Opsz48 from '../components/CenterFocusWeakFill0Wght200Grad0Opsz48'
import IconCenterFocusWeakFill0Wght300Grad0Opsz48 from '../components/CenterFocusWeakFill0Wght300Grad0Opsz48'
import IconCenterFocusWeakFill0Wght400Grad0Opsz48 from '../components/CenterFocusWeakFill0Wght400Grad0Opsz48'
import IconCenterFocusWeakFill0Wght500Grad0Opsz48 from '../components/CenterFocusWeakFill0Wght500Grad0Opsz48'
import IconCenterFocusWeakFill0Wght600Grad0Opsz48 from '../components/CenterFocusWeakFill0Wght600Grad0Opsz48'
import IconCenterFocusWeakFill0Wght700Grad0Opsz48 from '../components/CenterFocusWeakFill0Wght700Grad0Opsz48'
import IconCenterFocusWeakFill1Wght100Grad0Opsz48 from '../components/CenterFocusWeakFill1Wght100Grad0Opsz48'
import IconCenterFocusWeakFill1Wght200Grad0Opsz48 from '../components/CenterFocusWeakFill1Wght200Grad0Opsz48'
import IconCenterFocusWeakFill1Wght300Grad0Opsz48 from '../components/CenterFocusWeakFill1Wght300Grad0Opsz48'
import IconCenterFocusWeakFill1Wght400Grad0Opsz48 from '../components/CenterFocusWeakFill1Wght400Grad0Opsz48'
import IconCenterFocusWeakFill1Wght500Grad0Opsz48 from '../components/CenterFocusWeakFill1Wght500Grad0Opsz48'
import IconCenterFocusWeakFill1Wght600Grad0Opsz48 from '../components/CenterFocusWeakFill1Wght600Grad0Opsz48'
import IconCenterFocusWeakFill1Wght700Grad0Opsz48 from '../components/CenterFocusWeakFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCenterFocusWeak = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCenterFocusWeakFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCenterFocusWeakFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCenterFocusWeakFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCenterFocusWeakFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCenterFocusWeakFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCenterFocusWeakFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCenterFocusWeakFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCenterFocusWeakFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCenterFocusWeakFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCenterFocusWeakFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCenterFocusWeakFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCenterFocusWeakFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCenterFocusWeakFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCenterFocusWeakFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
