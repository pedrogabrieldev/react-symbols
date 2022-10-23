import IconSettingsInputHdmiFill0Wght100Grad0Opsz48 from '../components/SettingsInputHdmiFill0Wght100Grad0Opsz48'
import IconSettingsInputHdmiFill0Wght200Grad0Opsz48 from '../components/SettingsInputHdmiFill0Wght200Grad0Opsz48'
import IconSettingsInputHdmiFill0Wght300Grad0Opsz48 from '../components/SettingsInputHdmiFill0Wght300Grad0Opsz48'
import IconSettingsInputHdmiFill0Wght400Grad0Opsz48 from '../components/SettingsInputHdmiFill0Wght400Grad0Opsz48'
import IconSettingsInputHdmiFill0Wght500Grad0Opsz48 from '../components/SettingsInputHdmiFill0Wght500Grad0Opsz48'
import IconSettingsInputHdmiFill0Wght600Grad0Opsz48 from '../components/SettingsInputHdmiFill0Wght600Grad0Opsz48'
import IconSettingsInputHdmiFill0Wght700Grad0Opsz48 from '../components/SettingsInputHdmiFill0Wght700Grad0Opsz48'
import IconSettingsInputHdmiFill1Wght100Grad0Opsz48 from '../components/SettingsInputHdmiFill1Wght100Grad0Opsz48'
import IconSettingsInputHdmiFill1Wght200Grad0Opsz48 from '../components/SettingsInputHdmiFill1Wght200Grad0Opsz48'
import IconSettingsInputHdmiFill1Wght300Grad0Opsz48 from '../components/SettingsInputHdmiFill1Wght300Grad0Opsz48'
import IconSettingsInputHdmiFill1Wght400Grad0Opsz48 from '../components/SettingsInputHdmiFill1Wght400Grad0Opsz48'
import IconSettingsInputHdmiFill1Wght500Grad0Opsz48 from '../components/SettingsInputHdmiFill1Wght500Grad0Opsz48'
import IconSettingsInputHdmiFill1Wght600Grad0Opsz48 from '../components/SettingsInputHdmiFill1Wght600Grad0Opsz48'
import IconSettingsInputHdmiFill1Wght700Grad0Opsz48 from '../components/SettingsInputHdmiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsInputHdmi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsInputHdmiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsInputHdmiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsInputHdmiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsInputHdmiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsInputHdmiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsInputHdmiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsInputHdmiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsInputHdmiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsInputHdmiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsInputHdmiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsInputHdmiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsInputHdmiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsInputHdmiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsInputHdmiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
