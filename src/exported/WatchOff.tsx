import IconWatchOffFill0Wght100Grad0Opsz48 from '../components/WatchOffFill0Wght100Grad0Opsz48'
import IconWatchOffFill0Wght200Grad0Opsz48 from '../components/WatchOffFill0Wght200Grad0Opsz48'
import IconWatchOffFill0Wght300Grad0Opsz48 from '../components/WatchOffFill0Wght300Grad0Opsz48'
import IconWatchOffFill0Wght400Grad0Opsz48 from '../components/WatchOffFill0Wght400Grad0Opsz48'
import IconWatchOffFill0Wght500Grad0Opsz48 from '../components/WatchOffFill0Wght500Grad0Opsz48'
import IconWatchOffFill0Wght600Grad0Opsz48 from '../components/WatchOffFill0Wght600Grad0Opsz48'
import IconWatchOffFill0Wght700Grad0Opsz48 from '../components/WatchOffFill0Wght700Grad0Opsz48'
import IconWatchOffFill1Wght100Grad0Opsz48 from '../components/WatchOffFill1Wght100Grad0Opsz48'
import IconWatchOffFill1Wght200Grad0Opsz48 from '../components/WatchOffFill1Wght200Grad0Opsz48'
import IconWatchOffFill1Wght300Grad0Opsz48 from '../components/WatchOffFill1Wght300Grad0Opsz48'
import IconWatchOffFill1Wght400Grad0Opsz48 from '../components/WatchOffFill1Wght400Grad0Opsz48'
import IconWatchOffFill1Wght500Grad0Opsz48 from '../components/WatchOffFill1Wght500Grad0Opsz48'
import IconWatchOffFill1Wght600Grad0Opsz48 from '../components/WatchOffFill1Wght600Grad0Opsz48'
import IconWatchOffFill1Wght700Grad0Opsz48 from '../components/WatchOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWatchOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWatchOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWatchOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWatchOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWatchOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWatchOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWatchOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWatchOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWatchOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWatchOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWatchOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWatchOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWatchOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWatchOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWatchOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
