import IconAppShortcutFill0Wght100Grad0Opsz48 from '../components/AppShortcutFill0Wght100Grad0Opsz48'
import IconAppShortcutFill0Wght200Grad0Opsz48 from '../components/AppShortcutFill0Wght200Grad0Opsz48'
import IconAppShortcutFill0Wght300Grad0Opsz48 from '../components/AppShortcutFill0Wght300Grad0Opsz48'
import IconAppShortcutFill0Wght400Grad0Opsz48 from '../components/AppShortcutFill0Wght400Grad0Opsz48'
import IconAppShortcutFill0Wght500Grad0Opsz48 from '../components/AppShortcutFill0Wght500Grad0Opsz48'
import IconAppShortcutFill0Wght600Grad0Opsz48 from '../components/AppShortcutFill0Wght600Grad0Opsz48'
import IconAppShortcutFill0Wght700Grad0Opsz48 from '../components/AppShortcutFill0Wght700Grad0Opsz48'
import IconAppShortcutFill1Wght100Grad0Opsz48 from '../components/AppShortcutFill1Wght100Grad0Opsz48'
import IconAppShortcutFill1Wght200Grad0Opsz48 from '../components/AppShortcutFill1Wght200Grad0Opsz48'
import IconAppShortcutFill1Wght300Grad0Opsz48 from '../components/AppShortcutFill1Wght300Grad0Opsz48'
import IconAppShortcutFill1Wght400Grad0Opsz48 from '../components/AppShortcutFill1Wght400Grad0Opsz48'
import IconAppShortcutFill1Wght500Grad0Opsz48 from '../components/AppShortcutFill1Wght500Grad0Opsz48'
import IconAppShortcutFill1Wght600Grad0Opsz48 from '../components/AppShortcutFill1Wght600Grad0Opsz48'
import IconAppShortcutFill1Wght700Grad0Opsz48 from '../components/AppShortcutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAppShortcut = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAppShortcutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAppShortcutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAppShortcutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAppShortcutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAppShortcutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAppShortcutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAppShortcutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAppShortcutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAppShortcutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAppShortcutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAppShortcutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAppShortcutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAppShortcutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAppShortcutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
