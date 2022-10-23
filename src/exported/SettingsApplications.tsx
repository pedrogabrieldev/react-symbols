import IconSettingsApplicationsFill0Wght100Grad0Opsz48 from '../components/SettingsApplicationsFill0Wght100Grad0Opsz48'
import IconSettingsApplicationsFill0Wght200Grad0Opsz48 from '../components/SettingsApplicationsFill0Wght200Grad0Opsz48'
import IconSettingsApplicationsFill0Wght300Grad0Opsz48 from '../components/SettingsApplicationsFill0Wght300Grad0Opsz48'
import IconSettingsApplicationsFill0Wght400Grad0Opsz48 from '../components/SettingsApplicationsFill0Wght400Grad0Opsz48'
import IconSettingsApplicationsFill0Wght500Grad0Opsz48 from '../components/SettingsApplicationsFill0Wght500Grad0Opsz48'
import IconSettingsApplicationsFill0Wght600Grad0Opsz48 from '../components/SettingsApplicationsFill0Wght600Grad0Opsz48'
import IconSettingsApplicationsFill0Wght700Grad0Opsz48 from '../components/SettingsApplicationsFill0Wght700Grad0Opsz48'
import IconSettingsApplicationsFill1Wght100Grad0Opsz48 from '../components/SettingsApplicationsFill1Wght100Grad0Opsz48'
import IconSettingsApplicationsFill1Wght200Grad0Opsz48 from '../components/SettingsApplicationsFill1Wght200Grad0Opsz48'
import IconSettingsApplicationsFill1Wght300Grad0Opsz48 from '../components/SettingsApplicationsFill1Wght300Grad0Opsz48'
import IconSettingsApplicationsFill1Wght400Grad0Opsz48 from '../components/SettingsApplicationsFill1Wght400Grad0Opsz48'
import IconSettingsApplicationsFill1Wght500Grad0Opsz48 from '../components/SettingsApplicationsFill1Wght500Grad0Opsz48'
import IconSettingsApplicationsFill1Wght600Grad0Opsz48 from '../components/SettingsApplicationsFill1Wght600Grad0Opsz48'
import IconSettingsApplicationsFill1Wght700Grad0Opsz48 from '../components/SettingsApplicationsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsApplications = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsApplicationsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsApplicationsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsApplicationsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsApplicationsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsApplicationsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsApplicationsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsApplicationsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsApplicationsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsApplicationsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsApplicationsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsApplicationsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsApplicationsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsApplicationsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsApplicationsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
