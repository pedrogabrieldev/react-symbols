import IconMoreVertFill0Wght100Grad0Opsz48 from '../components/MoreVertFill0Wght100Grad0Opsz48'
import IconMoreVertFill0Wght200Grad0Opsz48 from '../components/MoreVertFill0Wght200Grad0Opsz48'
import IconMoreVertFill0Wght300Grad0Opsz48 from '../components/MoreVertFill0Wght300Grad0Opsz48'
import IconMoreVertFill0Wght400Grad0Opsz48 from '../components/MoreVertFill0Wght400Grad0Opsz48'
import IconMoreVertFill0Wght500Grad0Opsz48 from '../components/MoreVertFill0Wght500Grad0Opsz48'
import IconMoreVertFill0Wght600Grad0Opsz48 from '../components/MoreVertFill0Wght600Grad0Opsz48'
import IconMoreVertFill0Wght700Grad0Opsz48 from '../components/MoreVertFill0Wght700Grad0Opsz48'
import IconMoreVertFill1Wght100Grad0Opsz48 from '../components/MoreVertFill1Wght100Grad0Opsz48'
import IconMoreVertFill1Wght200Grad0Opsz48 from '../components/MoreVertFill1Wght200Grad0Opsz48'
import IconMoreVertFill1Wght300Grad0Opsz48 from '../components/MoreVertFill1Wght300Grad0Opsz48'
import IconMoreVertFill1Wght400Grad0Opsz48 from '../components/MoreVertFill1Wght400Grad0Opsz48'
import IconMoreVertFill1Wght500Grad0Opsz48 from '../components/MoreVertFill1Wght500Grad0Opsz48'
import IconMoreVertFill1Wght600Grad0Opsz48 from '../components/MoreVertFill1Wght600Grad0Opsz48'
import IconMoreVertFill1Wght700Grad0Opsz48 from '../components/MoreVertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoreVert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoreVertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoreVertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoreVertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoreVertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoreVertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoreVertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoreVertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoreVertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoreVertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoreVertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoreVertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoreVertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoreVertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoreVertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
