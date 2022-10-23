import IconSwitchCameraFill0Wght100Grad0Opsz48 from '../components/SwitchCameraFill0Wght100Grad0Opsz48'
import IconSwitchCameraFill0Wght200Grad0Opsz48 from '../components/SwitchCameraFill0Wght200Grad0Opsz48'
import IconSwitchCameraFill0Wght300Grad0Opsz48 from '../components/SwitchCameraFill0Wght300Grad0Opsz48'
import IconSwitchCameraFill0Wght400Grad0Opsz48 from '../components/SwitchCameraFill0Wght400Grad0Opsz48'
import IconSwitchCameraFill0Wght500Grad0Opsz48 from '../components/SwitchCameraFill0Wght500Grad0Opsz48'
import IconSwitchCameraFill0Wght600Grad0Opsz48 from '../components/SwitchCameraFill0Wght600Grad0Opsz48'
import IconSwitchCameraFill0Wght700Grad0Opsz48 from '../components/SwitchCameraFill0Wght700Grad0Opsz48'
import IconSwitchCameraFill1Wght100Grad0Opsz48 from '../components/SwitchCameraFill1Wght100Grad0Opsz48'
import IconSwitchCameraFill1Wght200Grad0Opsz48 from '../components/SwitchCameraFill1Wght200Grad0Opsz48'
import IconSwitchCameraFill1Wght300Grad0Opsz48 from '../components/SwitchCameraFill1Wght300Grad0Opsz48'
import IconSwitchCameraFill1Wght400Grad0Opsz48 from '../components/SwitchCameraFill1Wght400Grad0Opsz48'
import IconSwitchCameraFill1Wght500Grad0Opsz48 from '../components/SwitchCameraFill1Wght500Grad0Opsz48'
import IconSwitchCameraFill1Wght600Grad0Opsz48 from '../components/SwitchCameraFill1Wght600Grad0Opsz48'
import IconSwitchCameraFill1Wght700Grad0Opsz48 from '../components/SwitchCameraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwitchCamera = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwitchCameraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwitchCameraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwitchCameraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwitchCameraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwitchCameraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwitchCameraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwitchCameraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwitchCameraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwitchCameraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwitchCameraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwitchCameraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwitchCameraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwitchCameraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwitchCameraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
