import IconAirplanemodeInactiveFill0Wght100Grad0Opsz48 from '../components/AirplanemodeInactiveFill0Wght100Grad0Opsz48'
import IconAirplanemodeInactiveFill0Wght200Grad0Opsz48 from '../components/AirplanemodeInactiveFill0Wght200Grad0Opsz48'
import IconAirplanemodeInactiveFill0Wght300Grad0Opsz48 from '../components/AirplanemodeInactiveFill0Wght300Grad0Opsz48'
import IconAirplanemodeInactiveFill0Wght400Grad0Opsz48 from '../components/AirplanemodeInactiveFill0Wght400Grad0Opsz48'
import IconAirplanemodeInactiveFill0Wght500Grad0Opsz48 from '../components/AirplanemodeInactiveFill0Wght500Grad0Opsz48'
import IconAirplanemodeInactiveFill0Wght600Grad0Opsz48 from '../components/AirplanemodeInactiveFill0Wght600Grad0Opsz48'
import IconAirplanemodeInactiveFill0Wght700Grad0Opsz48 from '../components/AirplanemodeInactiveFill0Wght700Grad0Opsz48'
import IconAirplanemodeInactiveFill1Wght100Grad0Opsz48 from '../components/AirplanemodeInactiveFill1Wght100Grad0Opsz48'
import IconAirplanemodeInactiveFill1Wght200Grad0Opsz48 from '../components/AirplanemodeInactiveFill1Wght200Grad0Opsz48'
import IconAirplanemodeInactiveFill1Wght300Grad0Opsz48 from '../components/AirplanemodeInactiveFill1Wght300Grad0Opsz48'
import IconAirplanemodeInactiveFill1Wght400Grad0Opsz48 from '../components/AirplanemodeInactiveFill1Wght400Grad0Opsz48'
import IconAirplanemodeInactiveFill1Wght500Grad0Opsz48 from '../components/AirplanemodeInactiveFill1Wght500Grad0Opsz48'
import IconAirplanemodeInactiveFill1Wght600Grad0Opsz48 from '../components/AirplanemodeInactiveFill1Wght600Grad0Opsz48'
import IconAirplanemodeInactiveFill1Wght700Grad0Opsz48 from '../components/AirplanemodeInactiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirplanemodeInactive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirplanemodeInactiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirplanemodeInactiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirplanemodeInactiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirplanemodeInactiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirplanemodeInactiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirplanemodeInactiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirplanemodeInactiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirplanemodeInactiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirplanemodeInactiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirplanemodeInactiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirplanemodeInactiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirplanemodeInactiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirplanemodeInactiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirplanemodeInactiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
