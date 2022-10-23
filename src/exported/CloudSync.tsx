import IconCloudSyncFill0Wght100Grad0Opsz48 from '../components/CloudSyncFill0Wght100Grad0Opsz48'
import IconCloudSyncFill0Wght200Grad0Opsz48 from '../components/CloudSyncFill0Wght200Grad0Opsz48'
import IconCloudSyncFill0Wght300Grad0Opsz48 from '../components/CloudSyncFill0Wght300Grad0Opsz48'
import IconCloudSyncFill0Wght400Grad0Opsz48 from '../components/CloudSyncFill0Wght400Grad0Opsz48'
import IconCloudSyncFill0Wght500Grad0Opsz48 from '../components/CloudSyncFill0Wght500Grad0Opsz48'
import IconCloudSyncFill0Wght600Grad0Opsz48 from '../components/CloudSyncFill0Wght600Grad0Opsz48'
import IconCloudSyncFill0Wght700Grad0Opsz48 from '../components/CloudSyncFill0Wght700Grad0Opsz48'
import IconCloudSyncFill1Wght100Grad0Opsz48 from '../components/CloudSyncFill1Wght100Grad0Opsz48'
import IconCloudSyncFill1Wght200Grad0Opsz48 from '../components/CloudSyncFill1Wght200Grad0Opsz48'
import IconCloudSyncFill1Wght300Grad0Opsz48 from '../components/CloudSyncFill1Wght300Grad0Opsz48'
import IconCloudSyncFill1Wght400Grad0Opsz48 from '../components/CloudSyncFill1Wght400Grad0Opsz48'
import IconCloudSyncFill1Wght500Grad0Opsz48 from '../components/CloudSyncFill1Wght500Grad0Opsz48'
import IconCloudSyncFill1Wght600Grad0Opsz48 from '../components/CloudSyncFill1Wght600Grad0Opsz48'
import IconCloudSyncFill1Wght700Grad0Opsz48 from '../components/CloudSyncFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudSync = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudSyncFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudSyncFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudSyncFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudSyncFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudSyncFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudSyncFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudSyncFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudSyncFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudSyncFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudSyncFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudSyncFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudSyncFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudSyncFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudSyncFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
