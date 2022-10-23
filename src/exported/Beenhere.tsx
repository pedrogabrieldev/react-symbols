import IconBeenhereFill0Wght100Grad0Opsz48 from '../components/BeenhereFill0Wght100Grad0Opsz48'
import IconBeenhereFill0Wght200Grad0Opsz48 from '../components/BeenhereFill0Wght200Grad0Opsz48'
import IconBeenhereFill0Wght300Grad0Opsz48 from '../components/BeenhereFill0Wght300Grad0Opsz48'
import IconBeenhereFill0Wght400Grad0Opsz48 from '../components/BeenhereFill0Wght400Grad0Opsz48'
import IconBeenhereFill0Wght500Grad0Opsz48 from '../components/BeenhereFill0Wght500Grad0Opsz48'
import IconBeenhereFill0Wght600Grad0Opsz48 from '../components/BeenhereFill0Wght600Grad0Opsz48'
import IconBeenhereFill0Wght700Grad0Opsz48 from '../components/BeenhereFill0Wght700Grad0Opsz48'
import IconBeenhereFill1Wght100Grad0Opsz48 from '../components/BeenhereFill1Wght100Grad0Opsz48'
import IconBeenhereFill1Wght200Grad0Opsz48 from '../components/BeenhereFill1Wght200Grad0Opsz48'
import IconBeenhereFill1Wght300Grad0Opsz48 from '../components/BeenhereFill1Wght300Grad0Opsz48'
import IconBeenhereFill1Wght400Grad0Opsz48 from '../components/BeenhereFill1Wght400Grad0Opsz48'
import IconBeenhereFill1Wght500Grad0Opsz48 from '../components/BeenhereFill1Wght500Grad0Opsz48'
import IconBeenhereFill1Wght600Grad0Opsz48 from '../components/BeenhereFill1Wght600Grad0Opsz48'
import IconBeenhereFill1Wght700Grad0Opsz48 from '../components/BeenhereFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBeenhere = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBeenhereFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBeenhereFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBeenhereFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBeenhereFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBeenhereFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBeenhereFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBeenhereFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBeenhereFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBeenhereFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBeenhereFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBeenhereFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBeenhereFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBeenhereFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBeenhereFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
