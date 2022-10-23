import IconFloorLampFill0Wght100Grad0Opsz48 from '../components/FloorLampFill0Wght100Grad0Opsz48'
import IconFloorLampFill0Wght200Grad0Opsz48 from '../components/FloorLampFill0Wght200Grad0Opsz48'
import IconFloorLampFill0Wght300Grad0Opsz48 from '../components/FloorLampFill0Wght300Grad0Opsz48'
import IconFloorLampFill0Wght400Grad0Opsz48 from '../components/FloorLampFill0Wght400Grad0Opsz48'
import IconFloorLampFill0Wght500Grad0Opsz48 from '../components/FloorLampFill0Wght500Grad0Opsz48'
import IconFloorLampFill0Wght600Grad0Opsz48 from '../components/FloorLampFill0Wght600Grad0Opsz48'
import IconFloorLampFill0Wght700Grad0Opsz48 from '../components/FloorLampFill0Wght700Grad0Opsz48'
import IconFloorLampFill1Wght100Grad0Opsz48 from '../components/FloorLampFill1Wght100Grad0Opsz48'
import IconFloorLampFill1Wght200Grad0Opsz48 from '../components/FloorLampFill1Wght200Grad0Opsz48'
import IconFloorLampFill1Wght300Grad0Opsz48 from '../components/FloorLampFill1Wght300Grad0Opsz48'
import IconFloorLampFill1Wght400Grad0Opsz48 from '../components/FloorLampFill1Wght400Grad0Opsz48'
import IconFloorLampFill1Wght500Grad0Opsz48 from '../components/FloorLampFill1Wght500Grad0Opsz48'
import IconFloorLampFill1Wght600Grad0Opsz48 from '../components/FloorLampFill1Wght600Grad0Opsz48'
import IconFloorLampFill1Wght700Grad0Opsz48 from '../components/FloorLampFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFloorLamp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFloorLampFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFloorLampFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFloorLampFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFloorLampFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFloorLampFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFloorLampFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFloorLampFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFloorLampFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFloorLampFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFloorLampFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFloorLampFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFloorLampFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFloorLampFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFloorLampFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
