import IconAirlineSeatFlatAngledFill0Wght100Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill0Wght100Grad0Opsz48'
import IconAirlineSeatFlatAngledFill0Wght200Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill0Wght200Grad0Opsz48'
import IconAirlineSeatFlatAngledFill0Wght300Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill0Wght300Grad0Opsz48'
import IconAirlineSeatFlatAngledFill0Wght400Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill0Wght400Grad0Opsz48'
import IconAirlineSeatFlatAngledFill0Wght500Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill0Wght500Grad0Opsz48'
import IconAirlineSeatFlatAngledFill0Wght600Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill0Wght600Grad0Opsz48'
import IconAirlineSeatFlatAngledFill0Wght700Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill0Wght700Grad0Opsz48'
import IconAirlineSeatFlatAngledFill1Wght100Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill1Wght100Grad0Opsz48'
import IconAirlineSeatFlatAngledFill1Wght200Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill1Wght200Grad0Opsz48'
import IconAirlineSeatFlatAngledFill1Wght300Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill1Wght300Grad0Opsz48'
import IconAirlineSeatFlatAngledFill1Wght400Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill1Wght400Grad0Opsz48'
import IconAirlineSeatFlatAngledFill1Wght500Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill1Wght500Grad0Opsz48'
import IconAirlineSeatFlatAngledFill1Wght600Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill1Wght600Grad0Opsz48'
import IconAirlineSeatFlatAngledFill1Wght700Grad0Opsz48 from '../components/AirlineSeatFlatAngledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineSeatFlatAngled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineSeatFlatAngledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineSeatFlatAngledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineSeatFlatAngledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineSeatFlatAngledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineSeatFlatAngledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineSeatFlatAngledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineSeatFlatAngledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineSeatFlatAngledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineSeatFlatAngledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineSeatFlatAngledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineSeatFlatAngledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineSeatFlatAngledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineSeatFlatAngledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineSeatFlatAngledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
