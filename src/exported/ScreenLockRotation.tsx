import IconScreenLockRotationFill0Wght100Grad0Opsz48 from '../components/ScreenLockRotationFill0Wght100Grad0Opsz48'
import IconScreenLockRotationFill0Wght200Grad0Opsz48 from '../components/ScreenLockRotationFill0Wght200Grad0Opsz48'
import IconScreenLockRotationFill0Wght300Grad0Opsz48 from '../components/ScreenLockRotationFill0Wght300Grad0Opsz48'
import IconScreenLockRotationFill0Wght400Grad0Opsz48 from '../components/ScreenLockRotationFill0Wght400Grad0Opsz48'
import IconScreenLockRotationFill0Wght500Grad0Opsz48 from '../components/ScreenLockRotationFill0Wght500Grad0Opsz48'
import IconScreenLockRotationFill0Wght600Grad0Opsz48 from '../components/ScreenLockRotationFill0Wght600Grad0Opsz48'
import IconScreenLockRotationFill0Wght700Grad0Opsz48 from '../components/ScreenLockRotationFill0Wght700Grad0Opsz48'
import IconScreenLockRotationFill1Wght100Grad0Opsz48 from '../components/ScreenLockRotationFill1Wght100Grad0Opsz48'
import IconScreenLockRotationFill1Wght200Grad0Opsz48 from '../components/ScreenLockRotationFill1Wght200Grad0Opsz48'
import IconScreenLockRotationFill1Wght300Grad0Opsz48 from '../components/ScreenLockRotationFill1Wght300Grad0Opsz48'
import IconScreenLockRotationFill1Wght400Grad0Opsz48 from '../components/ScreenLockRotationFill1Wght400Grad0Opsz48'
import IconScreenLockRotationFill1Wght500Grad0Opsz48 from '../components/ScreenLockRotationFill1Wght500Grad0Opsz48'
import IconScreenLockRotationFill1Wght600Grad0Opsz48 from '../components/ScreenLockRotationFill1Wght600Grad0Opsz48'
import IconScreenLockRotationFill1Wght700Grad0Opsz48 from '../components/ScreenLockRotationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenLockRotation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenLockRotationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenLockRotationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenLockRotationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenLockRotationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenLockRotationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenLockRotationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenLockRotationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenLockRotationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenLockRotationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenLockRotationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenLockRotationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenLockRotationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenLockRotationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenLockRotationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
