import IconLandslideFill0Wght100Grad0Opsz48 from '../components/LandslideFill0Wght100Grad0Opsz48'
import IconLandslideFill0Wght200Grad0Opsz48 from '../components/LandslideFill0Wght200Grad0Opsz48'
import IconLandslideFill0Wght300Grad0Opsz48 from '../components/LandslideFill0Wght300Grad0Opsz48'
import IconLandslideFill0Wght400Grad0Opsz48 from '../components/LandslideFill0Wght400Grad0Opsz48'
import IconLandslideFill0Wght500Grad0Opsz48 from '../components/LandslideFill0Wght500Grad0Opsz48'
import IconLandslideFill0Wght600Grad0Opsz48 from '../components/LandslideFill0Wght600Grad0Opsz48'
import IconLandslideFill0Wght700Grad0Opsz48 from '../components/LandslideFill0Wght700Grad0Opsz48'
import IconLandslideFill1Wght100Grad0Opsz48 from '../components/LandslideFill1Wght100Grad0Opsz48'
import IconLandslideFill1Wght200Grad0Opsz48 from '../components/LandslideFill1Wght200Grad0Opsz48'
import IconLandslideFill1Wght300Grad0Opsz48 from '../components/LandslideFill1Wght300Grad0Opsz48'
import IconLandslideFill1Wght400Grad0Opsz48 from '../components/LandslideFill1Wght400Grad0Opsz48'
import IconLandslideFill1Wght500Grad0Opsz48 from '../components/LandslideFill1Wght500Grad0Opsz48'
import IconLandslideFill1Wght600Grad0Opsz48 from '../components/LandslideFill1Wght600Grad0Opsz48'
import IconLandslideFill1Wght700Grad0Opsz48 from '../components/LandslideFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLandslide = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLandslideFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLandslideFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLandslideFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLandslideFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLandslideFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLandslideFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLandslideFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLandslideFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLandslideFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLandslideFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLandslideFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLandslideFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLandslideFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLandslideFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
