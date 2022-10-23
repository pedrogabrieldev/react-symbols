import IconAltRouteFill0Wght100Grad0Opsz48 from '../components/AltRouteFill0Wght100Grad0Opsz48'
import IconAltRouteFill0Wght200Grad0Opsz48 from '../components/AltRouteFill0Wght200Grad0Opsz48'
import IconAltRouteFill0Wght300Grad0Opsz48 from '../components/AltRouteFill0Wght300Grad0Opsz48'
import IconAltRouteFill0Wght400Grad0Opsz48 from '../components/AltRouteFill0Wght400Grad0Opsz48'
import IconAltRouteFill0Wght500Grad0Opsz48 from '../components/AltRouteFill0Wght500Grad0Opsz48'
import IconAltRouteFill0Wght600Grad0Opsz48 from '../components/AltRouteFill0Wght600Grad0Opsz48'
import IconAltRouteFill0Wght700Grad0Opsz48 from '../components/AltRouteFill0Wght700Grad0Opsz48'
import IconAltRouteFill1Wght100Grad0Opsz48 from '../components/AltRouteFill1Wght100Grad0Opsz48'
import IconAltRouteFill1Wght200Grad0Opsz48 from '../components/AltRouteFill1Wght200Grad0Opsz48'
import IconAltRouteFill1Wght300Grad0Opsz48 from '../components/AltRouteFill1Wght300Grad0Opsz48'
import IconAltRouteFill1Wght400Grad0Opsz48 from '../components/AltRouteFill1Wght400Grad0Opsz48'
import IconAltRouteFill1Wght500Grad0Opsz48 from '../components/AltRouteFill1Wght500Grad0Opsz48'
import IconAltRouteFill1Wght600Grad0Opsz48 from '../components/AltRouteFill1Wght600Grad0Opsz48'
import IconAltRouteFill1Wght700Grad0Opsz48 from '../components/AltRouteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAltRoute = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAltRouteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAltRouteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAltRouteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAltRouteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAltRouteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAltRouteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAltRouteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAltRouteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAltRouteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAltRouteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAltRouteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAltRouteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAltRouteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAltRouteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
