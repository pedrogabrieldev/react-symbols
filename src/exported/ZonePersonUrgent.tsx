import IconZonePersonUrgentFill0Wght100Grad0Opsz48 from '../components/ZonePersonUrgentFill0Wght100Grad0Opsz48'
import IconZonePersonUrgentFill0Wght200Grad0Opsz48 from '../components/ZonePersonUrgentFill0Wght200Grad0Opsz48'
import IconZonePersonUrgentFill0Wght300Grad0Opsz48 from '../components/ZonePersonUrgentFill0Wght300Grad0Opsz48'
import IconZonePersonUrgentFill0Wght400Grad0Opsz48 from '../components/ZonePersonUrgentFill0Wght400Grad0Opsz48'
import IconZonePersonUrgentFill0Wght500Grad0Opsz48 from '../components/ZonePersonUrgentFill0Wght500Grad0Opsz48'
import IconZonePersonUrgentFill0Wght600Grad0Opsz48 from '../components/ZonePersonUrgentFill0Wght600Grad0Opsz48'
import IconZonePersonUrgentFill0Wght700Grad0Opsz48 from '../components/ZonePersonUrgentFill0Wght700Grad0Opsz48'
import IconZonePersonUrgentFill1Wght100Grad0Opsz48 from '../components/ZonePersonUrgentFill1Wght100Grad0Opsz48'
import IconZonePersonUrgentFill1Wght200Grad0Opsz48 from '../components/ZonePersonUrgentFill1Wght200Grad0Opsz48'
import IconZonePersonUrgentFill1Wght300Grad0Opsz48 from '../components/ZonePersonUrgentFill1Wght300Grad0Opsz48'
import IconZonePersonUrgentFill1Wght400Grad0Opsz48 from '../components/ZonePersonUrgentFill1Wght400Grad0Opsz48'
import IconZonePersonUrgentFill1Wght500Grad0Opsz48 from '../components/ZonePersonUrgentFill1Wght500Grad0Opsz48'
import IconZonePersonUrgentFill1Wght600Grad0Opsz48 from '../components/ZonePersonUrgentFill1Wght600Grad0Opsz48'
import IconZonePersonUrgentFill1Wght700Grad0Opsz48 from '../components/ZonePersonUrgentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconZonePersonUrgent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconZonePersonUrgentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconZonePersonUrgentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconZonePersonUrgentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconZonePersonUrgentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconZonePersonUrgentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconZonePersonUrgentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconZonePersonUrgentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconZonePersonUrgentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconZonePersonUrgentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconZonePersonUrgentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconZonePersonUrgentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconZonePersonUrgentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconZonePersonUrgentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconZonePersonUrgentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
