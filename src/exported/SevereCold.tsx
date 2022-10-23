import IconSevereColdFill0Wght100Grad0Opsz48 from '../components/SevereColdFill0Wght100Grad0Opsz48'
import IconSevereColdFill0Wght200Grad0Opsz48 from '../components/SevereColdFill0Wght200Grad0Opsz48'
import IconSevereColdFill0Wght300Grad0Opsz48 from '../components/SevereColdFill0Wght300Grad0Opsz48'
import IconSevereColdFill0Wght400Grad0Opsz48 from '../components/SevereColdFill0Wght400Grad0Opsz48'
import IconSevereColdFill0Wght500Grad0Opsz48 from '../components/SevereColdFill0Wght500Grad0Opsz48'
import IconSevereColdFill0Wght600Grad0Opsz48 from '../components/SevereColdFill0Wght600Grad0Opsz48'
import IconSevereColdFill0Wght700Grad0Opsz48 from '../components/SevereColdFill0Wght700Grad0Opsz48'
import IconSevereColdFill1Wght100Grad0Opsz48 from '../components/SevereColdFill1Wght100Grad0Opsz48'
import IconSevereColdFill1Wght200Grad0Opsz48 from '../components/SevereColdFill1Wght200Grad0Opsz48'
import IconSevereColdFill1Wght300Grad0Opsz48 from '../components/SevereColdFill1Wght300Grad0Opsz48'
import IconSevereColdFill1Wght400Grad0Opsz48 from '../components/SevereColdFill1Wght400Grad0Opsz48'
import IconSevereColdFill1Wght500Grad0Opsz48 from '../components/SevereColdFill1Wght500Grad0Opsz48'
import IconSevereColdFill1Wght600Grad0Opsz48 from '../components/SevereColdFill1Wght600Grad0Opsz48'
import IconSevereColdFill1Wght700Grad0Opsz48 from '../components/SevereColdFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSevereCold = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSevereColdFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSevereColdFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSevereColdFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSevereColdFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSevereColdFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSevereColdFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSevereColdFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSevereColdFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSevereColdFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSevereColdFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSevereColdFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSevereColdFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSevereColdFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSevereColdFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
