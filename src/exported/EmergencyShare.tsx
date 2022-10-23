import IconEmergencyShareFill0Wght100Grad0Opsz48 from '../components/EmergencyShareFill0Wght100Grad0Opsz48'
import IconEmergencyShareFill0Wght200Grad0Opsz48 from '../components/EmergencyShareFill0Wght200Grad0Opsz48'
import IconEmergencyShareFill0Wght300Grad0Opsz48 from '../components/EmergencyShareFill0Wght300Grad0Opsz48'
import IconEmergencyShareFill0Wght400Grad0Opsz48 from '../components/EmergencyShareFill0Wght400Grad0Opsz48'
import IconEmergencyShareFill0Wght500Grad0Opsz48 from '../components/EmergencyShareFill0Wght500Grad0Opsz48'
import IconEmergencyShareFill0Wght600Grad0Opsz48 from '../components/EmergencyShareFill0Wght600Grad0Opsz48'
import IconEmergencyShareFill0Wght700Grad0Opsz48 from '../components/EmergencyShareFill0Wght700Grad0Opsz48'
import IconEmergencyShareFill1Wght100Grad0Opsz48 from '../components/EmergencyShareFill1Wght100Grad0Opsz48'
import IconEmergencyShareFill1Wght200Grad0Opsz48 from '../components/EmergencyShareFill1Wght200Grad0Opsz48'
import IconEmergencyShareFill1Wght300Grad0Opsz48 from '../components/EmergencyShareFill1Wght300Grad0Opsz48'
import IconEmergencyShareFill1Wght400Grad0Opsz48 from '../components/EmergencyShareFill1Wght400Grad0Opsz48'
import IconEmergencyShareFill1Wght500Grad0Opsz48 from '../components/EmergencyShareFill1Wght500Grad0Opsz48'
import IconEmergencyShareFill1Wght600Grad0Opsz48 from '../components/EmergencyShareFill1Wght600Grad0Opsz48'
import IconEmergencyShareFill1Wght700Grad0Opsz48 from '../components/EmergencyShareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmergencyShare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmergencyShareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmergencyShareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmergencyShareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmergencyShareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmergencyShareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmergencyShareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmergencyShareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmergencyShareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmergencyShareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmergencyShareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmergencyShareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmergencyShareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmergencyShareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmergencyShareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
