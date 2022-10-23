import IconPowerSettingsNewFill0Wght100Grad0Opsz48 from '../components/PowerSettingsNewFill0Wght100Grad0Opsz48'
import IconPowerSettingsNewFill0Wght200Grad0Opsz48 from '../components/PowerSettingsNewFill0Wght200Grad0Opsz48'
import IconPowerSettingsNewFill0Wght300Grad0Opsz48 from '../components/PowerSettingsNewFill0Wght300Grad0Opsz48'
import IconPowerSettingsNewFill0Wght400Grad0Opsz48 from '../components/PowerSettingsNewFill0Wght400Grad0Opsz48'
import IconPowerSettingsNewFill0Wght500Grad0Opsz48 from '../components/PowerSettingsNewFill0Wght500Grad0Opsz48'
import IconPowerSettingsNewFill0Wght600Grad0Opsz48 from '../components/PowerSettingsNewFill0Wght600Grad0Opsz48'
import IconPowerSettingsNewFill0Wght700Grad0Opsz48 from '../components/PowerSettingsNewFill0Wght700Grad0Opsz48'
import IconPowerSettingsNewFill1Wght100Grad0Opsz48 from '../components/PowerSettingsNewFill1Wght100Grad0Opsz48'
import IconPowerSettingsNewFill1Wght200Grad0Opsz48 from '../components/PowerSettingsNewFill1Wght200Grad0Opsz48'
import IconPowerSettingsNewFill1Wght300Grad0Opsz48 from '../components/PowerSettingsNewFill1Wght300Grad0Opsz48'
import IconPowerSettingsNewFill1Wght400Grad0Opsz48 from '../components/PowerSettingsNewFill1Wght400Grad0Opsz48'
import IconPowerSettingsNewFill1Wght500Grad0Opsz48 from '../components/PowerSettingsNewFill1Wght500Grad0Opsz48'
import IconPowerSettingsNewFill1Wght600Grad0Opsz48 from '../components/PowerSettingsNewFill1Wght600Grad0Opsz48'
import IconPowerSettingsNewFill1Wght700Grad0Opsz48 from '../components/PowerSettingsNewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPowerSettingsNew = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPowerSettingsNewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPowerSettingsNewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPowerSettingsNewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPowerSettingsNewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPowerSettingsNewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPowerSettingsNewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPowerSettingsNewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPowerSettingsNewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPowerSettingsNewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPowerSettingsNewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPowerSettingsNewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPowerSettingsNewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPowerSettingsNewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPowerSettingsNewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
