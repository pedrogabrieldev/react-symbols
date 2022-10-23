import IconBatteryChargingFullFill0Wght100Grad0Opsz48 from '../components/BatteryChargingFullFill0Wght100Grad0Opsz48'
import IconBatteryChargingFullFill0Wght200Grad0Opsz48 from '../components/BatteryChargingFullFill0Wght200Grad0Opsz48'
import IconBatteryChargingFullFill0Wght300Grad0Opsz48 from '../components/BatteryChargingFullFill0Wght300Grad0Opsz48'
import IconBatteryChargingFullFill0Wght400Grad0Opsz48 from '../components/BatteryChargingFullFill0Wght400Grad0Opsz48'
import IconBatteryChargingFullFill0Wght500Grad0Opsz48 from '../components/BatteryChargingFullFill0Wght500Grad0Opsz48'
import IconBatteryChargingFullFill0Wght600Grad0Opsz48 from '../components/BatteryChargingFullFill0Wght600Grad0Opsz48'
import IconBatteryChargingFullFill0Wght700Grad0Opsz48 from '../components/BatteryChargingFullFill0Wght700Grad0Opsz48'
import IconBatteryChargingFullFill1Wght100Grad0Opsz48 from '../components/BatteryChargingFullFill1Wght100Grad0Opsz48'
import IconBatteryChargingFullFill1Wght200Grad0Opsz48 from '../components/BatteryChargingFullFill1Wght200Grad0Opsz48'
import IconBatteryChargingFullFill1Wght300Grad0Opsz48 from '../components/BatteryChargingFullFill1Wght300Grad0Opsz48'
import IconBatteryChargingFullFill1Wght400Grad0Opsz48 from '../components/BatteryChargingFullFill1Wght400Grad0Opsz48'
import IconBatteryChargingFullFill1Wght500Grad0Opsz48 from '../components/BatteryChargingFullFill1Wght500Grad0Opsz48'
import IconBatteryChargingFullFill1Wght600Grad0Opsz48 from '../components/BatteryChargingFullFill1Wght600Grad0Opsz48'
import IconBatteryChargingFullFill1Wght700Grad0Opsz48 from '../components/BatteryChargingFullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryChargingFull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryChargingFullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryChargingFullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryChargingFullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryChargingFullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryChargingFullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryChargingFullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryChargingFullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryChargingFullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryChargingFullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryChargingFullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryChargingFullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryChargingFullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryChargingFullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryChargingFullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
