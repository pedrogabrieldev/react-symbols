import IconContactEmergencyFill0Wght100Grad0Opsz48 from '../components/ContactEmergencyFill0Wght100Grad0Opsz48'
import IconContactEmergencyFill0Wght200Grad0Opsz48 from '../components/ContactEmergencyFill0Wght200Grad0Opsz48'
import IconContactEmergencyFill0Wght300Grad0Opsz48 from '../components/ContactEmergencyFill0Wght300Grad0Opsz48'
import IconContactEmergencyFill0Wght400Grad0Opsz48 from '../components/ContactEmergencyFill0Wght400Grad0Opsz48'
import IconContactEmergencyFill0Wght500Grad0Opsz48 from '../components/ContactEmergencyFill0Wght500Grad0Opsz48'
import IconContactEmergencyFill0Wght600Grad0Opsz48 from '../components/ContactEmergencyFill0Wght600Grad0Opsz48'
import IconContactEmergencyFill0Wght700Grad0Opsz48 from '../components/ContactEmergencyFill0Wght700Grad0Opsz48'
import IconContactEmergencyFill1Wght100Grad0Opsz48 from '../components/ContactEmergencyFill1Wght100Grad0Opsz48'
import IconContactEmergencyFill1Wght200Grad0Opsz48 from '../components/ContactEmergencyFill1Wght200Grad0Opsz48'
import IconContactEmergencyFill1Wght300Grad0Opsz48 from '../components/ContactEmergencyFill1Wght300Grad0Opsz48'
import IconContactEmergencyFill1Wght400Grad0Opsz48 from '../components/ContactEmergencyFill1Wght400Grad0Opsz48'
import IconContactEmergencyFill1Wght500Grad0Opsz48 from '../components/ContactEmergencyFill1Wght500Grad0Opsz48'
import IconContactEmergencyFill1Wght600Grad0Opsz48 from '../components/ContactEmergencyFill1Wght600Grad0Opsz48'
import IconContactEmergencyFill1Wght700Grad0Opsz48 from '../components/ContactEmergencyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContactEmergency = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContactEmergencyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContactEmergencyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContactEmergencyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContactEmergencyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContactEmergencyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContactEmergencyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContactEmergencyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContactEmergencyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContactEmergencyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContactEmergencyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContactEmergencyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContactEmergencyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContactEmergencyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContactEmergencyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
