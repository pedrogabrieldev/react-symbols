import IconAirlineSeatReclineNormalFill0Wght100Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill0Wght100Grad0Opsz48'
import IconAirlineSeatReclineNormalFill0Wght200Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill0Wght200Grad0Opsz48'
import IconAirlineSeatReclineNormalFill0Wght300Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill0Wght300Grad0Opsz48'
import IconAirlineSeatReclineNormalFill0Wght400Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill0Wght400Grad0Opsz48'
import IconAirlineSeatReclineNormalFill0Wght500Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill0Wght500Grad0Opsz48'
import IconAirlineSeatReclineNormalFill0Wght600Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill0Wght600Grad0Opsz48'
import IconAirlineSeatReclineNormalFill0Wght700Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill0Wght700Grad0Opsz48'
import IconAirlineSeatReclineNormalFill1Wght100Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill1Wght100Grad0Opsz48'
import IconAirlineSeatReclineNormalFill1Wght200Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill1Wght200Grad0Opsz48'
import IconAirlineSeatReclineNormalFill1Wght300Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill1Wght300Grad0Opsz48'
import IconAirlineSeatReclineNormalFill1Wght400Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill1Wght400Grad0Opsz48'
import IconAirlineSeatReclineNormalFill1Wght500Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill1Wght500Grad0Opsz48'
import IconAirlineSeatReclineNormalFill1Wght600Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill1Wght600Grad0Opsz48'
import IconAirlineSeatReclineNormalFill1Wght700Grad0Opsz48 from '../components/AirlineSeatReclineNormalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineSeatReclineNormal = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineSeatReclineNormalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineSeatReclineNormalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineSeatReclineNormalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineSeatReclineNormalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineSeatReclineNormalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineSeatReclineNormalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineSeatReclineNormalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineSeatReclineNormalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineSeatReclineNormalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineSeatReclineNormalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineSeatReclineNormalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineSeatReclineNormalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineSeatReclineNormalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineSeatReclineNormalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
