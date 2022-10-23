import IconCameraswitchFill0Wght100Grad0Opsz48 from '../components/CameraswitchFill0Wght100Grad0Opsz48'
import IconCameraswitchFill0Wght200Grad0Opsz48 from '../components/CameraswitchFill0Wght200Grad0Opsz48'
import IconCameraswitchFill0Wght300Grad0Opsz48 from '../components/CameraswitchFill0Wght300Grad0Opsz48'
import IconCameraswitchFill0Wght400Grad0Opsz48 from '../components/CameraswitchFill0Wght400Grad0Opsz48'
import IconCameraswitchFill0Wght500Grad0Opsz48 from '../components/CameraswitchFill0Wght500Grad0Opsz48'
import IconCameraswitchFill0Wght600Grad0Opsz48 from '../components/CameraswitchFill0Wght600Grad0Opsz48'
import IconCameraswitchFill0Wght700Grad0Opsz48 from '../components/CameraswitchFill0Wght700Grad0Opsz48'
import IconCameraswitchFill1Wght100Grad0Opsz48 from '../components/CameraswitchFill1Wght100Grad0Opsz48'
import IconCameraswitchFill1Wght200Grad0Opsz48 from '../components/CameraswitchFill1Wght200Grad0Opsz48'
import IconCameraswitchFill1Wght300Grad0Opsz48 from '../components/CameraswitchFill1Wght300Grad0Opsz48'
import IconCameraswitchFill1Wght400Grad0Opsz48 from '../components/CameraswitchFill1Wght400Grad0Opsz48'
import IconCameraswitchFill1Wght500Grad0Opsz48 from '../components/CameraswitchFill1Wght500Grad0Opsz48'
import IconCameraswitchFill1Wght600Grad0Opsz48 from '../components/CameraswitchFill1Wght600Grad0Opsz48'
import IconCameraswitchFill1Wght700Grad0Opsz48 from '../components/CameraswitchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCameraswitch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCameraswitchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCameraswitchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCameraswitchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCameraswitchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCameraswitchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCameraswitchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCameraswitchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCameraswitchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCameraswitchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCameraswitchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCameraswitchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCameraswitchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCameraswitchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCameraswitchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
