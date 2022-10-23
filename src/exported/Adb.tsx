import IconAdbFill0Wght100Grad0Opsz48 from '../components/AdbFill0Wght100Grad0Opsz48'
import IconAdbFill0Wght200Grad0Opsz48 from '../components/AdbFill0Wght200Grad0Opsz48'
import IconAdbFill0Wght300Grad0Opsz48 from '../components/AdbFill0Wght300Grad0Opsz48'
import IconAdbFill0Wght400Grad0Opsz48 from '../components/AdbFill0Wght400Grad0Opsz48'
import IconAdbFill0Wght500Grad0Opsz48 from '../components/AdbFill0Wght500Grad0Opsz48'
import IconAdbFill0Wght600Grad0Opsz48 from '../components/AdbFill0Wght600Grad0Opsz48'
import IconAdbFill0Wght700Grad0Opsz48 from '../components/AdbFill0Wght700Grad0Opsz48'
import IconAdbFill1Wght100Grad0Opsz48 from '../components/AdbFill1Wght100Grad0Opsz48'
import IconAdbFill1Wght200Grad0Opsz48 from '../components/AdbFill1Wght200Grad0Opsz48'
import IconAdbFill1Wght300Grad0Opsz48 from '../components/AdbFill1Wght300Grad0Opsz48'
import IconAdbFill1Wght400Grad0Opsz48 from '../components/AdbFill1Wght400Grad0Opsz48'
import IconAdbFill1Wght500Grad0Opsz48 from '../components/AdbFill1Wght500Grad0Opsz48'
import IconAdbFill1Wght600Grad0Opsz48 from '../components/AdbFill1Wght600Grad0Opsz48'
import IconAdbFill1Wght700Grad0Opsz48 from '../components/AdbFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAdb = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAdbFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAdbFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAdbFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAdbFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAdbFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAdbFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAdbFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAdbFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAdbFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAdbFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAdbFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAdbFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAdbFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAdbFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
