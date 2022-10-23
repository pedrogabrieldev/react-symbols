import IconSettingsPanoramaFill0Wght100Grad0Opsz48 from '../components/SettingsPanoramaFill0Wght100Grad0Opsz48'
import IconSettingsPanoramaFill0Wght200Grad0Opsz48 from '../components/SettingsPanoramaFill0Wght200Grad0Opsz48'
import IconSettingsPanoramaFill0Wght300Grad0Opsz48 from '../components/SettingsPanoramaFill0Wght300Grad0Opsz48'
import IconSettingsPanoramaFill0Wght400Grad0Opsz48 from '../components/SettingsPanoramaFill0Wght400Grad0Opsz48'
import IconSettingsPanoramaFill0Wght500Grad0Opsz48 from '../components/SettingsPanoramaFill0Wght500Grad0Opsz48'
import IconSettingsPanoramaFill0Wght600Grad0Opsz48 from '../components/SettingsPanoramaFill0Wght600Grad0Opsz48'
import IconSettingsPanoramaFill0Wght700Grad0Opsz48 from '../components/SettingsPanoramaFill0Wght700Grad0Opsz48'
import IconSettingsPanoramaFill1Wght100Grad0Opsz48 from '../components/SettingsPanoramaFill1Wght100Grad0Opsz48'
import IconSettingsPanoramaFill1Wght200Grad0Opsz48 from '../components/SettingsPanoramaFill1Wght200Grad0Opsz48'
import IconSettingsPanoramaFill1Wght300Grad0Opsz48 from '../components/SettingsPanoramaFill1Wght300Grad0Opsz48'
import IconSettingsPanoramaFill1Wght400Grad0Opsz48 from '../components/SettingsPanoramaFill1Wght400Grad0Opsz48'
import IconSettingsPanoramaFill1Wght500Grad0Opsz48 from '../components/SettingsPanoramaFill1Wght500Grad0Opsz48'
import IconSettingsPanoramaFill1Wght600Grad0Opsz48 from '../components/SettingsPanoramaFill1Wght600Grad0Opsz48'
import IconSettingsPanoramaFill1Wght700Grad0Opsz48 from '../components/SettingsPanoramaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsPanorama = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsPanoramaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsPanoramaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsPanoramaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsPanoramaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsPanoramaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsPanoramaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsPanoramaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsPanoramaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsPanoramaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsPanoramaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsPanoramaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsPanoramaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsPanoramaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsPanoramaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
