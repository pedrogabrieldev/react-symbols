import IconWifiFill0Wght100Grad0Opsz48 from '../components/WifiFill0Wght100Grad0Opsz48'
import IconWifiFill0Wght200Grad0Opsz48 from '../components/WifiFill0Wght200Grad0Opsz48'
import IconWifiFill0Wght300Grad0Opsz48 from '../components/WifiFill0Wght300Grad0Opsz48'
import IconWifiFill0Wght400Grad0Opsz48 from '../components/WifiFill0Wght400Grad0Opsz48'
import IconWifiFill0Wght500Grad0Opsz48 from '../components/WifiFill0Wght500Grad0Opsz48'
import IconWifiFill0Wght600Grad0Opsz48 from '../components/WifiFill0Wght600Grad0Opsz48'
import IconWifiFill0Wght700Grad0Opsz48 from '../components/WifiFill0Wght700Grad0Opsz48'
import IconWifiFill1Wght100Grad0Opsz48 from '../components/WifiFill1Wght100Grad0Opsz48'
import IconWifiFill1Wght200Grad0Opsz48 from '../components/WifiFill1Wght200Grad0Opsz48'
import IconWifiFill1Wght300Grad0Opsz48 from '../components/WifiFill1Wght300Grad0Opsz48'
import IconWifiFill1Wght400Grad0Opsz48 from '../components/WifiFill1Wght400Grad0Opsz48'
import IconWifiFill1Wght500Grad0Opsz48 from '../components/WifiFill1Wght500Grad0Opsz48'
import IconWifiFill1Wght600Grad0Opsz48 from '../components/WifiFill1Wght600Grad0Opsz48'
import IconWifiFill1Wght700Grad0Opsz48 from '../components/WifiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
