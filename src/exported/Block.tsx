import IconBlockFill0Wght100Grad0Opsz48 from '../components/BlockFill0Wght100Grad0Opsz48'
import IconBlockFill0Wght200Grad0Opsz48 from '../components/BlockFill0Wght200Grad0Opsz48'
import IconBlockFill0Wght300Grad0Opsz48 from '../components/BlockFill0Wght300Grad0Opsz48'
import IconBlockFill0Wght400Grad0Opsz48 from '../components/BlockFill0Wght400Grad0Opsz48'
import IconBlockFill0Wght500Grad0Opsz48 from '../components/BlockFill0Wght500Grad0Opsz48'
import IconBlockFill0Wght600Grad0Opsz48 from '../components/BlockFill0Wght600Grad0Opsz48'
import IconBlockFill0Wght700Grad0Opsz48 from '../components/BlockFill0Wght700Grad0Opsz48'
import IconBlockFill1Wght100Grad0Opsz48 from '../components/BlockFill1Wght100Grad0Opsz48'
import IconBlockFill1Wght200Grad0Opsz48 from '../components/BlockFill1Wght200Grad0Opsz48'
import IconBlockFill1Wght300Grad0Opsz48 from '../components/BlockFill1Wght300Grad0Opsz48'
import IconBlockFill1Wght400Grad0Opsz48 from '../components/BlockFill1Wght400Grad0Opsz48'
import IconBlockFill1Wght500Grad0Opsz48 from '../components/BlockFill1Wght500Grad0Opsz48'
import IconBlockFill1Wght600Grad0Opsz48 from '../components/BlockFill1Wght600Grad0Opsz48'
import IconBlockFill1Wght700Grad0Opsz48 from '../components/BlockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
