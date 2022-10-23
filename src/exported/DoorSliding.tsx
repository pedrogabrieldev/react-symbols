import IconDoorSlidingFill0Wght100Grad0Opsz48 from '../components/DoorSlidingFill0Wght100Grad0Opsz48'
import IconDoorSlidingFill0Wght200Grad0Opsz48 from '../components/DoorSlidingFill0Wght200Grad0Opsz48'
import IconDoorSlidingFill0Wght300Grad0Opsz48 from '../components/DoorSlidingFill0Wght300Grad0Opsz48'
import IconDoorSlidingFill0Wght400Grad0Opsz48 from '../components/DoorSlidingFill0Wght400Grad0Opsz48'
import IconDoorSlidingFill0Wght500Grad0Opsz48 from '../components/DoorSlidingFill0Wght500Grad0Opsz48'
import IconDoorSlidingFill0Wght600Grad0Opsz48 from '../components/DoorSlidingFill0Wght600Grad0Opsz48'
import IconDoorSlidingFill0Wght700Grad0Opsz48 from '../components/DoorSlidingFill0Wght700Grad0Opsz48'
import IconDoorSlidingFill1Wght100Grad0Opsz48 from '../components/DoorSlidingFill1Wght100Grad0Opsz48'
import IconDoorSlidingFill1Wght200Grad0Opsz48 from '../components/DoorSlidingFill1Wght200Grad0Opsz48'
import IconDoorSlidingFill1Wght300Grad0Opsz48 from '../components/DoorSlidingFill1Wght300Grad0Opsz48'
import IconDoorSlidingFill1Wght400Grad0Opsz48 from '../components/DoorSlidingFill1Wght400Grad0Opsz48'
import IconDoorSlidingFill1Wght500Grad0Opsz48 from '../components/DoorSlidingFill1Wght500Grad0Opsz48'
import IconDoorSlidingFill1Wght600Grad0Opsz48 from '../components/DoorSlidingFill1Wght600Grad0Opsz48'
import IconDoorSlidingFill1Wght700Grad0Opsz48 from '../components/DoorSlidingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoorSliding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoorSlidingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoorSlidingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoorSlidingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoorSlidingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoorSlidingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoorSlidingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoorSlidingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoorSlidingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoorSlidingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoorSlidingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoorSlidingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoorSlidingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoorSlidingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoorSlidingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
