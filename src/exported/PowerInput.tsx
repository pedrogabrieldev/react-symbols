import IconPowerInputFill0Wght100Grad0Opsz48 from '../components/PowerInputFill0Wght100Grad0Opsz48'
import IconPowerInputFill0Wght200Grad0Opsz48 from '../components/PowerInputFill0Wght200Grad0Opsz48'
import IconPowerInputFill0Wght300Grad0Opsz48 from '../components/PowerInputFill0Wght300Grad0Opsz48'
import IconPowerInputFill0Wght400Grad0Opsz48 from '../components/PowerInputFill0Wght400Grad0Opsz48'
import IconPowerInputFill0Wght500Grad0Opsz48 from '../components/PowerInputFill0Wght500Grad0Opsz48'
import IconPowerInputFill0Wght600Grad0Opsz48 from '../components/PowerInputFill0Wght600Grad0Opsz48'
import IconPowerInputFill0Wght700Grad0Opsz48 from '../components/PowerInputFill0Wght700Grad0Opsz48'
import IconPowerInputFill1Wght100Grad0Opsz48 from '../components/PowerInputFill1Wght100Grad0Opsz48'
import IconPowerInputFill1Wght200Grad0Opsz48 from '../components/PowerInputFill1Wght200Grad0Opsz48'
import IconPowerInputFill1Wght300Grad0Opsz48 from '../components/PowerInputFill1Wght300Grad0Opsz48'
import IconPowerInputFill1Wght400Grad0Opsz48 from '../components/PowerInputFill1Wght400Grad0Opsz48'
import IconPowerInputFill1Wght500Grad0Opsz48 from '../components/PowerInputFill1Wght500Grad0Opsz48'
import IconPowerInputFill1Wght600Grad0Opsz48 from '../components/PowerInputFill1Wght600Grad0Opsz48'
import IconPowerInputFill1Wght700Grad0Opsz48 from '../components/PowerInputFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPowerInput = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPowerInputFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPowerInputFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPowerInputFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPowerInputFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPowerInputFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPowerInputFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPowerInputFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPowerInputFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPowerInputFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPowerInputFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPowerInputFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPowerInputFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPowerInputFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPowerInputFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
