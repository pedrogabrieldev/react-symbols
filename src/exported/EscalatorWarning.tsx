import IconEscalatorWarningFill0Wght100Grad0Opsz48 from '../components/EscalatorWarningFill0Wght100Grad0Opsz48'
import IconEscalatorWarningFill0Wght200Grad0Opsz48 from '../components/EscalatorWarningFill0Wght200Grad0Opsz48'
import IconEscalatorWarningFill0Wght300Grad0Opsz48 from '../components/EscalatorWarningFill0Wght300Grad0Opsz48'
import IconEscalatorWarningFill0Wght400Grad0Opsz48 from '../components/EscalatorWarningFill0Wght400Grad0Opsz48'
import IconEscalatorWarningFill0Wght500Grad0Opsz48 from '../components/EscalatorWarningFill0Wght500Grad0Opsz48'
import IconEscalatorWarningFill0Wght600Grad0Opsz48 from '../components/EscalatorWarningFill0Wght600Grad0Opsz48'
import IconEscalatorWarningFill0Wght700Grad0Opsz48 from '../components/EscalatorWarningFill0Wght700Grad0Opsz48'
import IconEscalatorWarningFill1Wght100Grad0Opsz48 from '../components/EscalatorWarningFill1Wght100Grad0Opsz48'
import IconEscalatorWarningFill1Wght200Grad0Opsz48 from '../components/EscalatorWarningFill1Wght200Grad0Opsz48'
import IconEscalatorWarningFill1Wght300Grad0Opsz48 from '../components/EscalatorWarningFill1Wght300Grad0Opsz48'
import IconEscalatorWarningFill1Wght400Grad0Opsz48 from '../components/EscalatorWarningFill1Wght400Grad0Opsz48'
import IconEscalatorWarningFill1Wght500Grad0Opsz48 from '../components/EscalatorWarningFill1Wght500Grad0Opsz48'
import IconEscalatorWarningFill1Wght600Grad0Opsz48 from '../components/EscalatorWarningFill1Wght600Grad0Opsz48'
import IconEscalatorWarningFill1Wght700Grad0Opsz48 from '../components/EscalatorWarningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEscalatorWarning = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEscalatorWarningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEscalatorWarningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEscalatorWarningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEscalatorWarningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEscalatorWarningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEscalatorWarningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEscalatorWarningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEscalatorWarningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEscalatorWarningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEscalatorWarningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEscalatorWarningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEscalatorWarningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEscalatorWarningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEscalatorWarningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
