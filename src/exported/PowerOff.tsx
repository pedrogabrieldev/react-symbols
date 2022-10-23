import IconPowerOffFill0Wght100Grad0Opsz48 from '../components/PowerOffFill0Wght100Grad0Opsz48'
import IconPowerOffFill0Wght200Grad0Opsz48 from '../components/PowerOffFill0Wght200Grad0Opsz48'
import IconPowerOffFill0Wght300Grad0Opsz48 from '../components/PowerOffFill0Wght300Grad0Opsz48'
import IconPowerOffFill0Wght400Grad0Opsz48 from '../components/PowerOffFill0Wght400Grad0Opsz48'
import IconPowerOffFill0Wght500Grad0Opsz48 from '../components/PowerOffFill0Wght500Grad0Opsz48'
import IconPowerOffFill0Wght600Grad0Opsz48 from '../components/PowerOffFill0Wght600Grad0Opsz48'
import IconPowerOffFill0Wght700Grad0Opsz48 from '../components/PowerOffFill0Wght700Grad0Opsz48'
import IconPowerOffFill1Wght100Grad0Opsz48 from '../components/PowerOffFill1Wght100Grad0Opsz48'
import IconPowerOffFill1Wght200Grad0Opsz48 from '../components/PowerOffFill1Wght200Grad0Opsz48'
import IconPowerOffFill1Wght300Grad0Opsz48 from '../components/PowerOffFill1Wght300Grad0Opsz48'
import IconPowerOffFill1Wght400Grad0Opsz48 from '../components/PowerOffFill1Wght400Grad0Opsz48'
import IconPowerOffFill1Wght500Grad0Opsz48 from '../components/PowerOffFill1Wght500Grad0Opsz48'
import IconPowerOffFill1Wght600Grad0Opsz48 from '../components/PowerOffFill1Wght600Grad0Opsz48'
import IconPowerOffFill1Wght700Grad0Opsz48 from '../components/PowerOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPowerOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPowerOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPowerOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPowerOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPowerOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPowerOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPowerOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPowerOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPowerOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPowerOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPowerOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPowerOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPowerOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPowerOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPowerOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
