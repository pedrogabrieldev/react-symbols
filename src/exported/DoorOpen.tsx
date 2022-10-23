import IconDoorOpenFill0Wght100Grad0Opsz48 from '../components/DoorOpenFill0Wght100Grad0Opsz48'
import IconDoorOpenFill0Wght200Grad0Opsz48 from '../components/DoorOpenFill0Wght200Grad0Opsz48'
import IconDoorOpenFill0Wght300Grad0Opsz48 from '../components/DoorOpenFill0Wght300Grad0Opsz48'
import IconDoorOpenFill0Wght400Grad0Opsz48 from '../components/DoorOpenFill0Wght400Grad0Opsz48'
import IconDoorOpenFill0Wght500Grad0Opsz48 from '../components/DoorOpenFill0Wght500Grad0Opsz48'
import IconDoorOpenFill0Wght600Grad0Opsz48 from '../components/DoorOpenFill0Wght600Grad0Opsz48'
import IconDoorOpenFill0Wght700Grad0Opsz48 from '../components/DoorOpenFill0Wght700Grad0Opsz48'
import IconDoorOpenFill1Wght100Grad0Opsz48 from '../components/DoorOpenFill1Wght100Grad0Opsz48'
import IconDoorOpenFill1Wght200Grad0Opsz48 from '../components/DoorOpenFill1Wght200Grad0Opsz48'
import IconDoorOpenFill1Wght300Grad0Opsz48 from '../components/DoorOpenFill1Wght300Grad0Opsz48'
import IconDoorOpenFill1Wght400Grad0Opsz48 from '../components/DoorOpenFill1Wght400Grad0Opsz48'
import IconDoorOpenFill1Wght500Grad0Opsz48 from '../components/DoorOpenFill1Wght500Grad0Opsz48'
import IconDoorOpenFill1Wght600Grad0Opsz48 from '../components/DoorOpenFill1Wght600Grad0Opsz48'
import IconDoorOpenFill1Wght700Grad0Opsz48 from '../components/DoorOpenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoorOpen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoorOpenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoorOpenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoorOpenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoorOpenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoorOpenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoorOpenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoorOpenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoorOpenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoorOpenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoorOpenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoorOpenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoorOpenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoorOpenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoorOpenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
