import IconWifiFindFill0Wght100Grad0Opsz48 from '../components/WifiFindFill0Wght100Grad0Opsz48'
import IconWifiFindFill0Wght200Grad0Opsz48 from '../components/WifiFindFill0Wght200Grad0Opsz48'
import IconWifiFindFill0Wght300Grad0Opsz48 from '../components/WifiFindFill0Wght300Grad0Opsz48'
import IconWifiFindFill0Wght400Grad0Opsz48 from '../components/WifiFindFill0Wght400Grad0Opsz48'
import IconWifiFindFill0Wght500Grad0Opsz48 from '../components/WifiFindFill0Wght500Grad0Opsz48'
import IconWifiFindFill0Wght600Grad0Opsz48 from '../components/WifiFindFill0Wght600Grad0Opsz48'
import IconWifiFindFill0Wght700Grad0Opsz48 from '../components/WifiFindFill0Wght700Grad0Opsz48'
import IconWifiFindFill1Wght100Grad0Opsz48 from '../components/WifiFindFill1Wght100Grad0Opsz48'
import IconWifiFindFill1Wght200Grad0Opsz48 from '../components/WifiFindFill1Wght200Grad0Opsz48'
import IconWifiFindFill1Wght300Grad0Opsz48 from '../components/WifiFindFill1Wght300Grad0Opsz48'
import IconWifiFindFill1Wght400Grad0Opsz48 from '../components/WifiFindFill1Wght400Grad0Opsz48'
import IconWifiFindFill1Wght500Grad0Opsz48 from '../components/WifiFindFill1Wght500Grad0Opsz48'
import IconWifiFindFill1Wght600Grad0Opsz48 from '../components/WifiFindFill1Wght600Grad0Opsz48'
import IconWifiFindFill1Wght700Grad0Opsz48 from '../components/WifiFindFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiFind = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiFindFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiFindFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiFindFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiFindFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiFindFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiFindFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiFindFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiFindFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiFindFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiFindFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiFindFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiFindFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiFindFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiFindFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
