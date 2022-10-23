import IconAirFreshenerFill0Wght100Grad0Opsz48 from '../components/AirFreshenerFill0Wght100Grad0Opsz48'
import IconAirFreshenerFill0Wght200Grad0Opsz48 from '../components/AirFreshenerFill0Wght200Grad0Opsz48'
import IconAirFreshenerFill0Wght300Grad0Opsz48 from '../components/AirFreshenerFill0Wght300Grad0Opsz48'
import IconAirFreshenerFill0Wght400Grad0Opsz48 from '../components/AirFreshenerFill0Wght400Grad0Opsz48'
import IconAirFreshenerFill0Wght500Grad0Opsz48 from '../components/AirFreshenerFill0Wght500Grad0Opsz48'
import IconAirFreshenerFill0Wght600Grad0Opsz48 from '../components/AirFreshenerFill0Wght600Grad0Opsz48'
import IconAirFreshenerFill0Wght700Grad0Opsz48 from '../components/AirFreshenerFill0Wght700Grad0Opsz48'
import IconAirFreshenerFill1Wght100Grad0Opsz48 from '../components/AirFreshenerFill1Wght100Grad0Opsz48'
import IconAirFreshenerFill1Wght200Grad0Opsz48 from '../components/AirFreshenerFill1Wght200Grad0Opsz48'
import IconAirFreshenerFill1Wght300Grad0Opsz48 from '../components/AirFreshenerFill1Wght300Grad0Opsz48'
import IconAirFreshenerFill1Wght400Grad0Opsz48 from '../components/AirFreshenerFill1Wght400Grad0Opsz48'
import IconAirFreshenerFill1Wght500Grad0Opsz48 from '../components/AirFreshenerFill1Wght500Grad0Opsz48'
import IconAirFreshenerFill1Wght600Grad0Opsz48 from '../components/AirFreshenerFill1Wght600Grad0Opsz48'
import IconAirFreshenerFill1Wght700Grad0Opsz48 from '../components/AirFreshenerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirFreshener = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirFreshenerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirFreshenerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirFreshenerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirFreshenerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirFreshenerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirFreshenerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirFreshenerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirFreshenerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirFreshenerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirFreshenerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirFreshenerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirFreshenerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirFreshenerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirFreshenerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
