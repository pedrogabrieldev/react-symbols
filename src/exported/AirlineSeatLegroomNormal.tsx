import IconAirlineSeatLegroomNormalFill0Wght100Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill0Wght100Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill0Wght200Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill0Wght200Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill0Wght300Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill0Wght300Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill0Wght400Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill0Wght400Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill0Wght500Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill0Wght500Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill0Wght600Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill0Wght600Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill0Wght700Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill0Wght700Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill1Wght100Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill1Wght100Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill1Wght200Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill1Wght200Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill1Wght300Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill1Wght300Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill1Wght400Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill1Wght400Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill1Wght500Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill1Wght500Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill1Wght600Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill1Wght600Grad0Opsz48'
import IconAirlineSeatLegroomNormalFill1Wght700Grad0Opsz48 from '../components/AirlineSeatLegroomNormalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineSeatLegroomNormal = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineSeatLegroomNormalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineSeatLegroomNormalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineSeatLegroomNormalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineSeatLegroomNormalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineSeatLegroomNormalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineSeatLegroomNormalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineSeatLegroomNormalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineSeatLegroomNormalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineSeatLegroomNormalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineSeatLegroomNormalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineSeatLegroomNormalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineSeatLegroomNormalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineSeatLegroomNormalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineSeatLegroomNormalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
