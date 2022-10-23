import IconLandscapeFill0Wght100Grad0Opsz48 from '../components/LandscapeFill0Wght100Grad0Opsz48'
import IconLandscapeFill0Wght200Grad0Opsz48 from '../components/LandscapeFill0Wght200Grad0Opsz48'
import IconLandscapeFill0Wght300Grad0Opsz48 from '../components/LandscapeFill0Wght300Grad0Opsz48'
import IconLandscapeFill0Wght400Grad0Opsz48 from '../components/LandscapeFill0Wght400Grad0Opsz48'
import IconLandscapeFill0Wght500Grad0Opsz48 from '../components/LandscapeFill0Wght500Grad0Opsz48'
import IconLandscapeFill0Wght600Grad0Opsz48 from '../components/LandscapeFill0Wght600Grad0Opsz48'
import IconLandscapeFill0Wght700Grad0Opsz48 from '../components/LandscapeFill0Wght700Grad0Opsz48'
import IconLandscapeFill1Wght100Grad0Opsz48 from '../components/LandscapeFill1Wght100Grad0Opsz48'
import IconLandscapeFill1Wght200Grad0Opsz48 from '../components/LandscapeFill1Wght200Grad0Opsz48'
import IconLandscapeFill1Wght300Grad0Opsz48 from '../components/LandscapeFill1Wght300Grad0Opsz48'
import IconLandscapeFill1Wght400Grad0Opsz48 from '../components/LandscapeFill1Wght400Grad0Opsz48'
import IconLandscapeFill1Wght500Grad0Opsz48 from '../components/LandscapeFill1Wght500Grad0Opsz48'
import IconLandscapeFill1Wght600Grad0Opsz48 from '../components/LandscapeFill1Wght600Grad0Opsz48'
import IconLandscapeFill1Wght700Grad0Opsz48 from '../components/LandscapeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLandscape = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLandscapeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLandscapeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLandscapeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLandscapeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLandscapeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLandscapeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLandscapeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLandscapeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLandscapeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLandscapeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLandscapeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLandscapeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLandscapeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLandscapeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
