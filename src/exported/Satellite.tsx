import IconSatelliteFill0Wght100Grad0Opsz48 from '../components/SatelliteFill0Wght100Grad0Opsz48'
import IconSatelliteFill0Wght200Grad0Opsz48 from '../components/SatelliteFill0Wght200Grad0Opsz48'
import IconSatelliteFill0Wght300Grad0Opsz48 from '../components/SatelliteFill0Wght300Grad0Opsz48'
import IconSatelliteFill0Wght400Grad0Opsz48 from '../components/SatelliteFill0Wght400Grad0Opsz48'
import IconSatelliteFill0Wght500Grad0Opsz48 from '../components/SatelliteFill0Wght500Grad0Opsz48'
import IconSatelliteFill0Wght600Grad0Opsz48 from '../components/SatelliteFill0Wght600Grad0Opsz48'
import IconSatelliteFill0Wght700Grad0Opsz48 from '../components/SatelliteFill0Wght700Grad0Opsz48'
import IconSatelliteFill1Wght100Grad0Opsz48 from '../components/SatelliteFill1Wght100Grad0Opsz48'
import IconSatelliteFill1Wght200Grad0Opsz48 from '../components/SatelliteFill1Wght200Grad0Opsz48'
import IconSatelliteFill1Wght300Grad0Opsz48 from '../components/SatelliteFill1Wght300Grad0Opsz48'
import IconSatelliteFill1Wght400Grad0Opsz48 from '../components/SatelliteFill1Wght400Grad0Opsz48'
import IconSatelliteFill1Wght500Grad0Opsz48 from '../components/SatelliteFill1Wght500Grad0Opsz48'
import IconSatelliteFill1Wght600Grad0Opsz48 from '../components/SatelliteFill1Wght600Grad0Opsz48'
import IconSatelliteFill1Wght700Grad0Opsz48 from '../components/SatelliteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSatellite = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSatelliteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSatelliteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSatelliteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSatelliteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSatelliteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSatelliteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSatelliteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSatelliteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSatelliteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSatelliteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSatelliteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSatelliteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSatelliteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSatelliteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
