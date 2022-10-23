import IconParkFill0Wght100Grad0Opsz48 from '../components/ParkFill0Wght100Grad0Opsz48'
import IconParkFill0Wght200Grad0Opsz48 from '../components/ParkFill0Wght200Grad0Opsz48'
import IconParkFill0Wght300Grad0Opsz48 from '../components/ParkFill0Wght300Grad0Opsz48'
import IconParkFill0Wght400Grad0Opsz48 from '../components/ParkFill0Wght400Grad0Opsz48'
import IconParkFill0Wght500Grad0Opsz48 from '../components/ParkFill0Wght500Grad0Opsz48'
import IconParkFill0Wght600Grad0Opsz48 from '../components/ParkFill0Wght600Grad0Opsz48'
import IconParkFill0Wght700Grad0Opsz48 from '../components/ParkFill0Wght700Grad0Opsz48'
import IconParkFill1Wght100Grad0Opsz48 from '../components/ParkFill1Wght100Grad0Opsz48'
import IconParkFill1Wght200Grad0Opsz48 from '../components/ParkFill1Wght200Grad0Opsz48'
import IconParkFill1Wght300Grad0Opsz48 from '../components/ParkFill1Wght300Grad0Opsz48'
import IconParkFill1Wght400Grad0Opsz48 from '../components/ParkFill1Wght400Grad0Opsz48'
import IconParkFill1Wght500Grad0Opsz48 from '../components/ParkFill1Wght500Grad0Opsz48'
import IconParkFill1Wght600Grad0Opsz48 from '../components/ParkFill1Wght600Grad0Opsz48'
import IconParkFill1Wght700Grad0Opsz48 from '../components/ParkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPark = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconParkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconParkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconParkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconParkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconParkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconParkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconParkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconParkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconParkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconParkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconParkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconParkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconParkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconParkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
