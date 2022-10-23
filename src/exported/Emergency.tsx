import IconEmergencyFill0Wght100Grad0Opsz48 from '../components/EmergencyFill0Wght100Grad0Opsz48'
import IconEmergencyFill0Wght200Grad0Opsz48 from '../components/EmergencyFill0Wght200Grad0Opsz48'
import IconEmergencyFill0Wght300Grad0Opsz48 from '../components/EmergencyFill0Wght300Grad0Opsz48'
import IconEmergencyFill0Wght400Grad0Opsz48 from '../components/EmergencyFill0Wght400Grad0Opsz48'
import IconEmergencyFill0Wght500Grad0Opsz48 from '../components/EmergencyFill0Wght500Grad0Opsz48'
import IconEmergencyFill0Wght600Grad0Opsz48 from '../components/EmergencyFill0Wght600Grad0Opsz48'
import IconEmergencyFill0Wght700Grad0Opsz48 from '../components/EmergencyFill0Wght700Grad0Opsz48'
import IconEmergencyFill1Wght100Grad0Opsz48 from '../components/EmergencyFill1Wght100Grad0Opsz48'
import IconEmergencyFill1Wght200Grad0Opsz48 from '../components/EmergencyFill1Wght200Grad0Opsz48'
import IconEmergencyFill1Wght300Grad0Opsz48 from '../components/EmergencyFill1Wght300Grad0Opsz48'
import IconEmergencyFill1Wght400Grad0Opsz48 from '../components/EmergencyFill1Wght400Grad0Opsz48'
import IconEmergencyFill1Wght500Grad0Opsz48 from '../components/EmergencyFill1Wght500Grad0Opsz48'
import IconEmergencyFill1Wght600Grad0Opsz48 from '../components/EmergencyFill1Wght600Grad0Opsz48'
import IconEmergencyFill1Wght700Grad0Opsz48 from '../components/EmergencyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmergency = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmergencyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmergencyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmergencyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmergencyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmergencyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmergencyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmergencyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmergencyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmergencyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmergencyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmergencyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmergencyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmergencyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmergencyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
