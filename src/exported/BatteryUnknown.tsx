import IconBatteryUnknownFill0Wght100Grad0Opsz48 from '../components/BatteryUnknownFill0Wght100Grad0Opsz48'
import IconBatteryUnknownFill0Wght200Grad0Opsz48 from '../components/BatteryUnknownFill0Wght200Grad0Opsz48'
import IconBatteryUnknownFill0Wght300Grad0Opsz48 from '../components/BatteryUnknownFill0Wght300Grad0Opsz48'
import IconBatteryUnknownFill0Wght400Grad0Opsz48 from '../components/BatteryUnknownFill0Wght400Grad0Opsz48'
import IconBatteryUnknownFill0Wght500Grad0Opsz48 from '../components/BatteryUnknownFill0Wght500Grad0Opsz48'
import IconBatteryUnknownFill0Wght600Grad0Opsz48 from '../components/BatteryUnknownFill0Wght600Grad0Opsz48'
import IconBatteryUnknownFill0Wght700Grad0Opsz48 from '../components/BatteryUnknownFill0Wght700Grad0Opsz48'
import IconBatteryUnknownFill1Wght100Grad0Opsz48 from '../components/BatteryUnknownFill1Wght100Grad0Opsz48'
import IconBatteryUnknownFill1Wght200Grad0Opsz48 from '../components/BatteryUnknownFill1Wght200Grad0Opsz48'
import IconBatteryUnknownFill1Wght300Grad0Opsz48 from '../components/BatteryUnknownFill1Wght300Grad0Opsz48'
import IconBatteryUnknownFill1Wght400Grad0Opsz48 from '../components/BatteryUnknownFill1Wght400Grad0Opsz48'
import IconBatteryUnknownFill1Wght500Grad0Opsz48 from '../components/BatteryUnknownFill1Wght500Grad0Opsz48'
import IconBatteryUnknownFill1Wght600Grad0Opsz48 from '../components/BatteryUnknownFill1Wght600Grad0Opsz48'
import IconBatteryUnknownFill1Wght700Grad0Opsz48 from '../components/BatteryUnknownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryUnknown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryUnknownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryUnknownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryUnknownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryUnknownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryUnknownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryUnknownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryUnknownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryUnknownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryUnknownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryUnknownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryUnknownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryUnknownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryUnknownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryUnknownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
