import IconPendingActionsFill0Wght100Grad0Opsz48 from '../components/PendingActionsFill0Wght100Grad0Opsz48'
import IconPendingActionsFill0Wght200Grad0Opsz48 from '../components/PendingActionsFill0Wght200Grad0Opsz48'
import IconPendingActionsFill0Wght300Grad0Opsz48 from '../components/PendingActionsFill0Wght300Grad0Opsz48'
import IconPendingActionsFill0Wght400Grad0Opsz48 from '../components/PendingActionsFill0Wght400Grad0Opsz48'
import IconPendingActionsFill0Wght500Grad0Opsz48 from '../components/PendingActionsFill0Wght500Grad0Opsz48'
import IconPendingActionsFill0Wght600Grad0Opsz48 from '../components/PendingActionsFill0Wght600Grad0Opsz48'
import IconPendingActionsFill0Wght700Grad0Opsz48 from '../components/PendingActionsFill0Wght700Grad0Opsz48'
import IconPendingActionsFill1Wght100Grad0Opsz48 from '../components/PendingActionsFill1Wght100Grad0Opsz48'
import IconPendingActionsFill1Wght200Grad0Opsz48 from '../components/PendingActionsFill1Wght200Grad0Opsz48'
import IconPendingActionsFill1Wght300Grad0Opsz48 from '../components/PendingActionsFill1Wght300Grad0Opsz48'
import IconPendingActionsFill1Wght400Grad0Opsz48 from '../components/PendingActionsFill1Wght400Grad0Opsz48'
import IconPendingActionsFill1Wght500Grad0Opsz48 from '../components/PendingActionsFill1Wght500Grad0Opsz48'
import IconPendingActionsFill1Wght600Grad0Opsz48 from '../components/PendingActionsFill1Wght600Grad0Opsz48'
import IconPendingActionsFill1Wght700Grad0Opsz48 from '../components/PendingActionsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPendingActions = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPendingActionsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPendingActionsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPendingActionsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPendingActionsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPendingActionsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPendingActionsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPendingActionsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPendingActionsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPendingActionsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPendingActionsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPendingActionsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPendingActionsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPendingActionsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPendingActionsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
