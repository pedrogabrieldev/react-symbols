import IconOrthopedicsFill0Wght100Grad0Opsz48 from '../components/OrthopedicsFill0Wght100Grad0Opsz48'
import IconOrthopedicsFill0Wght200Grad0Opsz48 from '../components/OrthopedicsFill0Wght200Grad0Opsz48'
import IconOrthopedicsFill0Wght300Grad0Opsz48 from '../components/OrthopedicsFill0Wght300Grad0Opsz48'
import IconOrthopedicsFill0Wght400Grad0Opsz48 from '../components/OrthopedicsFill0Wght400Grad0Opsz48'
import IconOrthopedicsFill0Wght500Grad0Opsz48 from '../components/OrthopedicsFill0Wght500Grad0Opsz48'
import IconOrthopedicsFill0Wght600Grad0Opsz48 from '../components/OrthopedicsFill0Wght600Grad0Opsz48'
import IconOrthopedicsFill0Wght700Grad0Opsz48 from '../components/OrthopedicsFill0Wght700Grad0Opsz48'
import IconOrthopedicsFill1Wght100Grad0Opsz48 from '../components/OrthopedicsFill1Wght100Grad0Opsz48'
import IconOrthopedicsFill1Wght200Grad0Opsz48 from '../components/OrthopedicsFill1Wght200Grad0Opsz48'
import IconOrthopedicsFill1Wght300Grad0Opsz48 from '../components/OrthopedicsFill1Wght300Grad0Opsz48'
import IconOrthopedicsFill1Wght400Grad0Opsz48 from '../components/OrthopedicsFill1Wght400Grad0Opsz48'
import IconOrthopedicsFill1Wght500Grad0Opsz48 from '../components/OrthopedicsFill1Wght500Grad0Opsz48'
import IconOrthopedicsFill1Wght600Grad0Opsz48 from '../components/OrthopedicsFill1Wght600Grad0Opsz48'
import IconOrthopedicsFill1Wght700Grad0Opsz48 from '../components/OrthopedicsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOrthopedics = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOrthopedicsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOrthopedicsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOrthopedicsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOrthopedicsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOrthopedicsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOrthopedicsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOrthopedicsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOrthopedicsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOrthopedicsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOrthopedicsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOrthopedicsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOrthopedicsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOrthopedicsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOrthopedicsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
