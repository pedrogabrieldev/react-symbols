import IconAirplayFill0Wght100Grad0Opsz48 from '../components/AirplayFill0Wght100Grad0Opsz48'
import IconAirplayFill0Wght200Grad0Opsz48 from '../components/AirplayFill0Wght200Grad0Opsz48'
import IconAirplayFill0Wght300Grad0Opsz48 from '../components/AirplayFill0Wght300Grad0Opsz48'
import IconAirplayFill0Wght400Grad0Opsz48 from '../components/AirplayFill0Wght400Grad0Opsz48'
import IconAirplayFill0Wght500Grad0Opsz48 from '../components/AirplayFill0Wght500Grad0Opsz48'
import IconAirplayFill0Wght600Grad0Opsz48 from '../components/AirplayFill0Wght600Grad0Opsz48'
import IconAirplayFill0Wght700Grad0Opsz48 from '../components/AirplayFill0Wght700Grad0Opsz48'
import IconAirplayFill1Wght100Grad0Opsz48 from '../components/AirplayFill1Wght100Grad0Opsz48'
import IconAirplayFill1Wght200Grad0Opsz48 from '../components/AirplayFill1Wght200Grad0Opsz48'
import IconAirplayFill1Wght300Grad0Opsz48 from '../components/AirplayFill1Wght300Grad0Opsz48'
import IconAirplayFill1Wght400Grad0Opsz48 from '../components/AirplayFill1Wght400Grad0Opsz48'
import IconAirplayFill1Wght500Grad0Opsz48 from '../components/AirplayFill1Wght500Grad0Opsz48'
import IconAirplayFill1Wght600Grad0Opsz48 from '../components/AirplayFill1Wght600Grad0Opsz48'
import IconAirplayFill1Wght700Grad0Opsz48 from '../components/AirplayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirplay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirplayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirplayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirplayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirplayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirplayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirplayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirplayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirplayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirplayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirplayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirplayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirplayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirplayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirplayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
