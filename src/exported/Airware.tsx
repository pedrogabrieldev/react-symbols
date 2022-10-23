import IconAirwareFill0Wght100Grad0Opsz48 from '../components/AirwareFill0Wght100Grad0Opsz48'
import IconAirwareFill0Wght200Grad0Opsz48 from '../components/AirwareFill0Wght200Grad0Opsz48'
import IconAirwareFill0Wght300Grad0Opsz48 from '../components/AirwareFill0Wght300Grad0Opsz48'
import IconAirwareFill0Wght400Grad0Opsz48 from '../components/AirwareFill0Wght400Grad0Opsz48'
import IconAirwareFill0Wght500Grad0Opsz48 from '../components/AirwareFill0Wght500Grad0Opsz48'
import IconAirwareFill0Wght600Grad0Opsz48 from '../components/AirwareFill0Wght600Grad0Opsz48'
import IconAirwareFill0Wght700Grad0Opsz48 from '../components/AirwareFill0Wght700Grad0Opsz48'
import IconAirwareFill1Wght100Grad0Opsz48 from '../components/AirwareFill1Wght100Grad0Opsz48'
import IconAirwareFill1Wght200Grad0Opsz48 from '../components/AirwareFill1Wght200Grad0Opsz48'
import IconAirwareFill1Wght300Grad0Opsz48 from '../components/AirwareFill1Wght300Grad0Opsz48'
import IconAirwareFill1Wght400Grad0Opsz48 from '../components/AirwareFill1Wght400Grad0Opsz48'
import IconAirwareFill1Wght500Grad0Opsz48 from '../components/AirwareFill1Wght500Grad0Opsz48'
import IconAirwareFill1Wght600Grad0Opsz48 from '../components/AirwareFill1Wght600Grad0Opsz48'
import IconAirwareFill1Wght700Grad0Opsz48 from '../components/AirwareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirware = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirwareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirwareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirwareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirwareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirwareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirwareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirwareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirwareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirwareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirwareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirwareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirwareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirwareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirwareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
