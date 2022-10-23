import IconBatteryAlertFill0Wght100Grad0Opsz48 from '../components/BatteryAlertFill0Wght100Grad0Opsz48'
import IconBatteryAlertFill0Wght200Grad0Opsz48 from '../components/BatteryAlertFill0Wght200Grad0Opsz48'
import IconBatteryAlertFill0Wght300Grad0Opsz48 from '../components/BatteryAlertFill0Wght300Grad0Opsz48'
import IconBatteryAlertFill0Wght400Grad0Opsz48 from '../components/BatteryAlertFill0Wght400Grad0Opsz48'
import IconBatteryAlertFill0Wght500Grad0Opsz48 from '../components/BatteryAlertFill0Wght500Grad0Opsz48'
import IconBatteryAlertFill0Wght600Grad0Opsz48 from '../components/BatteryAlertFill0Wght600Grad0Opsz48'
import IconBatteryAlertFill0Wght700Grad0Opsz48 from '../components/BatteryAlertFill0Wght700Grad0Opsz48'
import IconBatteryAlertFill1Wght100Grad0Opsz48 from '../components/BatteryAlertFill1Wght100Grad0Opsz48'
import IconBatteryAlertFill1Wght200Grad0Opsz48 from '../components/BatteryAlertFill1Wght200Grad0Opsz48'
import IconBatteryAlertFill1Wght300Grad0Opsz48 from '../components/BatteryAlertFill1Wght300Grad0Opsz48'
import IconBatteryAlertFill1Wght400Grad0Opsz48 from '../components/BatteryAlertFill1Wght400Grad0Opsz48'
import IconBatteryAlertFill1Wght500Grad0Opsz48 from '../components/BatteryAlertFill1Wght500Grad0Opsz48'
import IconBatteryAlertFill1Wght600Grad0Opsz48 from '../components/BatteryAlertFill1Wght600Grad0Opsz48'
import IconBatteryAlertFill1Wght700Grad0Opsz48 from '../components/BatteryAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
