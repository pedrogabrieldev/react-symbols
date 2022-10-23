import IconAirlineSeatReclineExtraFill0Wght100Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill0Wght100Grad0Opsz48'
import IconAirlineSeatReclineExtraFill0Wght200Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill0Wght200Grad0Opsz48'
import IconAirlineSeatReclineExtraFill0Wght300Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill0Wght300Grad0Opsz48'
import IconAirlineSeatReclineExtraFill0Wght400Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill0Wght400Grad0Opsz48'
import IconAirlineSeatReclineExtraFill0Wght500Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill0Wght500Grad0Opsz48'
import IconAirlineSeatReclineExtraFill0Wght600Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill0Wght600Grad0Opsz48'
import IconAirlineSeatReclineExtraFill0Wght700Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill0Wght700Grad0Opsz48'
import IconAirlineSeatReclineExtraFill1Wght100Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill1Wght100Grad0Opsz48'
import IconAirlineSeatReclineExtraFill1Wght200Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill1Wght200Grad0Opsz48'
import IconAirlineSeatReclineExtraFill1Wght300Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill1Wght300Grad0Opsz48'
import IconAirlineSeatReclineExtraFill1Wght400Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill1Wght400Grad0Opsz48'
import IconAirlineSeatReclineExtraFill1Wght500Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill1Wght500Grad0Opsz48'
import IconAirlineSeatReclineExtraFill1Wght600Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill1Wght600Grad0Opsz48'
import IconAirlineSeatReclineExtraFill1Wght700Grad0Opsz48 from '../components/AirlineSeatReclineExtraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineSeatReclineExtra = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineSeatReclineExtraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineSeatReclineExtraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineSeatReclineExtraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineSeatReclineExtraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineSeatReclineExtraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineSeatReclineExtraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineSeatReclineExtraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineSeatReclineExtraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineSeatReclineExtraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineSeatReclineExtraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineSeatReclineExtraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineSeatReclineExtraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineSeatReclineExtraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineSeatReclineExtraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
