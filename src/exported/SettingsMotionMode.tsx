import IconSettingsMotionModeFill0Wght100Grad0Opsz48 from '../components/SettingsMotionModeFill0Wght100Grad0Opsz48'
import IconSettingsMotionModeFill0Wght200Grad0Opsz48 from '../components/SettingsMotionModeFill0Wght200Grad0Opsz48'
import IconSettingsMotionModeFill0Wght300Grad0Opsz48 from '../components/SettingsMotionModeFill0Wght300Grad0Opsz48'
import IconSettingsMotionModeFill0Wght400Grad0Opsz48 from '../components/SettingsMotionModeFill0Wght400Grad0Opsz48'
import IconSettingsMotionModeFill0Wght500Grad0Opsz48 from '../components/SettingsMotionModeFill0Wght500Grad0Opsz48'
import IconSettingsMotionModeFill0Wght600Grad0Opsz48 from '../components/SettingsMotionModeFill0Wght600Grad0Opsz48'
import IconSettingsMotionModeFill0Wght700Grad0Opsz48 from '../components/SettingsMotionModeFill0Wght700Grad0Opsz48'
import IconSettingsMotionModeFill1Wght100Grad0Opsz48 from '../components/SettingsMotionModeFill1Wght100Grad0Opsz48'
import IconSettingsMotionModeFill1Wght200Grad0Opsz48 from '../components/SettingsMotionModeFill1Wght200Grad0Opsz48'
import IconSettingsMotionModeFill1Wght300Grad0Opsz48 from '../components/SettingsMotionModeFill1Wght300Grad0Opsz48'
import IconSettingsMotionModeFill1Wght400Grad0Opsz48 from '../components/SettingsMotionModeFill1Wght400Grad0Opsz48'
import IconSettingsMotionModeFill1Wght500Grad0Opsz48 from '../components/SettingsMotionModeFill1Wght500Grad0Opsz48'
import IconSettingsMotionModeFill1Wght600Grad0Opsz48 from '../components/SettingsMotionModeFill1Wght600Grad0Opsz48'
import IconSettingsMotionModeFill1Wght700Grad0Opsz48 from '../components/SettingsMotionModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsMotionMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsMotionModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsMotionModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsMotionModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsMotionModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsMotionModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsMotionModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsMotionModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsMotionModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsMotionModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsMotionModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsMotionModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsMotionModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsMotionModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsMotionModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
