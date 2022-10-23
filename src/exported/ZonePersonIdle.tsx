import IconZonePersonIdleFill0Wght100Grad0Opsz48 from '../components/ZonePersonIdleFill0Wght100Grad0Opsz48'
import IconZonePersonIdleFill0Wght200Grad0Opsz48 from '../components/ZonePersonIdleFill0Wght200Grad0Opsz48'
import IconZonePersonIdleFill0Wght300Grad0Opsz48 from '../components/ZonePersonIdleFill0Wght300Grad0Opsz48'
import IconZonePersonIdleFill0Wght400Grad0Opsz48 from '../components/ZonePersonIdleFill0Wght400Grad0Opsz48'
import IconZonePersonIdleFill0Wght500Grad0Opsz48 from '../components/ZonePersonIdleFill0Wght500Grad0Opsz48'
import IconZonePersonIdleFill0Wght600Grad0Opsz48 from '../components/ZonePersonIdleFill0Wght600Grad0Opsz48'
import IconZonePersonIdleFill0Wght700Grad0Opsz48 from '../components/ZonePersonIdleFill0Wght700Grad0Opsz48'
import IconZonePersonIdleFill1Wght100Grad0Opsz48 from '../components/ZonePersonIdleFill1Wght100Grad0Opsz48'
import IconZonePersonIdleFill1Wght200Grad0Opsz48 from '../components/ZonePersonIdleFill1Wght200Grad0Opsz48'
import IconZonePersonIdleFill1Wght300Grad0Opsz48 from '../components/ZonePersonIdleFill1Wght300Grad0Opsz48'
import IconZonePersonIdleFill1Wght400Grad0Opsz48 from '../components/ZonePersonIdleFill1Wght400Grad0Opsz48'
import IconZonePersonIdleFill1Wght500Grad0Opsz48 from '../components/ZonePersonIdleFill1Wght500Grad0Opsz48'
import IconZonePersonIdleFill1Wght600Grad0Opsz48 from '../components/ZonePersonIdleFill1Wght600Grad0Opsz48'
import IconZonePersonIdleFill1Wght700Grad0Opsz48 from '../components/ZonePersonIdleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconZonePersonIdle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconZonePersonIdleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconZonePersonIdleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconZonePersonIdleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconZonePersonIdleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconZonePersonIdleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconZonePersonIdleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconZonePersonIdleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconZonePersonIdleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconZonePersonIdleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconZonePersonIdleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconZonePersonIdleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconZonePersonIdleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconZonePersonIdleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconZonePersonIdleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
