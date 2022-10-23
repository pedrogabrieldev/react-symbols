import IconScreenLockPortraitFill0Wght100Grad0Opsz48 from '../components/ScreenLockPortraitFill0Wght100Grad0Opsz48'
import IconScreenLockPortraitFill0Wght200Grad0Opsz48 from '../components/ScreenLockPortraitFill0Wght200Grad0Opsz48'
import IconScreenLockPortraitFill0Wght300Grad0Opsz48 from '../components/ScreenLockPortraitFill0Wght300Grad0Opsz48'
import IconScreenLockPortraitFill0Wght400Grad0Opsz48 from '../components/ScreenLockPortraitFill0Wght400Grad0Opsz48'
import IconScreenLockPortraitFill0Wght500Grad0Opsz48 from '../components/ScreenLockPortraitFill0Wght500Grad0Opsz48'
import IconScreenLockPortraitFill0Wght600Grad0Opsz48 from '../components/ScreenLockPortraitFill0Wght600Grad0Opsz48'
import IconScreenLockPortraitFill0Wght700Grad0Opsz48 from '../components/ScreenLockPortraitFill0Wght700Grad0Opsz48'
import IconScreenLockPortraitFill1Wght100Grad0Opsz48 from '../components/ScreenLockPortraitFill1Wght100Grad0Opsz48'
import IconScreenLockPortraitFill1Wght200Grad0Opsz48 from '../components/ScreenLockPortraitFill1Wght200Grad0Opsz48'
import IconScreenLockPortraitFill1Wght300Grad0Opsz48 from '../components/ScreenLockPortraitFill1Wght300Grad0Opsz48'
import IconScreenLockPortraitFill1Wght400Grad0Opsz48 from '../components/ScreenLockPortraitFill1Wght400Grad0Opsz48'
import IconScreenLockPortraitFill1Wght500Grad0Opsz48 from '../components/ScreenLockPortraitFill1Wght500Grad0Opsz48'
import IconScreenLockPortraitFill1Wght600Grad0Opsz48 from '../components/ScreenLockPortraitFill1Wght600Grad0Opsz48'
import IconScreenLockPortraitFill1Wght700Grad0Opsz48 from '../components/ScreenLockPortraitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenLockPortrait = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenLockPortraitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenLockPortraitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenLockPortraitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenLockPortraitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenLockPortraitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenLockPortraitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenLockPortraitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenLockPortraitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenLockPortraitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenLockPortraitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenLockPortraitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenLockPortraitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenLockPortraitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenLockPortraitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
