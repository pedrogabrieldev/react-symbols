import IconNoTransferFill0Wght100Grad0Opsz48 from '../components/NoTransferFill0Wght100Grad0Opsz48'
import IconNoTransferFill0Wght200Grad0Opsz48 from '../components/NoTransferFill0Wght200Grad0Opsz48'
import IconNoTransferFill0Wght300Grad0Opsz48 from '../components/NoTransferFill0Wght300Grad0Opsz48'
import IconNoTransferFill0Wght400Grad0Opsz48 from '../components/NoTransferFill0Wght400Grad0Opsz48'
import IconNoTransferFill0Wght500Grad0Opsz48 from '../components/NoTransferFill0Wght500Grad0Opsz48'
import IconNoTransferFill0Wght600Grad0Opsz48 from '../components/NoTransferFill0Wght600Grad0Opsz48'
import IconNoTransferFill0Wght700Grad0Opsz48 from '../components/NoTransferFill0Wght700Grad0Opsz48'
import IconNoTransferFill1Wght100Grad0Opsz48 from '../components/NoTransferFill1Wght100Grad0Opsz48'
import IconNoTransferFill1Wght200Grad0Opsz48 from '../components/NoTransferFill1Wght200Grad0Opsz48'
import IconNoTransferFill1Wght300Grad0Opsz48 from '../components/NoTransferFill1Wght300Grad0Opsz48'
import IconNoTransferFill1Wght400Grad0Opsz48 from '../components/NoTransferFill1Wght400Grad0Opsz48'
import IconNoTransferFill1Wght500Grad0Opsz48 from '../components/NoTransferFill1Wght500Grad0Opsz48'
import IconNoTransferFill1Wght600Grad0Opsz48 from '../components/NoTransferFill1Wght600Grad0Opsz48'
import IconNoTransferFill1Wght700Grad0Opsz48 from '../components/NoTransferFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoTransfer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoTransferFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoTransferFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoTransferFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoTransferFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoTransferFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoTransferFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoTransferFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoTransferFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoTransferFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoTransferFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoTransferFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoTransferFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoTransferFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoTransferFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
