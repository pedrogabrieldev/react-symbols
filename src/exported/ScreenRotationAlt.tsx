import IconScreenRotationAltFill0Wght100Grad0Opsz48 from '../components/ScreenRotationAltFill0Wght100Grad0Opsz48'
import IconScreenRotationAltFill0Wght200Grad0Opsz48 from '../components/ScreenRotationAltFill0Wght200Grad0Opsz48'
import IconScreenRotationAltFill0Wght300Grad0Opsz48 from '../components/ScreenRotationAltFill0Wght300Grad0Opsz48'
import IconScreenRotationAltFill0Wght400Grad0Opsz48 from '../components/ScreenRotationAltFill0Wght400Grad0Opsz48'
import IconScreenRotationAltFill0Wght500Grad0Opsz48 from '../components/ScreenRotationAltFill0Wght500Grad0Opsz48'
import IconScreenRotationAltFill0Wght600Grad0Opsz48 from '../components/ScreenRotationAltFill0Wght600Grad0Opsz48'
import IconScreenRotationAltFill0Wght700Grad0Opsz48 from '../components/ScreenRotationAltFill0Wght700Grad0Opsz48'
import IconScreenRotationAltFill1Wght100Grad0Opsz48 from '../components/ScreenRotationAltFill1Wght100Grad0Opsz48'
import IconScreenRotationAltFill1Wght200Grad0Opsz48 from '../components/ScreenRotationAltFill1Wght200Grad0Opsz48'
import IconScreenRotationAltFill1Wght300Grad0Opsz48 from '../components/ScreenRotationAltFill1Wght300Grad0Opsz48'
import IconScreenRotationAltFill1Wght400Grad0Opsz48 from '../components/ScreenRotationAltFill1Wght400Grad0Opsz48'
import IconScreenRotationAltFill1Wght500Grad0Opsz48 from '../components/ScreenRotationAltFill1Wght500Grad0Opsz48'
import IconScreenRotationAltFill1Wght600Grad0Opsz48 from '../components/ScreenRotationAltFill1Wght600Grad0Opsz48'
import IconScreenRotationAltFill1Wght700Grad0Opsz48 from '../components/ScreenRotationAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenRotationAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenRotationAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenRotationAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenRotationAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenRotationAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenRotationAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenRotationAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenRotationAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenRotationAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenRotationAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenRotationAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenRotationAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenRotationAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenRotationAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenRotationAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
