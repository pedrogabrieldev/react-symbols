import IconArmingCountdownFill0Wght100Grad0Opsz48 from '../components/ArmingCountdownFill0Wght100Grad0Opsz48'
import IconArmingCountdownFill0Wght200Grad0Opsz48 from '../components/ArmingCountdownFill0Wght200Grad0Opsz48'
import IconArmingCountdownFill0Wght300Grad0Opsz48 from '../components/ArmingCountdownFill0Wght300Grad0Opsz48'
import IconArmingCountdownFill0Wght400Grad0Opsz48 from '../components/ArmingCountdownFill0Wght400Grad0Opsz48'
import IconArmingCountdownFill0Wght500Grad0Opsz48 from '../components/ArmingCountdownFill0Wght500Grad0Opsz48'
import IconArmingCountdownFill0Wght600Grad0Opsz48 from '../components/ArmingCountdownFill0Wght600Grad0Opsz48'
import IconArmingCountdownFill0Wght700Grad0Opsz48 from '../components/ArmingCountdownFill0Wght700Grad0Opsz48'
import IconArmingCountdownFill1Wght100Grad0Opsz48 from '../components/ArmingCountdownFill1Wght100Grad0Opsz48'
import IconArmingCountdownFill1Wght200Grad0Opsz48 from '../components/ArmingCountdownFill1Wght200Grad0Opsz48'
import IconArmingCountdownFill1Wght300Grad0Opsz48 from '../components/ArmingCountdownFill1Wght300Grad0Opsz48'
import IconArmingCountdownFill1Wght400Grad0Opsz48 from '../components/ArmingCountdownFill1Wght400Grad0Opsz48'
import IconArmingCountdownFill1Wght500Grad0Opsz48 from '../components/ArmingCountdownFill1Wght500Grad0Opsz48'
import IconArmingCountdownFill1Wght600Grad0Opsz48 from '../components/ArmingCountdownFill1Wght600Grad0Opsz48'
import IconArmingCountdownFill1Wght700Grad0Opsz48 from '../components/ArmingCountdownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArmingCountdown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArmingCountdownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArmingCountdownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArmingCountdownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArmingCountdownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArmingCountdownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArmingCountdownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArmingCountdownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArmingCountdownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArmingCountdownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArmingCountdownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArmingCountdownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArmingCountdownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArmingCountdownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArmingCountdownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
