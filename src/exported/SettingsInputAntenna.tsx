import IconSettingsInputAntennaFill0Wght100Grad0Opsz48 from '../components/SettingsInputAntennaFill0Wght100Grad0Opsz48'
import IconSettingsInputAntennaFill0Wght200Grad0Opsz48 from '../components/SettingsInputAntennaFill0Wght200Grad0Opsz48'
import IconSettingsInputAntennaFill0Wght300Grad0Opsz48 from '../components/SettingsInputAntennaFill0Wght300Grad0Opsz48'
import IconSettingsInputAntennaFill0Wght400Grad0Opsz48 from '../components/SettingsInputAntennaFill0Wght400Grad0Opsz48'
import IconSettingsInputAntennaFill0Wght500Grad0Opsz48 from '../components/SettingsInputAntennaFill0Wght500Grad0Opsz48'
import IconSettingsInputAntennaFill0Wght600Grad0Opsz48 from '../components/SettingsInputAntennaFill0Wght600Grad0Opsz48'
import IconSettingsInputAntennaFill0Wght700Grad0Opsz48 from '../components/SettingsInputAntennaFill0Wght700Grad0Opsz48'
import IconSettingsInputAntennaFill1Wght100Grad0Opsz48 from '../components/SettingsInputAntennaFill1Wght100Grad0Opsz48'
import IconSettingsInputAntennaFill1Wght200Grad0Opsz48 from '../components/SettingsInputAntennaFill1Wght200Grad0Opsz48'
import IconSettingsInputAntennaFill1Wght300Grad0Opsz48 from '../components/SettingsInputAntennaFill1Wght300Grad0Opsz48'
import IconSettingsInputAntennaFill1Wght400Grad0Opsz48 from '../components/SettingsInputAntennaFill1Wght400Grad0Opsz48'
import IconSettingsInputAntennaFill1Wght500Grad0Opsz48 from '../components/SettingsInputAntennaFill1Wght500Grad0Opsz48'
import IconSettingsInputAntennaFill1Wght600Grad0Opsz48 from '../components/SettingsInputAntennaFill1Wght600Grad0Opsz48'
import IconSettingsInputAntennaFill1Wght700Grad0Opsz48 from '../components/SettingsInputAntennaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsInputAntenna = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsInputAntennaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsInputAntennaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsInputAntennaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsInputAntennaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsInputAntennaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsInputAntennaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsInputAntennaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsInputAntennaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsInputAntennaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsInputAntennaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsInputAntennaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsInputAntennaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsInputAntennaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsInputAntennaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
