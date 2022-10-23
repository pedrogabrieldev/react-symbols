import IconTempPreferencesCustomFill0Wght100Grad0Opsz48 from '../components/TempPreferencesCustomFill0Wght100Grad0Opsz48'
import IconTempPreferencesCustomFill0Wght200Grad0Opsz48 from '../components/TempPreferencesCustomFill0Wght200Grad0Opsz48'
import IconTempPreferencesCustomFill0Wght300Grad0Opsz48 from '../components/TempPreferencesCustomFill0Wght300Grad0Opsz48'
import IconTempPreferencesCustomFill0Wght400Grad0Opsz48 from '../components/TempPreferencesCustomFill0Wght400Grad0Opsz48'
import IconTempPreferencesCustomFill0Wght500Grad0Opsz48 from '../components/TempPreferencesCustomFill0Wght500Grad0Opsz48'
import IconTempPreferencesCustomFill0Wght600Grad0Opsz48 from '../components/TempPreferencesCustomFill0Wght600Grad0Opsz48'
import IconTempPreferencesCustomFill0Wght700Grad0Opsz48 from '../components/TempPreferencesCustomFill0Wght700Grad0Opsz48'
import IconTempPreferencesCustomFill1Wght100Grad0Opsz48 from '../components/TempPreferencesCustomFill1Wght100Grad0Opsz48'
import IconTempPreferencesCustomFill1Wght200Grad0Opsz48 from '../components/TempPreferencesCustomFill1Wght200Grad0Opsz48'
import IconTempPreferencesCustomFill1Wght300Grad0Opsz48 from '../components/TempPreferencesCustomFill1Wght300Grad0Opsz48'
import IconTempPreferencesCustomFill1Wght400Grad0Opsz48 from '../components/TempPreferencesCustomFill1Wght400Grad0Opsz48'
import IconTempPreferencesCustomFill1Wght500Grad0Opsz48 from '../components/TempPreferencesCustomFill1Wght500Grad0Opsz48'
import IconTempPreferencesCustomFill1Wght600Grad0Opsz48 from '../components/TempPreferencesCustomFill1Wght600Grad0Opsz48'
import IconTempPreferencesCustomFill1Wght700Grad0Opsz48 from '../components/TempPreferencesCustomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTempPreferencesCustom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTempPreferencesCustomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTempPreferencesCustomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTempPreferencesCustomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTempPreferencesCustomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTempPreferencesCustomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTempPreferencesCustomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTempPreferencesCustomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTempPreferencesCustomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTempPreferencesCustomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTempPreferencesCustomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTempPreferencesCustomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTempPreferencesCustomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTempPreferencesCustomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTempPreferencesCustomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
