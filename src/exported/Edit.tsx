import IconEditFill0Wght100Grad0Opsz48 from '../components/EditFill0Wght100Grad0Opsz48'
import IconEditFill0Wght200Grad0Opsz48 from '../components/EditFill0Wght200Grad0Opsz48'
import IconEditFill0Wght300Grad0Opsz48 from '../components/EditFill0Wght300Grad0Opsz48'
import IconEditFill0Wght400Grad0Opsz48 from '../components/EditFill0Wght400Grad0Opsz48'
import IconEditFill0Wght500Grad0Opsz48 from '../components/EditFill0Wght500Grad0Opsz48'
import IconEditFill0Wght600Grad0Opsz48 from '../components/EditFill0Wght600Grad0Opsz48'
import IconEditFill0Wght700Grad0Opsz48 from '../components/EditFill0Wght700Grad0Opsz48'
import IconEditFill1Wght100Grad0Opsz48 from '../components/EditFill1Wght100Grad0Opsz48'
import IconEditFill1Wght200Grad0Opsz48 from '../components/EditFill1Wght200Grad0Opsz48'
import IconEditFill1Wght300Grad0Opsz48 from '../components/EditFill1Wght300Grad0Opsz48'
import IconEditFill1Wght400Grad0Opsz48 from '../components/EditFill1Wght400Grad0Opsz48'
import IconEditFill1Wght500Grad0Opsz48 from '../components/EditFill1Wght500Grad0Opsz48'
import IconEditFill1Wght600Grad0Opsz48 from '../components/EditFill1Wght600Grad0Opsz48'
import IconEditFill1Wght700Grad0Opsz48 from '../components/EditFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEdit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
