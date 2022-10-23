import IconControlCameraFill0Wght100Grad0Opsz48 from '../components/ControlCameraFill0Wght100Grad0Opsz48'
import IconControlCameraFill0Wght200Grad0Opsz48 from '../components/ControlCameraFill0Wght200Grad0Opsz48'
import IconControlCameraFill0Wght300Grad0Opsz48 from '../components/ControlCameraFill0Wght300Grad0Opsz48'
import IconControlCameraFill0Wght400Grad0Opsz48 from '../components/ControlCameraFill0Wght400Grad0Opsz48'
import IconControlCameraFill0Wght500Grad0Opsz48 from '../components/ControlCameraFill0Wght500Grad0Opsz48'
import IconControlCameraFill0Wght600Grad0Opsz48 from '../components/ControlCameraFill0Wght600Grad0Opsz48'
import IconControlCameraFill0Wght700Grad0Opsz48 from '../components/ControlCameraFill0Wght700Grad0Opsz48'
import IconControlCameraFill1Wght100Grad0Opsz48 from '../components/ControlCameraFill1Wght100Grad0Opsz48'
import IconControlCameraFill1Wght200Grad0Opsz48 from '../components/ControlCameraFill1Wght200Grad0Opsz48'
import IconControlCameraFill1Wght300Grad0Opsz48 from '../components/ControlCameraFill1Wght300Grad0Opsz48'
import IconControlCameraFill1Wght400Grad0Opsz48 from '../components/ControlCameraFill1Wght400Grad0Opsz48'
import IconControlCameraFill1Wght500Grad0Opsz48 from '../components/ControlCameraFill1Wght500Grad0Opsz48'
import IconControlCameraFill1Wght600Grad0Opsz48 from '../components/ControlCameraFill1Wght600Grad0Opsz48'
import IconControlCameraFill1Wght700Grad0Opsz48 from '../components/ControlCameraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconControlCamera = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconControlCameraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconControlCameraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconControlCameraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconControlCameraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconControlCameraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconControlCameraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconControlCameraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconControlCameraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconControlCameraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconControlCameraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconControlCameraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconControlCameraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconControlCameraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconControlCameraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
