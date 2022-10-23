import IconEscalatorFill0Wght100Grad0Opsz48 from '../components/EscalatorFill0Wght100Grad0Opsz48'
import IconEscalatorFill0Wght200Grad0Opsz48 from '../components/EscalatorFill0Wght200Grad0Opsz48'
import IconEscalatorFill0Wght300Grad0Opsz48 from '../components/EscalatorFill0Wght300Grad0Opsz48'
import IconEscalatorFill0Wght400Grad0Opsz48 from '../components/EscalatorFill0Wght400Grad0Opsz48'
import IconEscalatorFill0Wght500Grad0Opsz48 from '../components/EscalatorFill0Wght500Grad0Opsz48'
import IconEscalatorFill0Wght600Grad0Opsz48 from '../components/EscalatorFill0Wght600Grad0Opsz48'
import IconEscalatorFill0Wght700Grad0Opsz48 from '../components/EscalatorFill0Wght700Grad0Opsz48'
import IconEscalatorFill1Wght100Grad0Opsz48 from '../components/EscalatorFill1Wght100Grad0Opsz48'
import IconEscalatorFill1Wght200Grad0Opsz48 from '../components/EscalatorFill1Wght200Grad0Opsz48'
import IconEscalatorFill1Wght300Grad0Opsz48 from '../components/EscalatorFill1Wght300Grad0Opsz48'
import IconEscalatorFill1Wght400Grad0Opsz48 from '../components/EscalatorFill1Wght400Grad0Opsz48'
import IconEscalatorFill1Wght500Grad0Opsz48 from '../components/EscalatorFill1Wght500Grad0Opsz48'
import IconEscalatorFill1Wght600Grad0Opsz48 from '../components/EscalatorFill1Wght600Grad0Opsz48'
import IconEscalatorFill1Wght700Grad0Opsz48 from '../components/EscalatorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEscalator = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEscalatorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEscalatorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEscalatorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEscalatorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEscalatorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEscalatorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEscalatorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEscalatorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEscalatorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEscalatorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEscalatorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEscalatorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEscalatorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEscalatorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
