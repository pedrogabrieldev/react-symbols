import IconSyncDisabledFill0Wght100Grad0Opsz48 from '../components/SyncDisabledFill0Wght100Grad0Opsz48'
import IconSyncDisabledFill0Wght200Grad0Opsz48 from '../components/SyncDisabledFill0Wght200Grad0Opsz48'
import IconSyncDisabledFill0Wght300Grad0Opsz48 from '../components/SyncDisabledFill0Wght300Grad0Opsz48'
import IconSyncDisabledFill0Wght400Grad0Opsz48 from '../components/SyncDisabledFill0Wght400Grad0Opsz48'
import IconSyncDisabledFill0Wght500Grad0Opsz48 from '../components/SyncDisabledFill0Wght500Grad0Opsz48'
import IconSyncDisabledFill0Wght600Grad0Opsz48 from '../components/SyncDisabledFill0Wght600Grad0Opsz48'
import IconSyncDisabledFill0Wght700Grad0Opsz48 from '../components/SyncDisabledFill0Wght700Grad0Opsz48'
import IconSyncDisabledFill1Wght100Grad0Opsz48 from '../components/SyncDisabledFill1Wght100Grad0Opsz48'
import IconSyncDisabledFill1Wght200Grad0Opsz48 from '../components/SyncDisabledFill1Wght200Grad0Opsz48'
import IconSyncDisabledFill1Wght300Grad0Opsz48 from '../components/SyncDisabledFill1Wght300Grad0Opsz48'
import IconSyncDisabledFill1Wght400Grad0Opsz48 from '../components/SyncDisabledFill1Wght400Grad0Opsz48'
import IconSyncDisabledFill1Wght500Grad0Opsz48 from '../components/SyncDisabledFill1Wght500Grad0Opsz48'
import IconSyncDisabledFill1Wght600Grad0Opsz48 from '../components/SyncDisabledFill1Wght600Grad0Opsz48'
import IconSyncDisabledFill1Wght700Grad0Opsz48 from '../components/SyncDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSyncDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSyncDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSyncDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSyncDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSyncDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSyncDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSyncDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSyncDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSyncDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSyncDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSyncDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSyncDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSyncDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSyncDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSyncDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
