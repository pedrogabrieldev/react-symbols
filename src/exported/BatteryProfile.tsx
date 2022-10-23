import IconBatteryProfileFill0Wght100Grad0Opsz48 from '../components/BatteryProfileFill0Wght100Grad0Opsz48'
import IconBatteryProfileFill0Wght200Grad0Opsz48 from '../components/BatteryProfileFill0Wght200Grad0Opsz48'
import IconBatteryProfileFill0Wght300Grad0Opsz48 from '../components/BatteryProfileFill0Wght300Grad0Opsz48'
import IconBatteryProfileFill0Wght400Grad0Opsz48 from '../components/BatteryProfileFill0Wght400Grad0Opsz48'
import IconBatteryProfileFill0Wght500Grad0Opsz48 from '../components/BatteryProfileFill0Wght500Grad0Opsz48'
import IconBatteryProfileFill0Wght600Grad0Opsz48 from '../components/BatteryProfileFill0Wght600Grad0Opsz48'
import IconBatteryProfileFill0Wght700Grad0Opsz48 from '../components/BatteryProfileFill0Wght700Grad0Opsz48'
import IconBatteryProfileFill1Wght100Grad0Opsz48 from '../components/BatteryProfileFill1Wght100Grad0Opsz48'
import IconBatteryProfileFill1Wght200Grad0Opsz48 from '../components/BatteryProfileFill1Wght200Grad0Opsz48'
import IconBatteryProfileFill1Wght300Grad0Opsz48 from '../components/BatteryProfileFill1Wght300Grad0Opsz48'
import IconBatteryProfileFill1Wght400Grad0Opsz48 from '../components/BatteryProfileFill1Wght400Grad0Opsz48'
import IconBatteryProfileFill1Wght500Grad0Opsz48 from '../components/BatteryProfileFill1Wght500Grad0Opsz48'
import IconBatteryProfileFill1Wght600Grad0Opsz48 from '../components/BatteryProfileFill1Wght600Grad0Opsz48'
import IconBatteryProfileFill1Wght700Grad0Opsz48 from '../components/BatteryProfileFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryProfile = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryProfileFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryProfileFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryProfileFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryProfileFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryProfileFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryProfileFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryProfileFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryProfileFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryProfileFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryProfileFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryProfileFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryProfileFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryProfileFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryProfileFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
