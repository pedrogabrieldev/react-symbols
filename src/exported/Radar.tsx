import IconRadarFill0Wght100Grad0Opsz48 from '../components/RadarFill0Wght100Grad0Opsz48'
import IconRadarFill0Wght200Grad0Opsz48 from '../components/RadarFill0Wght200Grad0Opsz48'
import IconRadarFill0Wght300Grad0Opsz48 from '../components/RadarFill0Wght300Grad0Opsz48'
import IconRadarFill0Wght400Grad0Opsz48 from '../components/RadarFill0Wght400Grad0Opsz48'
import IconRadarFill0Wght500Grad0Opsz48 from '../components/RadarFill0Wght500Grad0Opsz48'
import IconRadarFill0Wght600Grad0Opsz48 from '../components/RadarFill0Wght600Grad0Opsz48'
import IconRadarFill0Wght700Grad0Opsz48 from '../components/RadarFill0Wght700Grad0Opsz48'
import IconRadarFill1Wght100Grad0Opsz48 from '../components/RadarFill1Wght100Grad0Opsz48'
import IconRadarFill1Wght200Grad0Opsz48 from '../components/RadarFill1Wght200Grad0Opsz48'
import IconRadarFill1Wght300Grad0Opsz48 from '../components/RadarFill1Wght300Grad0Opsz48'
import IconRadarFill1Wght400Grad0Opsz48 from '../components/RadarFill1Wght400Grad0Opsz48'
import IconRadarFill1Wght500Grad0Opsz48 from '../components/RadarFill1Wght500Grad0Opsz48'
import IconRadarFill1Wght600Grad0Opsz48 from '../components/RadarFill1Wght600Grad0Opsz48'
import IconRadarFill1Wght700Grad0Opsz48 from '../components/RadarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRadar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRadarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRadarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRadarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRadarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRadarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRadarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRadarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRadarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRadarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRadarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRadarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRadarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRadarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRadarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
