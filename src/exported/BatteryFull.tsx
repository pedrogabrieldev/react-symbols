import IconBatteryFullFill0Wght100Grad0Opsz48 from '../components/BatteryFullFill0Wght100Grad0Opsz48'
import IconBatteryFullFill0Wght200Grad0Opsz48 from '../components/BatteryFullFill0Wght200Grad0Opsz48'
import IconBatteryFullFill0Wght300Grad0Opsz48 from '../components/BatteryFullFill0Wght300Grad0Opsz48'
import IconBatteryFullFill0Wght400Grad0Opsz48 from '../components/BatteryFullFill0Wght400Grad0Opsz48'
import IconBatteryFullFill0Wght500Grad0Opsz48 from '../components/BatteryFullFill0Wght500Grad0Opsz48'
import IconBatteryFullFill0Wght600Grad0Opsz48 from '../components/BatteryFullFill0Wght600Grad0Opsz48'
import IconBatteryFullFill0Wght700Grad0Opsz48 from '../components/BatteryFullFill0Wght700Grad0Opsz48'
import IconBatteryFullFill1Wght100Grad0Opsz48 from '../components/BatteryFullFill1Wght100Grad0Opsz48'
import IconBatteryFullFill1Wght200Grad0Opsz48 from '../components/BatteryFullFill1Wght200Grad0Opsz48'
import IconBatteryFullFill1Wght300Grad0Opsz48 from '../components/BatteryFullFill1Wght300Grad0Opsz48'
import IconBatteryFullFill1Wght400Grad0Opsz48 from '../components/BatteryFullFill1Wght400Grad0Opsz48'
import IconBatteryFullFill1Wght500Grad0Opsz48 from '../components/BatteryFullFill1Wght500Grad0Opsz48'
import IconBatteryFullFill1Wght600Grad0Opsz48 from '../components/BatteryFullFill1Wght600Grad0Opsz48'
import IconBatteryFullFill1Wght700Grad0Opsz48 from '../components/BatteryFullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryFull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryFullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryFullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryFullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryFullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryFullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryFullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryFullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryFullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryFullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryFullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryFullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryFullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryFullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryFullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
