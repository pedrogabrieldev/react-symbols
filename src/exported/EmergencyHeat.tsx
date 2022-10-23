import IconEmergencyHeatFill0Wght100Grad0Opsz48 from '../components/EmergencyHeatFill0Wght100Grad0Opsz48'
import IconEmergencyHeatFill0Wght200Grad0Opsz48 from '../components/EmergencyHeatFill0Wght200Grad0Opsz48'
import IconEmergencyHeatFill0Wght300Grad0Opsz48 from '../components/EmergencyHeatFill0Wght300Grad0Opsz48'
import IconEmergencyHeatFill0Wght400Grad0Opsz48 from '../components/EmergencyHeatFill0Wght400Grad0Opsz48'
import IconEmergencyHeatFill0Wght500Grad0Opsz48 from '../components/EmergencyHeatFill0Wght500Grad0Opsz48'
import IconEmergencyHeatFill0Wght600Grad0Opsz48 from '../components/EmergencyHeatFill0Wght600Grad0Opsz48'
import IconEmergencyHeatFill0Wght700Grad0Opsz48 from '../components/EmergencyHeatFill0Wght700Grad0Opsz48'
import IconEmergencyHeatFill1Wght100Grad0Opsz48 from '../components/EmergencyHeatFill1Wght100Grad0Opsz48'
import IconEmergencyHeatFill1Wght200Grad0Opsz48 from '../components/EmergencyHeatFill1Wght200Grad0Opsz48'
import IconEmergencyHeatFill1Wght300Grad0Opsz48 from '../components/EmergencyHeatFill1Wght300Grad0Opsz48'
import IconEmergencyHeatFill1Wght400Grad0Opsz48 from '../components/EmergencyHeatFill1Wght400Grad0Opsz48'
import IconEmergencyHeatFill1Wght500Grad0Opsz48 from '../components/EmergencyHeatFill1Wght500Grad0Opsz48'
import IconEmergencyHeatFill1Wght600Grad0Opsz48 from '../components/EmergencyHeatFill1Wght600Grad0Opsz48'
import IconEmergencyHeatFill1Wght700Grad0Opsz48 from '../components/EmergencyHeatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmergencyHeat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmergencyHeatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmergencyHeatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmergencyHeatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmergencyHeatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmergencyHeatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmergencyHeatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmergencyHeatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmergencyHeatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmergencyHeatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmergencyHeatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmergencyHeatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmergencyHeatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmergencyHeatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmergencyHeatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
