import IconZonePersonAlertFill0Wght100Grad0Opsz48 from '../components/ZonePersonAlertFill0Wght100Grad0Opsz48'
import IconZonePersonAlertFill0Wght200Grad0Opsz48 from '../components/ZonePersonAlertFill0Wght200Grad0Opsz48'
import IconZonePersonAlertFill0Wght300Grad0Opsz48 from '../components/ZonePersonAlertFill0Wght300Grad0Opsz48'
import IconZonePersonAlertFill0Wght400Grad0Opsz48 from '../components/ZonePersonAlertFill0Wght400Grad0Opsz48'
import IconZonePersonAlertFill0Wght500Grad0Opsz48 from '../components/ZonePersonAlertFill0Wght500Grad0Opsz48'
import IconZonePersonAlertFill0Wght600Grad0Opsz48 from '../components/ZonePersonAlertFill0Wght600Grad0Opsz48'
import IconZonePersonAlertFill0Wght700Grad0Opsz48 from '../components/ZonePersonAlertFill0Wght700Grad0Opsz48'
import IconZonePersonAlertFill1Wght100Grad0Opsz48 from '../components/ZonePersonAlertFill1Wght100Grad0Opsz48'
import IconZonePersonAlertFill1Wght200Grad0Opsz48 from '../components/ZonePersonAlertFill1Wght200Grad0Opsz48'
import IconZonePersonAlertFill1Wght300Grad0Opsz48 from '../components/ZonePersonAlertFill1Wght300Grad0Opsz48'
import IconZonePersonAlertFill1Wght400Grad0Opsz48 from '../components/ZonePersonAlertFill1Wght400Grad0Opsz48'
import IconZonePersonAlertFill1Wght500Grad0Opsz48 from '../components/ZonePersonAlertFill1Wght500Grad0Opsz48'
import IconZonePersonAlertFill1Wght600Grad0Opsz48 from '../components/ZonePersonAlertFill1Wght600Grad0Opsz48'
import IconZonePersonAlertFill1Wght700Grad0Opsz48 from '../components/ZonePersonAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconZonePersonAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconZonePersonAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconZonePersonAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconZonePersonAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconZonePersonAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconZonePersonAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconZonePersonAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconZonePersonAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconZonePersonAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconZonePersonAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconZonePersonAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconZonePersonAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconZonePersonAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconZonePersonAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconZonePersonAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
