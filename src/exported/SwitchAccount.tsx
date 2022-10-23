import IconSwitchAccountFill0Wght100Grad0Opsz48 from '../components/SwitchAccountFill0Wght100Grad0Opsz48'
import IconSwitchAccountFill0Wght200Grad0Opsz48 from '../components/SwitchAccountFill0Wght200Grad0Opsz48'
import IconSwitchAccountFill0Wght300Grad0Opsz48 from '../components/SwitchAccountFill0Wght300Grad0Opsz48'
import IconSwitchAccountFill0Wght400Grad0Opsz48 from '../components/SwitchAccountFill0Wght400Grad0Opsz48'
import IconSwitchAccountFill0Wght500Grad0Opsz48 from '../components/SwitchAccountFill0Wght500Grad0Opsz48'
import IconSwitchAccountFill0Wght600Grad0Opsz48 from '../components/SwitchAccountFill0Wght600Grad0Opsz48'
import IconSwitchAccountFill0Wght700Grad0Opsz48 from '../components/SwitchAccountFill0Wght700Grad0Opsz48'
import IconSwitchAccountFill1Wght100Grad0Opsz48 from '../components/SwitchAccountFill1Wght100Grad0Opsz48'
import IconSwitchAccountFill1Wght200Grad0Opsz48 from '../components/SwitchAccountFill1Wght200Grad0Opsz48'
import IconSwitchAccountFill1Wght300Grad0Opsz48 from '../components/SwitchAccountFill1Wght300Grad0Opsz48'
import IconSwitchAccountFill1Wght400Grad0Opsz48 from '../components/SwitchAccountFill1Wght400Grad0Opsz48'
import IconSwitchAccountFill1Wght500Grad0Opsz48 from '../components/SwitchAccountFill1Wght500Grad0Opsz48'
import IconSwitchAccountFill1Wght600Grad0Opsz48 from '../components/SwitchAccountFill1Wght600Grad0Opsz48'
import IconSwitchAccountFill1Wght700Grad0Opsz48 from '../components/SwitchAccountFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwitchAccount = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwitchAccountFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwitchAccountFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwitchAccountFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwitchAccountFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwitchAccountFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwitchAccountFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwitchAccountFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwitchAccountFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwitchAccountFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwitchAccountFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwitchAccountFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwitchAccountFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwitchAccountFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwitchAccountFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
