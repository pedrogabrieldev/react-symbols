import IconNotAccessibleFill0Wght100Grad0Opsz48 from '../components/NotAccessibleFill0Wght100Grad0Opsz48'
import IconNotAccessibleFill0Wght200Grad0Opsz48 from '../components/NotAccessibleFill0Wght200Grad0Opsz48'
import IconNotAccessibleFill0Wght300Grad0Opsz48 from '../components/NotAccessibleFill0Wght300Grad0Opsz48'
import IconNotAccessibleFill0Wght400Grad0Opsz48 from '../components/NotAccessibleFill0Wght400Grad0Opsz48'
import IconNotAccessibleFill0Wght500Grad0Opsz48 from '../components/NotAccessibleFill0Wght500Grad0Opsz48'
import IconNotAccessibleFill0Wght600Grad0Opsz48 from '../components/NotAccessibleFill0Wght600Grad0Opsz48'
import IconNotAccessibleFill0Wght700Grad0Opsz48 from '../components/NotAccessibleFill0Wght700Grad0Opsz48'
import IconNotAccessibleFill1Wght100Grad0Opsz48 from '../components/NotAccessibleFill1Wght100Grad0Opsz48'
import IconNotAccessibleFill1Wght200Grad0Opsz48 from '../components/NotAccessibleFill1Wght200Grad0Opsz48'
import IconNotAccessibleFill1Wght300Grad0Opsz48 from '../components/NotAccessibleFill1Wght300Grad0Opsz48'
import IconNotAccessibleFill1Wght400Grad0Opsz48 from '../components/NotAccessibleFill1Wght400Grad0Opsz48'
import IconNotAccessibleFill1Wght500Grad0Opsz48 from '../components/NotAccessibleFill1Wght500Grad0Opsz48'
import IconNotAccessibleFill1Wght600Grad0Opsz48 from '../components/NotAccessibleFill1Wght600Grad0Opsz48'
import IconNotAccessibleFill1Wght700Grad0Opsz48 from '../components/NotAccessibleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotAccessible = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotAccessibleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotAccessibleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotAccessibleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotAccessibleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotAccessibleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotAccessibleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotAccessibleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotAccessibleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotAccessibleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotAccessibleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotAccessibleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotAccessibleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotAccessibleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotAccessibleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
