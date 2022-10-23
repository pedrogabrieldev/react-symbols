import IconEmergencyHomeFill0Wght100Grad0Opsz48 from '../components/EmergencyHomeFill0Wght100Grad0Opsz48'
import IconEmergencyHomeFill0Wght200Grad0Opsz48 from '../components/EmergencyHomeFill0Wght200Grad0Opsz48'
import IconEmergencyHomeFill0Wght300Grad0Opsz48 from '../components/EmergencyHomeFill0Wght300Grad0Opsz48'
import IconEmergencyHomeFill0Wght400Grad0Opsz48 from '../components/EmergencyHomeFill0Wght400Grad0Opsz48'
import IconEmergencyHomeFill0Wght500Grad0Opsz48 from '../components/EmergencyHomeFill0Wght500Grad0Opsz48'
import IconEmergencyHomeFill0Wght600Grad0Opsz48 from '../components/EmergencyHomeFill0Wght600Grad0Opsz48'
import IconEmergencyHomeFill0Wght700Grad0Opsz48 from '../components/EmergencyHomeFill0Wght700Grad0Opsz48'
import IconEmergencyHomeFill1Wght100Grad0Opsz48 from '../components/EmergencyHomeFill1Wght100Grad0Opsz48'
import IconEmergencyHomeFill1Wght200Grad0Opsz48 from '../components/EmergencyHomeFill1Wght200Grad0Opsz48'
import IconEmergencyHomeFill1Wght300Grad0Opsz48 from '../components/EmergencyHomeFill1Wght300Grad0Opsz48'
import IconEmergencyHomeFill1Wght400Grad0Opsz48 from '../components/EmergencyHomeFill1Wght400Grad0Opsz48'
import IconEmergencyHomeFill1Wght500Grad0Opsz48 from '../components/EmergencyHomeFill1Wght500Grad0Opsz48'
import IconEmergencyHomeFill1Wght600Grad0Opsz48 from '../components/EmergencyHomeFill1Wght600Grad0Opsz48'
import IconEmergencyHomeFill1Wght700Grad0Opsz48 from '../components/EmergencyHomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmergencyHome = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmergencyHomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmergencyHomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmergencyHomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmergencyHomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmergencyHomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmergencyHomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmergencyHomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmergencyHomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmergencyHomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmergencyHomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmergencyHomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmergencyHomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmergencyHomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmergencyHomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
