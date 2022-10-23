import IconAirlineSeatFlatFill0Wght100Grad0Opsz48 from '../components/AirlineSeatFlatFill0Wght100Grad0Opsz48'
import IconAirlineSeatFlatFill0Wght200Grad0Opsz48 from '../components/AirlineSeatFlatFill0Wght200Grad0Opsz48'
import IconAirlineSeatFlatFill0Wght300Grad0Opsz48 from '../components/AirlineSeatFlatFill0Wght300Grad0Opsz48'
import IconAirlineSeatFlatFill0Wght400Grad0Opsz48 from '../components/AirlineSeatFlatFill0Wght400Grad0Opsz48'
import IconAirlineSeatFlatFill0Wght500Grad0Opsz48 from '../components/AirlineSeatFlatFill0Wght500Grad0Opsz48'
import IconAirlineSeatFlatFill0Wght600Grad0Opsz48 from '../components/AirlineSeatFlatFill0Wght600Grad0Opsz48'
import IconAirlineSeatFlatFill0Wght700Grad0Opsz48 from '../components/AirlineSeatFlatFill0Wght700Grad0Opsz48'
import IconAirlineSeatFlatFill1Wght100Grad0Opsz48 from '../components/AirlineSeatFlatFill1Wght100Grad0Opsz48'
import IconAirlineSeatFlatFill1Wght200Grad0Opsz48 from '../components/AirlineSeatFlatFill1Wght200Grad0Opsz48'
import IconAirlineSeatFlatFill1Wght300Grad0Opsz48 from '../components/AirlineSeatFlatFill1Wght300Grad0Opsz48'
import IconAirlineSeatFlatFill1Wght400Grad0Opsz48 from '../components/AirlineSeatFlatFill1Wght400Grad0Opsz48'
import IconAirlineSeatFlatFill1Wght500Grad0Opsz48 from '../components/AirlineSeatFlatFill1Wght500Grad0Opsz48'
import IconAirlineSeatFlatFill1Wght600Grad0Opsz48 from '../components/AirlineSeatFlatFill1Wght600Grad0Opsz48'
import IconAirlineSeatFlatFill1Wght700Grad0Opsz48 from '../components/AirlineSeatFlatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineSeatFlat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineSeatFlatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineSeatFlatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineSeatFlatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineSeatFlatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineSeatFlatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineSeatFlatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineSeatFlatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineSeatFlatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineSeatFlatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineSeatFlatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineSeatFlatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineSeatFlatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineSeatFlatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineSeatFlatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
