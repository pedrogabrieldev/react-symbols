import IconSettingsPhoneFill0Wght100Grad0Opsz48 from '../components/SettingsPhoneFill0Wght100Grad0Opsz48'
import IconSettingsPhoneFill0Wght200Grad0Opsz48 from '../components/SettingsPhoneFill0Wght200Grad0Opsz48'
import IconSettingsPhoneFill0Wght300Grad0Opsz48 from '../components/SettingsPhoneFill0Wght300Grad0Opsz48'
import IconSettingsPhoneFill0Wght400Grad0Opsz48 from '../components/SettingsPhoneFill0Wght400Grad0Opsz48'
import IconSettingsPhoneFill0Wght500Grad0Opsz48 from '../components/SettingsPhoneFill0Wght500Grad0Opsz48'
import IconSettingsPhoneFill0Wght600Grad0Opsz48 from '../components/SettingsPhoneFill0Wght600Grad0Opsz48'
import IconSettingsPhoneFill0Wght700Grad0Opsz48 from '../components/SettingsPhoneFill0Wght700Grad0Opsz48'
import IconSettingsPhoneFill1Wght100Grad0Opsz48 from '../components/SettingsPhoneFill1Wght100Grad0Opsz48'
import IconSettingsPhoneFill1Wght200Grad0Opsz48 from '../components/SettingsPhoneFill1Wght200Grad0Opsz48'
import IconSettingsPhoneFill1Wght300Grad0Opsz48 from '../components/SettingsPhoneFill1Wght300Grad0Opsz48'
import IconSettingsPhoneFill1Wght400Grad0Opsz48 from '../components/SettingsPhoneFill1Wght400Grad0Opsz48'
import IconSettingsPhoneFill1Wght500Grad0Opsz48 from '../components/SettingsPhoneFill1Wght500Grad0Opsz48'
import IconSettingsPhoneFill1Wght600Grad0Opsz48 from '../components/SettingsPhoneFill1Wght600Grad0Opsz48'
import IconSettingsPhoneFill1Wght700Grad0Opsz48 from '../components/SettingsPhoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsPhone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsPhoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsPhoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsPhoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsPhoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsPhoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsPhoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsPhoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsPhoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsPhoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsPhoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsPhoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsPhoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsPhoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsPhoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
