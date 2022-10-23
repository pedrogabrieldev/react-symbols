import IconMoreHorizFill0Wght100Grad0Opsz48 from '../components/MoreHorizFill0Wght100Grad0Opsz48'
import IconMoreHorizFill0Wght200Grad0Opsz48 from '../components/MoreHorizFill0Wght200Grad0Opsz48'
import IconMoreHorizFill0Wght300Grad0Opsz48 from '../components/MoreHorizFill0Wght300Grad0Opsz48'
import IconMoreHorizFill0Wght400Grad0Opsz48 from '../components/MoreHorizFill0Wght400Grad0Opsz48'
import IconMoreHorizFill0Wght500Grad0Opsz48 from '../components/MoreHorizFill0Wght500Grad0Opsz48'
import IconMoreHorizFill0Wght600Grad0Opsz48 from '../components/MoreHorizFill0Wght600Grad0Opsz48'
import IconMoreHorizFill0Wght700Grad0Opsz48 from '../components/MoreHorizFill0Wght700Grad0Opsz48'
import IconMoreHorizFill1Wght100Grad0Opsz48 from '../components/MoreHorizFill1Wght100Grad0Opsz48'
import IconMoreHorizFill1Wght200Grad0Opsz48 from '../components/MoreHorizFill1Wght200Grad0Opsz48'
import IconMoreHorizFill1Wght300Grad0Opsz48 from '../components/MoreHorizFill1Wght300Grad0Opsz48'
import IconMoreHorizFill1Wght400Grad0Opsz48 from '../components/MoreHorizFill1Wght400Grad0Opsz48'
import IconMoreHorizFill1Wght500Grad0Opsz48 from '../components/MoreHorizFill1Wght500Grad0Opsz48'
import IconMoreHorizFill1Wght600Grad0Opsz48 from '../components/MoreHorizFill1Wght600Grad0Opsz48'
import IconMoreHorizFill1Wght700Grad0Opsz48 from '../components/MoreHorizFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoreHoriz = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoreHorizFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoreHorizFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoreHorizFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoreHorizFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoreHorizFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoreHorizFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoreHorizFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoreHorizFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoreHorizFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoreHorizFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoreHorizFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoreHorizFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoreHorizFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoreHorizFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
