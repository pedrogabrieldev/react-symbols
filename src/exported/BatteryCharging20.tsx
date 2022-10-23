import IconBatteryCharging20Fill0Wght100Grad0Opsz48 from '../components/BatteryCharging20Fill0Wght100Grad0Opsz48'
import IconBatteryCharging20Fill0Wght200Grad0Opsz48 from '../components/BatteryCharging20Fill0Wght200Grad0Opsz48'
import IconBatteryCharging20Fill0Wght300Grad0Opsz48 from '../components/BatteryCharging20Fill0Wght300Grad0Opsz48'
import IconBatteryCharging20Fill0Wght400Grad0Opsz48 from '../components/BatteryCharging20Fill0Wght400Grad0Opsz48'
import IconBatteryCharging20Fill0Wght500Grad0Opsz48 from '../components/BatteryCharging20Fill0Wght500Grad0Opsz48'
import IconBatteryCharging20Fill0Wght600Grad0Opsz48 from '../components/BatteryCharging20Fill0Wght600Grad0Opsz48'
import IconBatteryCharging20Fill0Wght700Grad0Opsz48 from '../components/BatteryCharging20Fill0Wght700Grad0Opsz48'
import IconBatteryCharging20Fill1Wght100Grad0Opsz48 from '../components/BatteryCharging20Fill1Wght100Grad0Opsz48'
import IconBatteryCharging20Fill1Wght200Grad0Opsz48 from '../components/BatteryCharging20Fill1Wght200Grad0Opsz48'
import IconBatteryCharging20Fill1Wght300Grad0Opsz48 from '../components/BatteryCharging20Fill1Wght300Grad0Opsz48'
import IconBatteryCharging20Fill1Wght400Grad0Opsz48 from '../components/BatteryCharging20Fill1Wght400Grad0Opsz48'
import IconBatteryCharging20Fill1Wght500Grad0Opsz48 from '../components/BatteryCharging20Fill1Wght500Grad0Opsz48'
import IconBatteryCharging20Fill1Wght600Grad0Opsz48 from '../components/BatteryCharging20Fill1Wght600Grad0Opsz48'
import IconBatteryCharging20Fill1Wght700Grad0Opsz48 from '../components/BatteryCharging20Fill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryCharging20 = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryCharging20Fill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryCharging20Fill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryCharging20Fill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryCharging20Fill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryCharging20Fill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryCharging20Fill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryCharging20Fill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryCharging20Fill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryCharging20Fill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryCharging20Fill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryCharging20Fill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryCharging20Fill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryCharging20Fill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryCharging20Fill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
