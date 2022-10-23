import IconSwitchAccessShortcutFill0Wght100Grad0Opsz48 from '../components/SwitchAccessShortcutFill0Wght100Grad0Opsz48'
import IconSwitchAccessShortcutFill0Wght200Grad0Opsz48 from '../components/SwitchAccessShortcutFill0Wght200Grad0Opsz48'
import IconSwitchAccessShortcutFill0Wght300Grad0Opsz48 from '../components/SwitchAccessShortcutFill0Wght300Grad0Opsz48'
import IconSwitchAccessShortcutFill0Wght400Grad0Opsz48 from '../components/SwitchAccessShortcutFill0Wght400Grad0Opsz48'
import IconSwitchAccessShortcutFill0Wght500Grad0Opsz48 from '../components/SwitchAccessShortcutFill0Wght500Grad0Opsz48'
import IconSwitchAccessShortcutFill0Wght600Grad0Opsz48 from '../components/SwitchAccessShortcutFill0Wght600Grad0Opsz48'
import IconSwitchAccessShortcutFill0Wght700Grad0Opsz48 from '../components/SwitchAccessShortcutFill0Wght700Grad0Opsz48'
import IconSwitchAccessShortcutFill1Wght100Grad0Opsz48 from '../components/SwitchAccessShortcutFill1Wght100Grad0Opsz48'
import IconSwitchAccessShortcutFill1Wght200Grad0Opsz48 from '../components/SwitchAccessShortcutFill1Wght200Grad0Opsz48'
import IconSwitchAccessShortcutFill1Wght300Grad0Opsz48 from '../components/SwitchAccessShortcutFill1Wght300Grad0Opsz48'
import IconSwitchAccessShortcutFill1Wght400Grad0Opsz48 from '../components/SwitchAccessShortcutFill1Wght400Grad0Opsz48'
import IconSwitchAccessShortcutFill1Wght500Grad0Opsz48 from '../components/SwitchAccessShortcutFill1Wght500Grad0Opsz48'
import IconSwitchAccessShortcutFill1Wght600Grad0Opsz48 from '../components/SwitchAccessShortcutFill1Wght600Grad0Opsz48'
import IconSwitchAccessShortcutFill1Wght700Grad0Opsz48 from '../components/SwitchAccessShortcutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwitchAccessShortcut = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwitchAccessShortcutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwitchAccessShortcutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwitchAccessShortcutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwitchAccessShortcutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwitchAccessShortcutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwitchAccessShortcutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwitchAccessShortcutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwitchAccessShortcutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwitchAccessShortcutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwitchAccessShortcutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwitchAccessShortcutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwitchAccessShortcutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwitchAccessShortcutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwitchAccessShortcutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
