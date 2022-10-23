import IconMenuOpenFill0Wght100Grad0Opsz48 from '../components/MenuOpenFill0Wght100Grad0Opsz48'
import IconMenuOpenFill0Wght200Grad0Opsz48 from '../components/MenuOpenFill0Wght200Grad0Opsz48'
import IconMenuOpenFill0Wght300Grad0Opsz48 from '../components/MenuOpenFill0Wght300Grad0Opsz48'
import IconMenuOpenFill0Wght400Grad0Opsz48 from '../components/MenuOpenFill0Wght400Grad0Opsz48'
import IconMenuOpenFill0Wght500Grad0Opsz48 from '../components/MenuOpenFill0Wght500Grad0Opsz48'
import IconMenuOpenFill0Wght600Grad0Opsz48 from '../components/MenuOpenFill0Wght600Grad0Opsz48'
import IconMenuOpenFill0Wght700Grad0Opsz48 from '../components/MenuOpenFill0Wght700Grad0Opsz48'
import IconMenuOpenFill1Wght100Grad0Opsz48 from '../components/MenuOpenFill1Wght100Grad0Opsz48'
import IconMenuOpenFill1Wght200Grad0Opsz48 from '../components/MenuOpenFill1Wght200Grad0Opsz48'
import IconMenuOpenFill1Wght300Grad0Opsz48 from '../components/MenuOpenFill1Wght300Grad0Opsz48'
import IconMenuOpenFill1Wght400Grad0Opsz48 from '../components/MenuOpenFill1Wght400Grad0Opsz48'
import IconMenuOpenFill1Wght500Grad0Opsz48 from '../components/MenuOpenFill1Wght500Grad0Opsz48'
import IconMenuOpenFill1Wght600Grad0Opsz48 from '../components/MenuOpenFill1Wght600Grad0Opsz48'
import IconMenuOpenFill1Wght700Grad0Opsz48 from '../components/MenuOpenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMenuOpen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMenuOpenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMenuOpenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMenuOpenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMenuOpenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMenuOpenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMenuOpenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMenuOpenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMenuOpenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMenuOpenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMenuOpenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMenuOpenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMenuOpenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMenuOpenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMenuOpenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
