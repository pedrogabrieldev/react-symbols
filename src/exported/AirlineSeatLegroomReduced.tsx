import IconAirlineSeatLegroomReducedFill0Wght100Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill0Wght100Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill0Wght200Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill0Wght200Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill0Wght300Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill0Wght300Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill0Wght400Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill0Wght400Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill0Wght500Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill0Wght500Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill0Wght600Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill0Wght600Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill0Wght700Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill0Wght700Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill1Wght100Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill1Wght100Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill1Wght200Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill1Wght200Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill1Wght300Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill1Wght300Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill1Wght400Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill1Wght400Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill1Wght500Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill1Wght500Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill1Wght600Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill1Wght600Grad0Opsz48'
import IconAirlineSeatLegroomReducedFill1Wght700Grad0Opsz48 from '../components/AirlineSeatLegroomReducedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineSeatLegroomReduced = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineSeatLegroomReducedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineSeatLegroomReducedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineSeatLegroomReducedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineSeatLegroomReducedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineSeatLegroomReducedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineSeatLegroomReducedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineSeatLegroomReducedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineSeatLegroomReducedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineSeatLegroomReducedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineSeatLegroomReducedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineSeatLegroomReducedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineSeatLegroomReducedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineSeatLegroomReducedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineSeatLegroomReducedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
