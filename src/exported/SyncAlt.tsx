import IconSyncAltFill0Wght100Grad0Opsz48 from '../components/SyncAltFill0Wght100Grad0Opsz48'
import IconSyncAltFill0Wght200Grad0Opsz48 from '../components/SyncAltFill0Wght200Grad0Opsz48'
import IconSyncAltFill0Wght300Grad0Opsz48 from '../components/SyncAltFill0Wght300Grad0Opsz48'
import IconSyncAltFill0Wght400Grad0Opsz48 from '../components/SyncAltFill0Wght400Grad0Opsz48'
import IconSyncAltFill0Wght500Grad0Opsz48 from '../components/SyncAltFill0Wght500Grad0Opsz48'
import IconSyncAltFill0Wght600Grad0Opsz48 from '../components/SyncAltFill0Wght600Grad0Opsz48'
import IconSyncAltFill0Wght700Grad0Opsz48 from '../components/SyncAltFill0Wght700Grad0Opsz48'
import IconSyncAltFill1Wght100Grad0Opsz48 from '../components/SyncAltFill1Wght100Grad0Opsz48'
import IconSyncAltFill1Wght200Grad0Opsz48 from '../components/SyncAltFill1Wght200Grad0Opsz48'
import IconSyncAltFill1Wght300Grad0Opsz48 from '../components/SyncAltFill1Wght300Grad0Opsz48'
import IconSyncAltFill1Wght400Grad0Opsz48 from '../components/SyncAltFill1Wght400Grad0Opsz48'
import IconSyncAltFill1Wght500Grad0Opsz48 from '../components/SyncAltFill1Wght500Grad0Opsz48'
import IconSyncAltFill1Wght600Grad0Opsz48 from '../components/SyncAltFill1Wght600Grad0Opsz48'
import IconSyncAltFill1Wght700Grad0Opsz48 from '../components/SyncAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSyncAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSyncAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSyncAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSyncAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSyncAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSyncAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSyncAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSyncAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSyncAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSyncAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSyncAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSyncAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSyncAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSyncAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSyncAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
