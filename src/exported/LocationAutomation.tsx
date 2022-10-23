import IconLocationAutomationFill0Wght100Grad0Opsz48 from '../components/LocationAutomationFill0Wght100Grad0Opsz48'
import IconLocationAutomationFill0Wght200Grad0Opsz48 from '../components/LocationAutomationFill0Wght200Grad0Opsz48'
import IconLocationAutomationFill0Wght300Grad0Opsz48 from '../components/LocationAutomationFill0Wght300Grad0Opsz48'
import IconLocationAutomationFill0Wght400Grad0Opsz48 from '../components/LocationAutomationFill0Wght400Grad0Opsz48'
import IconLocationAutomationFill0Wght500Grad0Opsz48 from '../components/LocationAutomationFill0Wght500Grad0Opsz48'
import IconLocationAutomationFill0Wght600Grad0Opsz48 from '../components/LocationAutomationFill0Wght600Grad0Opsz48'
import IconLocationAutomationFill0Wght700Grad0Opsz48 from '../components/LocationAutomationFill0Wght700Grad0Opsz48'
import IconLocationAutomationFill1Wght100Grad0Opsz48 from '../components/LocationAutomationFill1Wght100Grad0Opsz48'
import IconLocationAutomationFill1Wght200Grad0Opsz48 from '../components/LocationAutomationFill1Wght200Grad0Opsz48'
import IconLocationAutomationFill1Wght300Grad0Opsz48 from '../components/LocationAutomationFill1Wght300Grad0Opsz48'
import IconLocationAutomationFill1Wght400Grad0Opsz48 from '../components/LocationAutomationFill1Wght400Grad0Opsz48'
import IconLocationAutomationFill1Wght500Grad0Opsz48 from '../components/LocationAutomationFill1Wght500Grad0Opsz48'
import IconLocationAutomationFill1Wght600Grad0Opsz48 from '../components/LocationAutomationFill1Wght600Grad0Opsz48'
import IconLocationAutomationFill1Wght700Grad0Opsz48 from '../components/LocationAutomationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationAutomation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationAutomationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationAutomationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationAutomationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationAutomationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationAutomationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationAutomationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationAutomationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationAutomationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationAutomationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationAutomationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationAutomationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationAutomationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationAutomationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationAutomationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
