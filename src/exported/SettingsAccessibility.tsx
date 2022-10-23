import IconSettingsAccessibilityFill0Wght100Grad0Opsz48 from '../components/SettingsAccessibilityFill0Wght100Grad0Opsz48'
import IconSettingsAccessibilityFill0Wght200Grad0Opsz48 from '../components/SettingsAccessibilityFill0Wght200Grad0Opsz48'
import IconSettingsAccessibilityFill0Wght300Grad0Opsz48 from '../components/SettingsAccessibilityFill0Wght300Grad0Opsz48'
import IconSettingsAccessibilityFill0Wght400Grad0Opsz48 from '../components/SettingsAccessibilityFill0Wght400Grad0Opsz48'
import IconSettingsAccessibilityFill0Wght500Grad0Opsz48 from '../components/SettingsAccessibilityFill0Wght500Grad0Opsz48'
import IconSettingsAccessibilityFill0Wght600Grad0Opsz48 from '../components/SettingsAccessibilityFill0Wght600Grad0Opsz48'
import IconSettingsAccessibilityFill0Wght700Grad0Opsz48 from '../components/SettingsAccessibilityFill0Wght700Grad0Opsz48'
import IconSettingsAccessibilityFill1Wght100Grad0Opsz48 from '../components/SettingsAccessibilityFill1Wght100Grad0Opsz48'
import IconSettingsAccessibilityFill1Wght200Grad0Opsz48 from '../components/SettingsAccessibilityFill1Wght200Grad0Opsz48'
import IconSettingsAccessibilityFill1Wght300Grad0Opsz48 from '../components/SettingsAccessibilityFill1Wght300Grad0Opsz48'
import IconSettingsAccessibilityFill1Wght400Grad0Opsz48 from '../components/SettingsAccessibilityFill1Wght400Grad0Opsz48'
import IconSettingsAccessibilityFill1Wght500Grad0Opsz48 from '../components/SettingsAccessibilityFill1Wght500Grad0Opsz48'
import IconSettingsAccessibilityFill1Wght600Grad0Opsz48 from '../components/SettingsAccessibilityFill1Wght600Grad0Opsz48'
import IconSettingsAccessibilityFill1Wght700Grad0Opsz48 from '../components/SettingsAccessibilityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsAccessibility = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsAccessibilityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsAccessibilityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsAccessibilityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsAccessibilityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsAccessibilityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsAccessibilityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsAccessibilityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsAccessibilityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsAccessibilityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsAccessibilityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsAccessibilityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsAccessibilityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsAccessibilityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsAccessibilityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
