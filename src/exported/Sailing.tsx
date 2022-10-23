import IconSailingFill0Wght100Grad0Opsz48 from '../components/SailingFill0Wght100Grad0Opsz48'
import IconSailingFill0Wght200Grad0Opsz48 from '../components/SailingFill0Wght200Grad0Opsz48'
import IconSailingFill0Wght300Grad0Opsz48 from '../components/SailingFill0Wght300Grad0Opsz48'
import IconSailingFill0Wght400Grad0Opsz48 from '../components/SailingFill0Wght400Grad0Opsz48'
import IconSailingFill0Wght500Grad0Opsz48 from '../components/SailingFill0Wght500Grad0Opsz48'
import IconSailingFill0Wght600Grad0Opsz48 from '../components/SailingFill0Wght600Grad0Opsz48'
import IconSailingFill0Wght700Grad0Opsz48 from '../components/SailingFill0Wght700Grad0Opsz48'
import IconSailingFill1Wght100Grad0Opsz48 from '../components/SailingFill1Wght100Grad0Opsz48'
import IconSailingFill1Wght200Grad0Opsz48 from '../components/SailingFill1Wght200Grad0Opsz48'
import IconSailingFill1Wght300Grad0Opsz48 from '../components/SailingFill1Wght300Grad0Opsz48'
import IconSailingFill1Wght400Grad0Opsz48 from '../components/SailingFill1Wght400Grad0Opsz48'
import IconSailingFill1Wght500Grad0Opsz48 from '../components/SailingFill1Wght500Grad0Opsz48'
import IconSailingFill1Wght600Grad0Opsz48 from '../components/SailingFill1Wght600Grad0Opsz48'
import IconSailingFill1Wght700Grad0Opsz48 from '../components/SailingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSailing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSailingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSailingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSailingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSailingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSailingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSailingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSailingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSailingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSailingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSailingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSailingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSailingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSailingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSailingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
