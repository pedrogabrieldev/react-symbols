import IconSettingsInputSvideoFill0Wght100Grad0Opsz48 from '../components/SettingsInputSvideoFill0Wght100Grad0Opsz48'
import IconSettingsInputSvideoFill0Wght200Grad0Opsz48 from '../components/SettingsInputSvideoFill0Wght200Grad0Opsz48'
import IconSettingsInputSvideoFill0Wght300Grad0Opsz48 from '../components/SettingsInputSvideoFill0Wght300Grad0Opsz48'
import IconSettingsInputSvideoFill0Wght400Grad0Opsz48 from '../components/SettingsInputSvideoFill0Wght400Grad0Opsz48'
import IconSettingsInputSvideoFill0Wght500Grad0Opsz48 from '../components/SettingsInputSvideoFill0Wght500Grad0Opsz48'
import IconSettingsInputSvideoFill0Wght600Grad0Opsz48 from '../components/SettingsInputSvideoFill0Wght600Grad0Opsz48'
import IconSettingsInputSvideoFill0Wght700Grad0Opsz48 from '../components/SettingsInputSvideoFill0Wght700Grad0Opsz48'
import IconSettingsInputSvideoFill1Wght100Grad0Opsz48 from '../components/SettingsInputSvideoFill1Wght100Grad0Opsz48'
import IconSettingsInputSvideoFill1Wght200Grad0Opsz48 from '../components/SettingsInputSvideoFill1Wght200Grad0Opsz48'
import IconSettingsInputSvideoFill1Wght300Grad0Opsz48 from '../components/SettingsInputSvideoFill1Wght300Grad0Opsz48'
import IconSettingsInputSvideoFill1Wght400Grad0Opsz48 from '../components/SettingsInputSvideoFill1Wght400Grad0Opsz48'
import IconSettingsInputSvideoFill1Wght500Grad0Opsz48 from '../components/SettingsInputSvideoFill1Wght500Grad0Opsz48'
import IconSettingsInputSvideoFill1Wght600Grad0Opsz48 from '../components/SettingsInputSvideoFill1Wght600Grad0Opsz48'
import IconSettingsInputSvideoFill1Wght700Grad0Opsz48 from '../components/SettingsInputSvideoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsInputSvideo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsInputSvideoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsInputSvideoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsInputSvideoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsInputSvideoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsInputSvideoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsInputSvideoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsInputSvideoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsInputSvideoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsInputSvideoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsInputSvideoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsInputSvideoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsInputSvideoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsInputSvideoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsInputSvideoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
