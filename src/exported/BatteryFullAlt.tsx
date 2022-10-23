import IconBatteryFullAltFill0Wght100Grad0Opsz48 from '../components/BatteryFullAltFill0Wght100Grad0Opsz48'
import IconBatteryFullAltFill0Wght200Grad0Opsz48 from '../components/BatteryFullAltFill0Wght200Grad0Opsz48'
import IconBatteryFullAltFill0Wght300Grad0Opsz48 from '../components/BatteryFullAltFill0Wght300Grad0Opsz48'
import IconBatteryFullAltFill0Wght400Grad0Opsz48 from '../components/BatteryFullAltFill0Wght400Grad0Opsz48'
import IconBatteryFullAltFill0Wght500Grad0Opsz48 from '../components/BatteryFullAltFill0Wght500Grad0Opsz48'
import IconBatteryFullAltFill0Wght600Grad0Opsz48 from '../components/BatteryFullAltFill0Wght600Grad0Opsz48'
import IconBatteryFullAltFill0Wght700Grad0Opsz48 from '../components/BatteryFullAltFill0Wght700Grad0Opsz48'
import IconBatteryFullAltFill1Wght100Grad0Opsz48 from '../components/BatteryFullAltFill1Wght100Grad0Opsz48'
import IconBatteryFullAltFill1Wght200Grad0Opsz48 from '../components/BatteryFullAltFill1Wght200Grad0Opsz48'
import IconBatteryFullAltFill1Wght300Grad0Opsz48 from '../components/BatteryFullAltFill1Wght300Grad0Opsz48'
import IconBatteryFullAltFill1Wght400Grad0Opsz48 from '../components/BatteryFullAltFill1Wght400Grad0Opsz48'
import IconBatteryFullAltFill1Wght500Grad0Opsz48 from '../components/BatteryFullAltFill1Wght500Grad0Opsz48'
import IconBatteryFullAltFill1Wght600Grad0Opsz48 from '../components/BatteryFullAltFill1Wght600Grad0Opsz48'
import IconBatteryFullAltFill1Wght700Grad0Opsz48 from '../components/BatteryFullAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryFullAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryFullAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryFullAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryFullAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryFullAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryFullAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryFullAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryFullAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryFullAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryFullAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryFullAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryFullAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryFullAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryFullAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryFullAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
