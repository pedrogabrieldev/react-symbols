import IconSettingsVoiceFill0Wght100Grad0Opsz48 from '../components/SettingsVoiceFill0Wght100Grad0Opsz48'
import IconSettingsVoiceFill0Wght200Grad0Opsz48 from '../components/SettingsVoiceFill0Wght200Grad0Opsz48'
import IconSettingsVoiceFill0Wght300Grad0Opsz48 from '../components/SettingsVoiceFill0Wght300Grad0Opsz48'
import IconSettingsVoiceFill0Wght400Grad0Opsz48 from '../components/SettingsVoiceFill0Wght400Grad0Opsz48'
import IconSettingsVoiceFill0Wght500Grad0Opsz48 from '../components/SettingsVoiceFill0Wght500Grad0Opsz48'
import IconSettingsVoiceFill0Wght600Grad0Opsz48 from '../components/SettingsVoiceFill0Wght600Grad0Opsz48'
import IconSettingsVoiceFill0Wght700Grad0Opsz48 from '../components/SettingsVoiceFill0Wght700Grad0Opsz48'
import IconSettingsVoiceFill1Wght100Grad0Opsz48 from '../components/SettingsVoiceFill1Wght100Grad0Opsz48'
import IconSettingsVoiceFill1Wght200Grad0Opsz48 from '../components/SettingsVoiceFill1Wght200Grad0Opsz48'
import IconSettingsVoiceFill1Wght300Grad0Opsz48 from '../components/SettingsVoiceFill1Wght300Grad0Opsz48'
import IconSettingsVoiceFill1Wght400Grad0Opsz48 from '../components/SettingsVoiceFill1Wght400Grad0Opsz48'
import IconSettingsVoiceFill1Wght500Grad0Opsz48 from '../components/SettingsVoiceFill1Wght500Grad0Opsz48'
import IconSettingsVoiceFill1Wght600Grad0Opsz48 from '../components/SettingsVoiceFill1Wght600Grad0Opsz48'
import IconSettingsVoiceFill1Wght700Grad0Opsz48 from '../components/SettingsVoiceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsVoice = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsVoiceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsVoiceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsVoiceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsVoiceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsVoiceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsVoiceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsVoiceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsVoiceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsVoiceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsVoiceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsVoiceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsVoiceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsVoiceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsVoiceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
