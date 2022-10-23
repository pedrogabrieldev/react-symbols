import IconSwitchAccessShortcutAddFill0Wght100Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill0Wght100Grad0Opsz48'
import IconSwitchAccessShortcutAddFill0Wght200Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill0Wght200Grad0Opsz48'
import IconSwitchAccessShortcutAddFill0Wght300Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill0Wght300Grad0Opsz48'
import IconSwitchAccessShortcutAddFill0Wght400Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill0Wght400Grad0Opsz48'
import IconSwitchAccessShortcutAddFill0Wght500Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill0Wght500Grad0Opsz48'
import IconSwitchAccessShortcutAddFill0Wght600Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill0Wght600Grad0Opsz48'
import IconSwitchAccessShortcutAddFill0Wght700Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill0Wght700Grad0Opsz48'
import IconSwitchAccessShortcutAddFill1Wght100Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill1Wght100Grad0Opsz48'
import IconSwitchAccessShortcutAddFill1Wght200Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill1Wght200Grad0Opsz48'
import IconSwitchAccessShortcutAddFill1Wght300Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill1Wght300Grad0Opsz48'
import IconSwitchAccessShortcutAddFill1Wght400Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill1Wght400Grad0Opsz48'
import IconSwitchAccessShortcutAddFill1Wght500Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill1Wght500Grad0Opsz48'
import IconSwitchAccessShortcutAddFill1Wght600Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill1Wght600Grad0Opsz48'
import IconSwitchAccessShortcutAddFill1Wght700Grad0Opsz48 from '../components/SwitchAccessShortcutAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwitchAccessShortcutAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwitchAccessShortcutAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwitchAccessShortcutAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwitchAccessShortcutAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwitchAccessShortcutAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwitchAccessShortcutAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwitchAccessShortcutAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwitchAccessShortcutAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwitchAccessShortcutAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwitchAccessShortcutAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwitchAccessShortcutAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwitchAccessShortcutAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwitchAccessShortcutAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwitchAccessShortcutAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwitchAccessShortcutAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
