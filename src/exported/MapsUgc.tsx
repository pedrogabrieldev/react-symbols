import IconMapsUgcFill0Wght100Grad0Opsz48 from '../components/MapsUgcFill0Wght100Grad0Opsz48'
import IconMapsUgcFill0Wght200Grad0Opsz48 from '../components/MapsUgcFill0Wght200Grad0Opsz48'
import IconMapsUgcFill0Wght300Grad0Opsz48 from '../components/MapsUgcFill0Wght300Grad0Opsz48'
import IconMapsUgcFill0Wght400Grad0Opsz48 from '../components/MapsUgcFill0Wght400Grad0Opsz48'
import IconMapsUgcFill0Wght500Grad0Opsz48 from '../components/MapsUgcFill0Wght500Grad0Opsz48'
import IconMapsUgcFill0Wght600Grad0Opsz48 from '../components/MapsUgcFill0Wght600Grad0Opsz48'
import IconMapsUgcFill0Wght700Grad0Opsz48 from '../components/MapsUgcFill0Wght700Grad0Opsz48'
import IconMapsUgcFill1Wght100Grad0Opsz48 from '../components/MapsUgcFill1Wght100Grad0Opsz48'
import IconMapsUgcFill1Wght200Grad0Opsz48 from '../components/MapsUgcFill1Wght200Grad0Opsz48'
import IconMapsUgcFill1Wght300Grad0Opsz48 from '../components/MapsUgcFill1Wght300Grad0Opsz48'
import IconMapsUgcFill1Wght400Grad0Opsz48 from '../components/MapsUgcFill1Wght400Grad0Opsz48'
import IconMapsUgcFill1Wght500Grad0Opsz48 from '../components/MapsUgcFill1Wght500Grad0Opsz48'
import IconMapsUgcFill1Wght600Grad0Opsz48 from '../components/MapsUgcFill1Wght600Grad0Opsz48'
import IconMapsUgcFill1Wght700Grad0Opsz48 from '../components/MapsUgcFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMapsUgc = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMapsUgcFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMapsUgcFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMapsUgcFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMapsUgcFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMapsUgcFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMapsUgcFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMapsUgcFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMapsUgcFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMapsUgcFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMapsUgcFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMapsUgcFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMapsUgcFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMapsUgcFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMapsUgcFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
