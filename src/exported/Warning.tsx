import IconWarningFill0Wght100Grad0Opsz48 from '../components/WarningFill0Wght100Grad0Opsz48'
import IconWarningFill0Wght200Grad0Opsz48 from '../components/WarningFill0Wght200Grad0Opsz48'
import IconWarningFill0Wght300Grad0Opsz48 from '../components/WarningFill0Wght300Grad0Opsz48'
import IconWarningFill0Wght400Grad0Opsz48 from '../components/WarningFill0Wght400Grad0Opsz48'
import IconWarningFill0Wght500Grad0Opsz48 from '../components/WarningFill0Wght500Grad0Opsz48'
import IconWarningFill0Wght600Grad0Opsz48 from '../components/WarningFill0Wght600Grad0Opsz48'
import IconWarningFill0Wght700Grad0Opsz48 from '../components/WarningFill0Wght700Grad0Opsz48'
import IconWarningFill1Wght100Grad0Opsz48 from '../components/WarningFill1Wght100Grad0Opsz48'
import IconWarningFill1Wght200Grad0Opsz48 from '../components/WarningFill1Wght200Grad0Opsz48'
import IconWarningFill1Wght300Grad0Opsz48 from '../components/WarningFill1Wght300Grad0Opsz48'
import IconWarningFill1Wght400Grad0Opsz48 from '../components/WarningFill1Wght400Grad0Opsz48'
import IconWarningFill1Wght500Grad0Opsz48 from '../components/WarningFill1Wght500Grad0Opsz48'
import IconWarningFill1Wght600Grad0Opsz48 from '../components/WarningFill1Wght600Grad0Opsz48'
import IconWarningFill1Wght700Grad0Opsz48 from '../components/WarningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWarning = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWarningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWarningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWarningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWarningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWarningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWarningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWarningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWarningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWarningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWarningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWarningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWarningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWarningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWarningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
