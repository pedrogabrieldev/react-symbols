import IconBadgeCriticalBatteryFill0Wght100Grad0Opsz48 from '../components/BadgeCriticalBatteryFill0Wght100Grad0Opsz48'
import IconBadgeCriticalBatteryFill0Wght200Grad0Opsz48 from '../components/BadgeCriticalBatteryFill0Wght200Grad0Opsz48'
import IconBadgeCriticalBatteryFill0Wght300Grad0Opsz48 from '../components/BadgeCriticalBatteryFill0Wght300Grad0Opsz48'
import IconBadgeCriticalBatteryFill0Wght400Grad0Opsz48 from '../components/BadgeCriticalBatteryFill0Wght400Grad0Opsz48'
import IconBadgeCriticalBatteryFill0Wght500Grad0Opsz48 from '../components/BadgeCriticalBatteryFill0Wght500Grad0Opsz48'
import IconBadgeCriticalBatteryFill0Wght600Grad0Opsz48 from '../components/BadgeCriticalBatteryFill0Wght600Grad0Opsz48'
import IconBadgeCriticalBatteryFill0Wght700Grad0Opsz48 from '../components/BadgeCriticalBatteryFill0Wght700Grad0Opsz48'
import IconBadgeCriticalBatteryFill1Wght100Grad0Opsz48 from '../components/BadgeCriticalBatteryFill1Wght100Grad0Opsz48'
import IconBadgeCriticalBatteryFill1Wght200Grad0Opsz48 from '../components/BadgeCriticalBatteryFill1Wght200Grad0Opsz48'
import IconBadgeCriticalBatteryFill1Wght300Grad0Opsz48 from '../components/BadgeCriticalBatteryFill1Wght300Grad0Opsz48'
import IconBadgeCriticalBatteryFill1Wght400Grad0Opsz48 from '../components/BadgeCriticalBatteryFill1Wght400Grad0Opsz48'
import IconBadgeCriticalBatteryFill1Wght500Grad0Opsz48 from '../components/BadgeCriticalBatteryFill1Wght500Grad0Opsz48'
import IconBadgeCriticalBatteryFill1Wght600Grad0Opsz48 from '../components/BadgeCriticalBatteryFill1Wght600Grad0Opsz48'
import IconBadgeCriticalBatteryFill1Wght700Grad0Opsz48 from '../components/BadgeCriticalBatteryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBadgeCriticalBattery = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBadgeCriticalBatteryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBadgeCriticalBatteryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBadgeCriticalBatteryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBadgeCriticalBatteryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBadgeCriticalBatteryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBadgeCriticalBatteryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBadgeCriticalBatteryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBadgeCriticalBatteryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBadgeCriticalBatteryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBadgeCriticalBatteryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBadgeCriticalBatteryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBadgeCriticalBatteryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBadgeCriticalBatteryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBadgeCriticalBatteryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
