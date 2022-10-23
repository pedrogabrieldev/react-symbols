import IconAirplanemodeActiveFill0Wght100Grad0Opsz48 from '../components/AirplanemodeActiveFill0Wght100Grad0Opsz48'
import IconAirplanemodeActiveFill0Wght200Grad0Opsz48 from '../components/AirplanemodeActiveFill0Wght200Grad0Opsz48'
import IconAirplanemodeActiveFill0Wght300Grad0Opsz48 from '../components/AirplanemodeActiveFill0Wght300Grad0Opsz48'
import IconAirplanemodeActiveFill0Wght400Grad0Opsz48 from '../components/AirplanemodeActiveFill0Wght400Grad0Opsz48'
import IconAirplanemodeActiveFill0Wght500Grad0Opsz48 from '../components/AirplanemodeActiveFill0Wght500Grad0Opsz48'
import IconAirplanemodeActiveFill0Wght600Grad0Opsz48 from '../components/AirplanemodeActiveFill0Wght600Grad0Opsz48'
import IconAirplanemodeActiveFill0Wght700Grad0Opsz48 from '../components/AirplanemodeActiveFill0Wght700Grad0Opsz48'
import IconAirplanemodeActiveFill1Wght100Grad0Opsz48 from '../components/AirplanemodeActiveFill1Wght100Grad0Opsz48'
import IconAirplanemodeActiveFill1Wght200Grad0Opsz48 from '../components/AirplanemodeActiveFill1Wght200Grad0Opsz48'
import IconAirplanemodeActiveFill1Wght300Grad0Opsz48 from '../components/AirplanemodeActiveFill1Wght300Grad0Opsz48'
import IconAirplanemodeActiveFill1Wght400Grad0Opsz48 from '../components/AirplanemodeActiveFill1Wght400Grad0Opsz48'
import IconAirplanemodeActiveFill1Wght500Grad0Opsz48 from '../components/AirplanemodeActiveFill1Wght500Grad0Opsz48'
import IconAirplanemodeActiveFill1Wght600Grad0Opsz48 from '../components/AirplanemodeActiveFill1Wght600Grad0Opsz48'
import IconAirplanemodeActiveFill1Wght700Grad0Opsz48 from '../components/AirplanemodeActiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirplanemodeActive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirplanemodeActiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirplanemodeActiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirplanemodeActiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirplanemodeActiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirplanemodeActiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirplanemodeActiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirplanemodeActiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirplanemodeActiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirplanemodeActiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirplanemodeActiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirplanemodeActiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirplanemodeActiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirplanemodeActiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirplanemodeActiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
