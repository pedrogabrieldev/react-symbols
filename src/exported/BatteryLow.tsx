import IconBatteryLowFill0Wght100Grad0Opsz48 from '../components/BatteryLowFill0Wght100Grad0Opsz48'
import IconBatteryLowFill0Wght200Grad0Opsz48 from '../components/BatteryLowFill0Wght200Grad0Opsz48'
import IconBatteryLowFill0Wght300Grad0Opsz48 from '../components/BatteryLowFill0Wght300Grad0Opsz48'
import IconBatteryLowFill0Wght400Grad0Opsz48 from '../components/BatteryLowFill0Wght400Grad0Opsz48'
import IconBatteryLowFill0Wght500Grad0Opsz48 from '../components/BatteryLowFill0Wght500Grad0Opsz48'
import IconBatteryLowFill0Wght600Grad0Opsz48 from '../components/BatteryLowFill0Wght600Grad0Opsz48'
import IconBatteryLowFill0Wght700Grad0Opsz48 from '../components/BatteryLowFill0Wght700Grad0Opsz48'
import IconBatteryLowFill1Wght100Grad0Opsz48 from '../components/BatteryLowFill1Wght100Grad0Opsz48'
import IconBatteryLowFill1Wght200Grad0Opsz48 from '../components/BatteryLowFill1Wght200Grad0Opsz48'
import IconBatteryLowFill1Wght300Grad0Opsz48 from '../components/BatteryLowFill1Wght300Grad0Opsz48'
import IconBatteryLowFill1Wght400Grad0Opsz48 from '../components/BatteryLowFill1Wght400Grad0Opsz48'
import IconBatteryLowFill1Wght500Grad0Opsz48 from '../components/BatteryLowFill1Wght500Grad0Opsz48'
import IconBatteryLowFill1Wght600Grad0Opsz48 from '../components/BatteryLowFill1Wght600Grad0Opsz48'
import IconBatteryLowFill1Wght700Grad0Opsz48 from '../components/BatteryLowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryLow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryLowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryLowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryLowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryLowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryLowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryLowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryLowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryLowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryLowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryLowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryLowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryLowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryLowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryLowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
