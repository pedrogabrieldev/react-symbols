import IconAirlineSeatLegroomExtraFill0Wght100Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill0Wght100Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill0Wght200Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill0Wght200Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill0Wght300Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill0Wght300Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill0Wght400Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill0Wght400Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill0Wght500Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill0Wght500Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill0Wght600Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill0Wght600Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill0Wght700Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill0Wght700Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill1Wght100Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill1Wght100Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill1Wght200Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill1Wght200Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill1Wght300Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill1Wght300Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill1Wght400Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill1Wght400Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill1Wght500Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill1Wght500Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill1Wght600Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill1Wght600Grad0Opsz48'
import IconAirlineSeatLegroomExtraFill1Wght700Grad0Opsz48 from '../components/AirlineSeatLegroomExtraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineSeatLegroomExtra = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineSeatLegroomExtraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineSeatLegroomExtraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineSeatLegroomExtraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineSeatLegroomExtraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineSeatLegroomExtraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineSeatLegroomExtraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineSeatLegroomExtraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineSeatLegroomExtraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineSeatLegroomExtraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineSeatLegroomExtraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineSeatLegroomExtraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineSeatLegroomExtraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineSeatLegroomExtraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineSeatLegroomExtraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
