import IconOfflineBoltFill0Wght100Grad0Opsz48 from '../components/OfflineBoltFill0Wght100Grad0Opsz48'
import IconOfflineBoltFill0Wght200Grad0Opsz48 from '../components/OfflineBoltFill0Wght200Grad0Opsz48'
import IconOfflineBoltFill0Wght300Grad0Opsz48 from '../components/OfflineBoltFill0Wght300Grad0Opsz48'
import IconOfflineBoltFill0Wght400Grad0Opsz48 from '../components/OfflineBoltFill0Wght400Grad0Opsz48'
import IconOfflineBoltFill0Wght500Grad0Opsz48 from '../components/OfflineBoltFill0Wght500Grad0Opsz48'
import IconOfflineBoltFill0Wght600Grad0Opsz48 from '../components/OfflineBoltFill0Wght600Grad0Opsz48'
import IconOfflineBoltFill0Wght700Grad0Opsz48 from '../components/OfflineBoltFill0Wght700Grad0Opsz48'
import IconOfflineBoltFill1Wght100Grad0Opsz48 from '../components/OfflineBoltFill1Wght100Grad0Opsz48'
import IconOfflineBoltFill1Wght200Grad0Opsz48 from '../components/OfflineBoltFill1Wght200Grad0Opsz48'
import IconOfflineBoltFill1Wght300Grad0Opsz48 from '../components/OfflineBoltFill1Wght300Grad0Opsz48'
import IconOfflineBoltFill1Wght400Grad0Opsz48 from '../components/OfflineBoltFill1Wght400Grad0Opsz48'
import IconOfflineBoltFill1Wght500Grad0Opsz48 from '../components/OfflineBoltFill1Wght500Grad0Opsz48'
import IconOfflineBoltFill1Wght600Grad0Opsz48 from '../components/OfflineBoltFill1Wght600Grad0Opsz48'
import IconOfflineBoltFill1Wght700Grad0Opsz48 from '../components/OfflineBoltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOfflineBolt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOfflineBoltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOfflineBoltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOfflineBoltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOfflineBoltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOfflineBoltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOfflineBoltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOfflineBoltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOfflineBoltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOfflineBoltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOfflineBoltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOfflineBoltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOfflineBoltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOfflineBoltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOfflineBoltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
