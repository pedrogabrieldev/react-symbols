import IconScreenLockLandscapeFill0Wght100Grad0Opsz48 from '../components/ScreenLockLandscapeFill0Wght100Grad0Opsz48'
import IconScreenLockLandscapeFill0Wght200Grad0Opsz48 from '../components/ScreenLockLandscapeFill0Wght200Grad0Opsz48'
import IconScreenLockLandscapeFill0Wght300Grad0Opsz48 from '../components/ScreenLockLandscapeFill0Wght300Grad0Opsz48'
import IconScreenLockLandscapeFill0Wght400Grad0Opsz48 from '../components/ScreenLockLandscapeFill0Wght400Grad0Opsz48'
import IconScreenLockLandscapeFill0Wght500Grad0Opsz48 from '../components/ScreenLockLandscapeFill0Wght500Grad0Opsz48'
import IconScreenLockLandscapeFill0Wght600Grad0Opsz48 from '../components/ScreenLockLandscapeFill0Wght600Grad0Opsz48'
import IconScreenLockLandscapeFill0Wght700Grad0Opsz48 from '../components/ScreenLockLandscapeFill0Wght700Grad0Opsz48'
import IconScreenLockLandscapeFill1Wght100Grad0Opsz48 from '../components/ScreenLockLandscapeFill1Wght100Grad0Opsz48'
import IconScreenLockLandscapeFill1Wght200Grad0Opsz48 from '../components/ScreenLockLandscapeFill1Wght200Grad0Opsz48'
import IconScreenLockLandscapeFill1Wght300Grad0Opsz48 from '../components/ScreenLockLandscapeFill1Wght300Grad0Opsz48'
import IconScreenLockLandscapeFill1Wght400Grad0Opsz48 from '../components/ScreenLockLandscapeFill1Wght400Grad0Opsz48'
import IconScreenLockLandscapeFill1Wght500Grad0Opsz48 from '../components/ScreenLockLandscapeFill1Wght500Grad0Opsz48'
import IconScreenLockLandscapeFill1Wght600Grad0Opsz48 from '../components/ScreenLockLandscapeFill1Wght600Grad0Opsz48'
import IconScreenLockLandscapeFill1Wght700Grad0Opsz48 from '../components/ScreenLockLandscapeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenLockLandscape = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenLockLandscapeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenLockLandscapeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenLockLandscapeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenLockLandscapeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenLockLandscapeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenLockLandscapeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenLockLandscapeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenLockLandscapeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenLockLandscapeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenLockLandscapeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenLockLandscapeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenLockLandscapeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenLockLandscapeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenLockLandscapeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
