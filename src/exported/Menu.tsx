import IconMenuFill0Wght100Grad0Opsz48 from '../components/MenuFill0Wght100Grad0Opsz48'
import IconMenuFill0Wght200Grad0Opsz48 from '../components/MenuFill0Wght200Grad0Opsz48'
import IconMenuFill0Wght300Grad0Opsz48 from '../components/MenuFill0Wght300Grad0Opsz48'
import IconMenuFill0Wght400Grad0Opsz48 from '../components/MenuFill0Wght400Grad0Opsz48'
import IconMenuFill0Wght500Grad0Opsz48 from '../components/MenuFill0Wght500Grad0Opsz48'
import IconMenuFill0Wght600Grad0Opsz48 from '../components/MenuFill0Wght600Grad0Opsz48'
import IconMenuFill0Wght700Grad0Opsz48 from '../components/MenuFill0Wght700Grad0Opsz48'
import IconMenuFill1Wght100Grad0Opsz48 from '../components/MenuFill1Wght100Grad0Opsz48'
import IconMenuFill1Wght200Grad0Opsz48 from '../components/MenuFill1Wght200Grad0Opsz48'
import IconMenuFill1Wght300Grad0Opsz48 from '../components/MenuFill1Wght300Grad0Opsz48'
import IconMenuFill1Wght400Grad0Opsz48 from '../components/MenuFill1Wght400Grad0Opsz48'
import IconMenuFill1Wght500Grad0Opsz48 from '../components/MenuFill1Wght500Grad0Opsz48'
import IconMenuFill1Wght600Grad0Opsz48 from '../components/MenuFill1Wght600Grad0Opsz48'
import IconMenuFill1Wght700Grad0Opsz48 from '../components/MenuFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMenu = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMenuFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMenuFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMenuFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMenuFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMenuFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMenuFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMenuFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMenuFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMenuFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMenuFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMenuFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMenuFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMenuFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMenuFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
