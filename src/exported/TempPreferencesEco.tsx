import IconTempPreferencesEcoFill0Wght100Grad0Opsz48 from '../components/TempPreferencesEcoFill0Wght100Grad0Opsz48'
import IconTempPreferencesEcoFill0Wght200Grad0Opsz48 from '../components/TempPreferencesEcoFill0Wght200Grad0Opsz48'
import IconTempPreferencesEcoFill0Wght300Grad0Opsz48 from '../components/TempPreferencesEcoFill0Wght300Grad0Opsz48'
import IconTempPreferencesEcoFill0Wght400Grad0Opsz48 from '../components/TempPreferencesEcoFill0Wght400Grad0Opsz48'
import IconTempPreferencesEcoFill0Wght500Grad0Opsz48 from '../components/TempPreferencesEcoFill0Wght500Grad0Opsz48'
import IconTempPreferencesEcoFill0Wght600Grad0Opsz48 from '../components/TempPreferencesEcoFill0Wght600Grad0Opsz48'
import IconTempPreferencesEcoFill0Wght700Grad0Opsz48 from '../components/TempPreferencesEcoFill0Wght700Grad0Opsz48'
import IconTempPreferencesEcoFill1Wght100Grad0Opsz48 from '../components/TempPreferencesEcoFill1Wght100Grad0Opsz48'
import IconTempPreferencesEcoFill1Wght200Grad0Opsz48 from '../components/TempPreferencesEcoFill1Wght200Grad0Opsz48'
import IconTempPreferencesEcoFill1Wght300Grad0Opsz48 from '../components/TempPreferencesEcoFill1Wght300Grad0Opsz48'
import IconTempPreferencesEcoFill1Wght400Grad0Opsz48 from '../components/TempPreferencesEcoFill1Wght400Grad0Opsz48'
import IconTempPreferencesEcoFill1Wght500Grad0Opsz48 from '../components/TempPreferencesEcoFill1Wght500Grad0Opsz48'
import IconTempPreferencesEcoFill1Wght600Grad0Opsz48 from '../components/TempPreferencesEcoFill1Wght600Grad0Opsz48'
import IconTempPreferencesEcoFill1Wght700Grad0Opsz48 from '../components/TempPreferencesEcoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTempPreferencesEco = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTempPreferencesEcoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTempPreferencesEcoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTempPreferencesEcoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTempPreferencesEcoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTempPreferencesEcoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTempPreferencesEcoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTempPreferencesEcoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTempPreferencesEcoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTempPreferencesEcoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTempPreferencesEcoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTempPreferencesEcoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTempPreferencesEcoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTempPreferencesEcoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTempPreferencesEcoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
