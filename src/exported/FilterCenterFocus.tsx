import IconFilterCenterFocusFill0Wght100Grad0Opsz48 from '../components/FilterCenterFocusFill0Wght100Grad0Opsz48'
import IconFilterCenterFocusFill0Wght200Grad0Opsz48 from '../components/FilterCenterFocusFill0Wght200Grad0Opsz48'
import IconFilterCenterFocusFill0Wght300Grad0Opsz48 from '../components/FilterCenterFocusFill0Wght300Grad0Opsz48'
import IconFilterCenterFocusFill0Wght400Grad0Opsz48 from '../components/FilterCenterFocusFill0Wght400Grad0Opsz48'
import IconFilterCenterFocusFill0Wght500Grad0Opsz48 from '../components/FilterCenterFocusFill0Wght500Grad0Opsz48'
import IconFilterCenterFocusFill0Wght600Grad0Opsz48 from '../components/FilterCenterFocusFill0Wght600Grad0Opsz48'
import IconFilterCenterFocusFill0Wght700Grad0Opsz48 from '../components/FilterCenterFocusFill0Wght700Grad0Opsz48'
import IconFilterCenterFocusFill1Wght100Grad0Opsz48 from '../components/FilterCenterFocusFill1Wght100Grad0Opsz48'
import IconFilterCenterFocusFill1Wght200Grad0Opsz48 from '../components/FilterCenterFocusFill1Wght200Grad0Opsz48'
import IconFilterCenterFocusFill1Wght300Grad0Opsz48 from '../components/FilterCenterFocusFill1Wght300Grad0Opsz48'
import IconFilterCenterFocusFill1Wght400Grad0Opsz48 from '../components/FilterCenterFocusFill1Wght400Grad0Opsz48'
import IconFilterCenterFocusFill1Wght500Grad0Opsz48 from '../components/FilterCenterFocusFill1Wght500Grad0Opsz48'
import IconFilterCenterFocusFill1Wght600Grad0Opsz48 from '../components/FilterCenterFocusFill1Wght600Grad0Opsz48'
import IconFilterCenterFocusFill1Wght700Grad0Opsz48 from '../components/FilterCenterFocusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterCenterFocus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterCenterFocusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterCenterFocusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterCenterFocusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterCenterFocusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterCenterFocusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterCenterFocusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterCenterFocusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterCenterFocusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterCenterFocusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterCenterFocusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterCenterFocusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterCenterFocusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterCenterFocusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterCenterFocusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
