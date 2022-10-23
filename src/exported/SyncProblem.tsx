import IconSyncProblemFill0Wght100Grad0Opsz48 from '../components/SyncProblemFill0Wght100Grad0Opsz48'
import IconSyncProblemFill0Wght200Grad0Opsz48 from '../components/SyncProblemFill0Wght200Grad0Opsz48'
import IconSyncProblemFill0Wght300Grad0Opsz48 from '../components/SyncProblemFill0Wght300Grad0Opsz48'
import IconSyncProblemFill0Wght400Grad0Opsz48 from '../components/SyncProblemFill0Wght400Grad0Opsz48'
import IconSyncProblemFill0Wght500Grad0Opsz48 from '../components/SyncProblemFill0Wght500Grad0Opsz48'
import IconSyncProblemFill0Wght600Grad0Opsz48 from '../components/SyncProblemFill0Wght600Grad0Opsz48'
import IconSyncProblemFill0Wght700Grad0Opsz48 from '../components/SyncProblemFill0Wght700Grad0Opsz48'
import IconSyncProblemFill1Wght100Grad0Opsz48 from '../components/SyncProblemFill1Wght100Grad0Opsz48'
import IconSyncProblemFill1Wght200Grad0Opsz48 from '../components/SyncProblemFill1Wght200Grad0Opsz48'
import IconSyncProblemFill1Wght300Grad0Opsz48 from '../components/SyncProblemFill1Wght300Grad0Opsz48'
import IconSyncProblemFill1Wght400Grad0Opsz48 from '../components/SyncProblemFill1Wght400Grad0Opsz48'
import IconSyncProblemFill1Wght500Grad0Opsz48 from '../components/SyncProblemFill1Wght500Grad0Opsz48'
import IconSyncProblemFill1Wght600Grad0Opsz48 from '../components/SyncProblemFill1Wght600Grad0Opsz48'
import IconSyncProblemFill1Wght700Grad0Opsz48 from '../components/SyncProblemFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSyncProblem = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSyncProblemFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSyncProblemFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSyncProblemFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSyncProblemFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSyncProblemFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSyncProblemFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSyncProblemFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSyncProblemFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSyncProblemFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSyncProblemFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSyncProblemFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSyncProblemFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSyncProblemFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSyncProblemFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
