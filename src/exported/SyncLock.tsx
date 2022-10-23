import IconSyncLockFill0Wght100Grad0Opsz48 from '../components/SyncLockFill0Wght100Grad0Opsz48'
import IconSyncLockFill0Wght200Grad0Opsz48 from '../components/SyncLockFill0Wght200Grad0Opsz48'
import IconSyncLockFill0Wght300Grad0Opsz48 from '../components/SyncLockFill0Wght300Grad0Opsz48'
import IconSyncLockFill0Wght400Grad0Opsz48 from '../components/SyncLockFill0Wght400Grad0Opsz48'
import IconSyncLockFill0Wght500Grad0Opsz48 from '../components/SyncLockFill0Wght500Grad0Opsz48'
import IconSyncLockFill0Wght600Grad0Opsz48 from '../components/SyncLockFill0Wght600Grad0Opsz48'
import IconSyncLockFill0Wght700Grad0Opsz48 from '../components/SyncLockFill0Wght700Grad0Opsz48'
import IconSyncLockFill1Wght100Grad0Opsz48 from '../components/SyncLockFill1Wght100Grad0Opsz48'
import IconSyncLockFill1Wght200Grad0Opsz48 from '../components/SyncLockFill1Wght200Grad0Opsz48'
import IconSyncLockFill1Wght300Grad0Opsz48 from '../components/SyncLockFill1Wght300Grad0Opsz48'
import IconSyncLockFill1Wght400Grad0Opsz48 from '../components/SyncLockFill1Wght400Grad0Opsz48'
import IconSyncLockFill1Wght500Grad0Opsz48 from '../components/SyncLockFill1Wght500Grad0Opsz48'
import IconSyncLockFill1Wght600Grad0Opsz48 from '../components/SyncLockFill1Wght600Grad0Opsz48'
import IconSyncLockFill1Wght700Grad0Opsz48 from '../components/SyncLockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSyncLock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSyncLockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSyncLockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSyncLockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSyncLockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSyncLockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSyncLockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSyncLockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSyncLockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSyncLockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSyncLockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSyncLockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSyncLockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSyncLockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSyncLockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
