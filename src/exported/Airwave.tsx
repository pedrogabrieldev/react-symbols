import IconAirwaveFill0Wght100Grad0Opsz48 from '../components/AirwaveFill0Wght100Grad0Opsz48'
import IconAirwaveFill0Wght200Grad0Opsz48 from '../components/AirwaveFill0Wght200Grad0Opsz48'
import IconAirwaveFill0Wght300Grad0Opsz48 from '../components/AirwaveFill0Wght300Grad0Opsz48'
import IconAirwaveFill0Wght400Grad0Opsz48 from '../components/AirwaveFill0Wght400Grad0Opsz48'
import IconAirwaveFill0Wght500Grad0Opsz48 from '../components/AirwaveFill0Wght500Grad0Opsz48'
import IconAirwaveFill0Wght600Grad0Opsz48 from '../components/AirwaveFill0Wght600Grad0Opsz48'
import IconAirwaveFill0Wght700Grad0Opsz48 from '../components/AirwaveFill0Wght700Grad0Opsz48'
import IconAirwaveFill1Wght100Grad0Opsz48 from '../components/AirwaveFill1Wght100Grad0Opsz48'
import IconAirwaveFill1Wght200Grad0Opsz48 from '../components/AirwaveFill1Wght200Grad0Opsz48'
import IconAirwaveFill1Wght300Grad0Opsz48 from '../components/AirwaveFill1Wght300Grad0Opsz48'
import IconAirwaveFill1Wght400Grad0Opsz48 from '../components/AirwaveFill1Wght400Grad0Opsz48'
import IconAirwaveFill1Wght500Grad0Opsz48 from '../components/AirwaveFill1Wght500Grad0Opsz48'
import IconAirwaveFill1Wght600Grad0Opsz48 from '../components/AirwaveFill1Wght600Grad0Opsz48'
import IconAirwaveFill1Wght700Grad0Opsz48 from '../components/AirwaveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirwave = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirwaveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirwaveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirwaveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirwaveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirwaveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirwaveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirwaveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirwaveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirwaveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirwaveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirwaveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirwaveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirwaveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirwaveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
