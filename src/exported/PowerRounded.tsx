import IconPowerRoundedFill0Wght100Grad0Opsz48 from '../components/PowerRoundedFill0Wght100Grad0Opsz48'
import IconPowerRoundedFill0Wght200Grad0Opsz48 from '../components/PowerRoundedFill0Wght200Grad0Opsz48'
import IconPowerRoundedFill0Wght300Grad0Opsz48 from '../components/PowerRoundedFill0Wght300Grad0Opsz48'
import IconPowerRoundedFill0Wght400Grad0Opsz48 from '../components/PowerRoundedFill0Wght400Grad0Opsz48'
import IconPowerRoundedFill0Wght500Grad0Opsz48 from '../components/PowerRoundedFill0Wght500Grad0Opsz48'
import IconPowerRoundedFill0Wght600Grad0Opsz48 from '../components/PowerRoundedFill0Wght600Grad0Opsz48'
import IconPowerRoundedFill0Wght700Grad0Opsz48 from '../components/PowerRoundedFill0Wght700Grad0Opsz48'
import IconPowerRoundedFill1Wght100Grad0Opsz48 from '../components/PowerRoundedFill1Wght100Grad0Opsz48'
import IconPowerRoundedFill1Wght200Grad0Opsz48 from '../components/PowerRoundedFill1Wght200Grad0Opsz48'
import IconPowerRoundedFill1Wght300Grad0Opsz48 from '../components/PowerRoundedFill1Wght300Grad0Opsz48'
import IconPowerRoundedFill1Wght400Grad0Opsz48 from '../components/PowerRoundedFill1Wght400Grad0Opsz48'
import IconPowerRoundedFill1Wght500Grad0Opsz48 from '../components/PowerRoundedFill1Wght500Grad0Opsz48'
import IconPowerRoundedFill1Wght600Grad0Opsz48 from '../components/PowerRoundedFill1Wght600Grad0Opsz48'
import IconPowerRoundedFill1Wght700Grad0Opsz48 from '../components/PowerRoundedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPowerRounded = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPowerRoundedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPowerRoundedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPowerRoundedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPowerRoundedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPowerRoundedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPowerRoundedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPowerRoundedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPowerRoundedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPowerRoundedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPowerRoundedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPowerRoundedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPowerRoundedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPowerRoundedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPowerRoundedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
