import IconDoorBackFill0Wght100Grad0Opsz48 from '../components/DoorBackFill0Wght100Grad0Opsz48'
import IconDoorBackFill0Wght200Grad0Opsz48 from '../components/DoorBackFill0Wght200Grad0Opsz48'
import IconDoorBackFill0Wght300Grad0Opsz48 from '../components/DoorBackFill0Wght300Grad0Opsz48'
import IconDoorBackFill0Wght400Grad0Opsz48 from '../components/DoorBackFill0Wght400Grad0Opsz48'
import IconDoorBackFill0Wght500Grad0Opsz48 from '../components/DoorBackFill0Wght500Grad0Opsz48'
import IconDoorBackFill0Wght600Grad0Opsz48 from '../components/DoorBackFill0Wght600Grad0Opsz48'
import IconDoorBackFill0Wght700Grad0Opsz48 from '../components/DoorBackFill0Wght700Grad0Opsz48'
import IconDoorBackFill1Wght100Grad0Opsz48 from '../components/DoorBackFill1Wght100Grad0Opsz48'
import IconDoorBackFill1Wght200Grad0Opsz48 from '../components/DoorBackFill1Wght200Grad0Opsz48'
import IconDoorBackFill1Wght300Grad0Opsz48 from '../components/DoorBackFill1Wght300Grad0Opsz48'
import IconDoorBackFill1Wght400Grad0Opsz48 from '../components/DoorBackFill1Wght400Grad0Opsz48'
import IconDoorBackFill1Wght500Grad0Opsz48 from '../components/DoorBackFill1Wght500Grad0Opsz48'
import IconDoorBackFill1Wght600Grad0Opsz48 from '../components/DoorBackFill1Wght600Grad0Opsz48'
import IconDoorBackFill1Wght700Grad0Opsz48 from '../components/DoorBackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoorBack = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoorBackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoorBackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoorBackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoorBackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoorBackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoorBackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoorBackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoorBackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoorBackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoorBackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoorBackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoorBackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoorBackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoorBackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
