import IconSyncFill0Wght100Grad0Opsz48 from '../components/SyncFill0Wght100Grad0Opsz48'
import IconSyncFill0Wght200Grad0Opsz48 from '../components/SyncFill0Wght200Grad0Opsz48'
import IconSyncFill0Wght300Grad0Opsz48 from '../components/SyncFill0Wght300Grad0Opsz48'
import IconSyncFill0Wght400Grad0Opsz48 from '../components/SyncFill0Wght400Grad0Opsz48'
import IconSyncFill0Wght500Grad0Opsz48 from '../components/SyncFill0Wght500Grad0Opsz48'
import IconSyncFill0Wght600Grad0Opsz48 from '../components/SyncFill0Wght600Grad0Opsz48'
import IconSyncFill0Wght700Grad0Opsz48 from '../components/SyncFill0Wght700Grad0Opsz48'
import IconSyncFill1Wght100Grad0Opsz48 from '../components/SyncFill1Wght100Grad0Opsz48'
import IconSyncFill1Wght200Grad0Opsz48 from '../components/SyncFill1Wght200Grad0Opsz48'
import IconSyncFill1Wght300Grad0Opsz48 from '../components/SyncFill1Wght300Grad0Opsz48'
import IconSyncFill1Wght400Grad0Opsz48 from '../components/SyncFill1Wght400Grad0Opsz48'
import IconSyncFill1Wght500Grad0Opsz48 from '../components/SyncFill1Wght500Grad0Opsz48'
import IconSyncFill1Wght600Grad0Opsz48 from '../components/SyncFill1Wght600Grad0Opsz48'
import IconSyncFill1Wght700Grad0Opsz48 from '../components/SyncFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSync = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSyncFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSyncFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSyncFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSyncFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSyncFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSyncFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSyncFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSyncFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSyncFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSyncFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSyncFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSyncFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSyncFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSyncFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
