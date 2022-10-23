import IconDoorFrontFill0Wght100Grad0Opsz48 from '../components/DoorFrontFill0Wght100Grad0Opsz48'
import IconDoorFrontFill0Wght200Grad0Opsz48 from '../components/DoorFrontFill0Wght200Grad0Opsz48'
import IconDoorFrontFill0Wght300Grad0Opsz48 from '../components/DoorFrontFill0Wght300Grad0Opsz48'
import IconDoorFrontFill0Wght400Grad0Opsz48 from '../components/DoorFrontFill0Wght400Grad0Opsz48'
import IconDoorFrontFill0Wght500Grad0Opsz48 from '../components/DoorFrontFill0Wght500Grad0Opsz48'
import IconDoorFrontFill0Wght600Grad0Opsz48 from '../components/DoorFrontFill0Wght600Grad0Opsz48'
import IconDoorFrontFill0Wght700Grad0Opsz48 from '../components/DoorFrontFill0Wght700Grad0Opsz48'
import IconDoorFrontFill1Wght100Grad0Opsz48 from '../components/DoorFrontFill1Wght100Grad0Opsz48'
import IconDoorFrontFill1Wght200Grad0Opsz48 from '../components/DoorFrontFill1Wght200Grad0Opsz48'
import IconDoorFrontFill1Wght300Grad0Opsz48 from '../components/DoorFrontFill1Wght300Grad0Opsz48'
import IconDoorFrontFill1Wght400Grad0Opsz48 from '../components/DoorFrontFill1Wght400Grad0Opsz48'
import IconDoorFrontFill1Wght500Grad0Opsz48 from '../components/DoorFrontFill1Wght500Grad0Opsz48'
import IconDoorFrontFill1Wght600Grad0Opsz48 from '../components/DoorFrontFill1Wght600Grad0Opsz48'
import IconDoorFrontFill1Wght700Grad0Opsz48 from '../components/DoorFrontFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoorFront = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoorFrontFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoorFrontFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoorFrontFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoorFrontFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoorFrontFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoorFrontFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoorFrontFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoorFrontFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoorFrontFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoorFrontFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoorFrontFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoorFrontFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoorFrontFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoorFrontFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
