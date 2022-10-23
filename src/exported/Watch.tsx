import IconWatchFill0Wght100Grad0Opsz48 from '../components/WatchFill0Wght100Grad0Opsz48'
import IconWatchFill0Wght200Grad0Opsz48 from '../components/WatchFill0Wght200Grad0Opsz48'
import IconWatchFill0Wght300Grad0Opsz48 from '../components/WatchFill0Wght300Grad0Opsz48'
import IconWatchFill0Wght400Grad0Opsz48 from '../components/WatchFill0Wght400Grad0Opsz48'
import IconWatchFill0Wght500Grad0Opsz48 from '../components/WatchFill0Wght500Grad0Opsz48'
import IconWatchFill0Wght600Grad0Opsz48 from '../components/WatchFill0Wght600Grad0Opsz48'
import IconWatchFill0Wght700Grad0Opsz48 from '../components/WatchFill0Wght700Grad0Opsz48'
import IconWatchFill1Wght100Grad0Opsz48 from '../components/WatchFill1Wght100Grad0Opsz48'
import IconWatchFill1Wght200Grad0Opsz48 from '../components/WatchFill1Wght200Grad0Opsz48'
import IconWatchFill1Wght300Grad0Opsz48 from '../components/WatchFill1Wght300Grad0Opsz48'
import IconWatchFill1Wght400Grad0Opsz48 from '../components/WatchFill1Wght400Grad0Opsz48'
import IconWatchFill1Wght500Grad0Opsz48 from '../components/WatchFill1Wght500Grad0Opsz48'
import IconWatchFill1Wght600Grad0Opsz48 from '../components/WatchFill1Wght600Grad0Opsz48'
import IconWatchFill1Wght700Grad0Opsz48 from '../components/WatchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWatch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWatchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWatchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWatchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWatchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWatchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWatchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWatchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWatchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWatchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWatchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWatchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWatchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWatchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWatchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
