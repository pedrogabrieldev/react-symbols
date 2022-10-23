import IconScreenRotationFill0Wght100Grad0Opsz48 from '../components/ScreenRotationFill0Wght100Grad0Opsz48'
import IconScreenRotationFill0Wght200Grad0Opsz48 from '../components/ScreenRotationFill0Wght200Grad0Opsz48'
import IconScreenRotationFill0Wght300Grad0Opsz48 from '../components/ScreenRotationFill0Wght300Grad0Opsz48'
import IconScreenRotationFill0Wght400Grad0Opsz48 from '../components/ScreenRotationFill0Wght400Grad0Opsz48'
import IconScreenRotationFill0Wght500Grad0Opsz48 from '../components/ScreenRotationFill0Wght500Grad0Opsz48'
import IconScreenRotationFill0Wght600Grad0Opsz48 from '../components/ScreenRotationFill0Wght600Grad0Opsz48'
import IconScreenRotationFill0Wght700Grad0Opsz48 from '../components/ScreenRotationFill0Wght700Grad0Opsz48'
import IconScreenRotationFill1Wght100Grad0Opsz48 from '../components/ScreenRotationFill1Wght100Grad0Opsz48'
import IconScreenRotationFill1Wght200Grad0Opsz48 from '../components/ScreenRotationFill1Wght200Grad0Opsz48'
import IconScreenRotationFill1Wght300Grad0Opsz48 from '../components/ScreenRotationFill1Wght300Grad0Opsz48'
import IconScreenRotationFill1Wght400Grad0Opsz48 from '../components/ScreenRotationFill1Wght400Grad0Opsz48'
import IconScreenRotationFill1Wght500Grad0Opsz48 from '../components/ScreenRotationFill1Wght500Grad0Opsz48'
import IconScreenRotationFill1Wght600Grad0Opsz48 from '../components/ScreenRotationFill1Wght600Grad0Opsz48'
import IconScreenRotationFill1Wght700Grad0Opsz48 from '../components/ScreenRotationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenRotation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenRotationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenRotationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenRotationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenRotationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenRotationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenRotationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenRotationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenRotationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenRotationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenRotationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenRotationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenRotationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenRotationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenRotationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
