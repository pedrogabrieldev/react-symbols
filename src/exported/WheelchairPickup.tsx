import IconWheelchairPickupFill0Wght100Grad0Opsz48 from '../components/WheelchairPickupFill0Wght100Grad0Opsz48'
import IconWheelchairPickupFill0Wght200Grad0Opsz48 from '../components/WheelchairPickupFill0Wght200Grad0Opsz48'
import IconWheelchairPickupFill0Wght300Grad0Opsz48 from '../components/WheelchairPickupFill0Wght300Grad0Opsz48'
import IconWheelchairPickupFill0Wght400Grad0Opsz48 from '../components/WheelchairPickupFill0Wght400Grad0Opsz48'
import IconWheelchairPickupFill0Wght500Grad0Opsz48 from '../components/WheelchairPickupFill0Wght500Grad0Opsz48'
import IconWheelchairPickupFill0Wght600Grad0Opsz48 from '../components/WheelchairPickupFill0Wght600Grad0Opsz48'
import IconWheelchairPickupFill0Wght700Grad0Opsz48 from '../components/WheelchairPickupFill0Wght700Grad0Opsz48'
import IconWheelchairPickupFill1Wght100Grad0Opsz48 from '../components/WheelchairPickupFill1Wght100Grad0Opsz48'
import IconWheelchairPickupFill1Wght200Grad0Opsz48 from '../components/WheelchairPickupFill1Wght200Grad0Opsz48'
import IconWheelchairPickupFill1Wght300Grad0Opsz48 from '../components/WheelchairPickupFill1Wght300Grad0Opsz48'
import IconWheelchairPickupFill1Wght400Grad0Opsz48 from '../components/WheelchairPickupFill1Wght400Grad0Opsz48'
import IconWheelchairPickupFill1Wght500Grad0Opsz48 from '../components/WheelchairPickupFill1Wght500Grad0Opsz48'
import IconWheelchairPickupFill1Wght600Grad0Opsz48 from '../components/WheelchairPickupFill1Wght600Grad0Opsz48'
import IconWheelchairPickupFill1Wght700Grad0Opsz48 from '../components/WheelchairPickupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWheelchairPickup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWheelchairPickupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWheelchairPickupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWheelchairPickupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWheelchairPickupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWheelchairPickupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWheelchairPickupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWheelchairPickupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWheelchairPickupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWheelchairPickupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWheelchairPickupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWheelchairPickupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWheelchairPickupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWheelchairPickupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWheelchairPickupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
