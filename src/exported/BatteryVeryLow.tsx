import IconBatteryVeryLowFill0Wght100Grad0Opsz48 from '../components/BatteryVeryLowFill0Wght100Grad0Opsz48'
import IconBatteryVeryLowFill0Wght200Grad0Opsz48 from '../components/BatteryVeryLowFill0Wght200Grad0Opsz48'
import IconBatteryVeryLowFill0Wght300Grad0Opsz48 from '../components/BatteryVeryLowFill0Wght300Grad0Opsz48'
import IconBatteryVeryLowFill0Wght400Grad0Opsz48 from '../components/BatteryVeryLowFill0Wght400Grad0Opsz48'
import IconBatteryVeryLowFill0Wght500Grad0Opsz48 from '../components/BatteryVeryLowFill0Wght500Grad0Opsz48'
import IconBatteryVeryLowFill0Wght600Grad0Opsz48 from '../components/BatteryVeryLowFill0Wght600Grad0Opsz48'
import IconBatteryVeryLowFill0Wght700Grad0Opsz48 from '../components/BatteryVeryLowFill0Wght700Grad0Opsz48'
import IconBatteryVeryLowFill1Wght100Grad0Opsz48 from '../components/BatteryVeryLowFill1Wght100Grad0Opsz48'
import IconBatteryVeryLowFill1Wght200Grad0Opsz48 from '../components/BatteryVeryLowFill1Wght200Grad0Opsz48'
import IconBatteryVeryLowFill1Wght300Grad0Opsz48 from '../components/BatteryVeryLowFill1Wght300Grad0Opsz48'
import IconBatteryVeryLowFill1Wght400Grad0Opsz48 from '../components/BatteryVeryLowFill1Wght400Grad0Opsz48'
import IconBatteryVeryLowFill1Wght500Grad0Opsz48 from '../components/BatteryVeryLowFill1Wght500Grad0Opsz48'
import IconBatteryVeryLowFill1Wght600Grad0Opsz48 from '../components/BatteryVeryLowFill1Wght600Grad0Opsz48'
import IconBatteryVeryLowFill1Wght700Grad0Opsz48 from '../components/BatteryVeryLowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryVeryLow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryVeryLowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryVeryLowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryVeryLowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryVeryLowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryVeryLowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryVeryLowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryVeryLowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryVeryLowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryVeryLowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryVeryLowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryVeryLowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryVeryLowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryVeryLowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryVeryLowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
