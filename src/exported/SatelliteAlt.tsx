import IconSatelliteAltFill0Wght100Grad0Opsz48 from '../components/SatelliteAltFill0Wght100Grad0Opsz48'
import IconSatelliteAltFill0Wght200Grad0Opsz48 from '../components/SatelliteAltFill0Wght200Grad0Opsz48'
import IconSatelliteAltFill0Wght300Grad0Opsz48 from '../components/SatelliteAltFill0Wght300Grad0Opsz48'
import IconSatelliteAltFill0Wght400Grad0Opsz48 from '../components/SatelliteAltFill0Wght400Grad0Opsz48'
import IconSatelliteAltFill0Wght500Grad0Opsz48 from '../components/SatelliteAltFill0Wght500Grad0Opsz48'
import IconSatelliteAltFill0Wght600Grad0Opsz48 from '../components/SatelliteAltFill0Wght600Grad0Opsz48'
import IconSatelliteAltFill0Wght700Grad0Opsz48 from '../components/SatelliteAltFill0Wght700Grad0Opsz48'
import IconSatelliteAltFill1Wght100Grad0Opsz48 from '../components/SatelliteAltFill1Wght100Grad0Opsz48'
import IconSatelliteAltFill1Wght200Grad0Opsz48 from '../components/SatelliteAltFill1Wght200Grad0Opsz48'
import IconSatelliteAltFill1Wght300Grad0Opsz48 from '../components/SatelliteAltFill1Wght300Grad0Opsz48'
import IconSatelliteAltFill1Wght400Grad0Opsz48 from '../components/SatelliteAltFill1Wght400Grad0Opsz48'
import IconSatelliteAltFill1Wght500Grad0Opsz48 from '../components/SatelliteAltFill1Wght500Grad0Opsz48'
import IconSatelliteAltFill1Wght600Grad0Opsz48 from '../components/SatelliteAltFill1Wght600Grad0Opsz48'
import IconSatelliteAltFill1Wght700Grad0Opsz48 from '../components/SatelliteAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSatelliteAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSatelliteAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSatelliteAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSatelliteAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSatelliteAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSatelliteAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSatelliteAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSatelliteAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSatelliteAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSatelliteAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSatelliteAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSatelliteAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSatelliteAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSatelliteAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSatelliteAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
