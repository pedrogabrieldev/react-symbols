import IconSwitchFill0Wght100Grad0Opsz48 from '../components/SwitchFill0Wght100Grad0Opsz48'
import IconSwitchFill0Wght200Grad0Opsz48 from '../components/SwitchFill0Wght200Grad0Opsz48'
import IconSwitchFill0Wght300Grad0Opsz48 from '../components/SwitchFill0Wght300Grad0Opsz48'
import IconSwitchFill0Wght400Grad0Opsz48 from '../components/SwitchFill0Wght400Grad0Opsz48'
import IconSwitchFill0Wght500Grad0Opsz48 from '../components/SwitchFill0Wght500Grad0Opsz48'
import IconSwitchFill0Wght600Grad0Opsz48 from '../components/SwitchFill0Wght600Grad0Opsz48'
import IconSwitchFill0Wght700Grad0Opsz48 from '../components/SwitchFill0Wght700Grad0Opsz48'
import IconSwitchFill1Wght100Grad0Opsz48 from '../components/SwitchFill1Wght100Grad0Opsz48'
import IconSwitchFill1Wght200Grad0Opsz48 from '../components/SwitchFill1Wght200Grad0Opsz48'
import IconSwitchFill1Wght300Grad0Opsz48 from '../components/SwitchFill1Wght300Grad0Opsz48'
import IconSwitchFill1Wght400Grad0Opsz48 from '../components/SwitchFill1Wght400Grad0Opsz48'
import IconSwitchFill1Wght500Grad0Opsz48 from '../components/SwitchFill1Wght500Grad0Opsz48'
import IconSwitchFill1Wght600Grad0Opsz48 from '../components/SwitchFill1Wght600Grad0Opsz48'
import IconSwitchFill1Wght700Grad0Opsz48 from '../components/SwitchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwitch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwitchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwitchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwitchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwitchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwitchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwitchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwitchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwitchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwitchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwitchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwitchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwitchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwitchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwitchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
