import IconCenterFocusStrongFill0Wght100Grad0Opsz48 from '../components/CenterFocusStrongFill0Wght100Grad0Opsz48'
import IconCenterFocusStrongFill0Wght200Grad0Opsz48 from '../components/CenterFocusStrongFill0Wght200Grad0Opsz48'
import IconCenterFocusStrongFill0Wght300Grad0Opsz48 from '../components/CenterFocusStrongFill0Wght300Grad0Opsz48'
import IconCenterFocusStrongFill0Wght400Grad0Opsz48 from '../components/CenterFocusStrongFill0Wght400Grad0Opsz48'
import IconCenterFocusStrongFill0Wght500Grad0Opsz48 from '../components/CenterFocusStrongFill0Wght500Grad0Opsz48'
import IconCenterFocusStrongFill0Wght600Grad0Opsz48 from '../components/CenterFocusStrongFill0Wght600Grad0Opsz48'
import IconCenterFocusStrongFill0Wght700Grad0Opsz48 from '../components/CenterFocusStrongFill0Wght700Grad0Opsz48'
import IconCenterFocusStrongFill1Wght100Grad0Opsz48 from '../components/CenterFocusStrongFill1Wght100Grad0Opsz48'
import IconCenterFocusStrongFill1Wght200Grad0Opsz48 from '../components/CenterFocusStrongFill1Wght200Grad0Opsz48'
import IconCenterFocusStrongFill1Wght300Grad0Opsz48 from '../components/CenterFocusStrongFill1Wght300Grad0Opsz48'
import IconCenterFocusStrongFill1Wght400Grad0Opsz48 from '../components/CenterFocusStrongFill1Wght400Grad0Opsz48'
import IconCenterFocusStrongFill1Wght500Grad0Opsz48 from '../components/CenterFocusStrongFill1Wght500Grad0Opsz48'
import IconCenterFocusStrongFill1Wght600Grad0Opsz48 from '../components/CenterFocusStrongFill1Wght600Grad0Opsz48'
import IconCenterFocusStrongFill1Wght700Grad0Opsz48 from '../components/CenterFocusStrongFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCenterFocusStrong = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCenterFocusStrongFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCenterFocusStrongFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCenterFocusStrongFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCenterFocusStrongFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCenterFocusStrongFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCenterFocusStrongFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCenterFocusStrongFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCenterFocusStrongFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCenterFocusStrongFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCenterFocusStrongFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCenterFocusStrongFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCenterFocusStrongFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCenterFocusStrongFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCenterFocusStrongFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
