import IconPendingFill0Wght100Grad0Opsz48 from '../components/PendingFill0Wght100Grad0Opsz48'
import IconPendingFill0Wght200Grad0Opsz48 from '../components/PendingFill0Wght200Grad0Opsz48'
import IconPendingFill0Wght300Grad0Opsz48 from '../components/PendingFill0Wght300Grad0Opsz48'
import IconPendingFill0Wght400Grad0Opsz48 from '../components/PendingFill0Wght400Grad0Opsz48'
import IconPendingFill0Wght500Grad0Opsz48 from '../components/PendingFill0Wght500Grad0Opsz48'
import IconPendingFill0Wght600Grad0Opsz48 from '../components/PendingFill0Wght600Grad0Opsz48'
import IconPendingFill0Wght700Grad0Opsz48 from '../components/PendingFill0Wght700Grad0Opsz48'
import IconPendingFill1Wght100Grad0Opsz48 from '../components/PendingFill1Wght100Grad0Opsz48'
import IconPendingFill1Wght200Grad0Opsz48 from '../components/PendingFill1Wght200Grad0Opsz48'
import IconPendingFill1Wght300Grad0Opsz48 from '../components/PendingFill1Wght300Grad0Opsz48'
import IconPendingFill1Wght400Grad0Opsz48 from '../components/PendingFill1Wght400Grad0Opsz48'
import IconPendingFill1Wght500Grad0Opsz48 from '../components/PendingFill1Wght500Grad0Opsz48'
import IconPendingFill1Wght600Grad0Opsz48 from '../components/PendingFill1Wght600Grad0Opsz48'
import IconPendingFill1Wght700Grad0Opsz48 from '../components/PendingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPending = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPendingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPendingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPendingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPendingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPendingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPendingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPendingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPendingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPendingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPendingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPendingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPendingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPendingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPendingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
