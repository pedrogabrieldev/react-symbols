import IconDensityLargeFill0Wght100Grad0Opsz48 from '../components/DensityLargeFill0Wght100Grad0Opsz48'
import IconDensityLargeFill0Wght200Grad0Opsz48 from '../components/DensityLargeFill0Wght200Grad0Opsz48'
import IconDensityLargeFill0Wght300Grad0Opsz48 from '../components/DensityLargeFill0Wght300Grad0Opsz48'
import IconDensityLargeFill0Wght400Grad0Opsz48 from '../components/DensityLargeFill0Wght400Grad0Opsz48'
import IconDensityLargeFill0Wght500Grad0Opsz48 from '../components/DensityLargeFill0Wght500Grad0Opsz48'
import IconDensityLargeFill0Wght600Grad0Opsz48 from '../components/DensityLargeFill0Wght600Grad0Opsz48'
import IconDensityLargeFill0Wght700Grad0Opsz48 from '../components/DensityLargeFill0Wght700Grad0Opsz48'
import IconDensityLargeFill1Wght100Grad0Opsz48 from '../components/DensityLargeFill1Wght100Grad0Opsz48'
import IconDensityLargeFill1Wght200Grad0Opsz48 from '../components/DensityLargeFill1Wght200Grad0Opsz48'
import IconDensityLargeFill1Wght300Grad0Opsz48 from '../components/DensityLargeFill1Wght300Grad0Opsz48'
import IconDensityLargeFill1Wght400Grad0Opsz48 from '../components/DensityLargeFill1Wght400Grad0Opsz48'
import IconDensityLargeFill1Wght500Grad0Opsz48 from '../components/DensityLargeFill1Wght500Grad0Opsz48'
import IconDensityLargeFill1Wght600Grad0Opsz48 from '../components/DensityLargeFill1Wght600Grad0Opsz48'
import IconDensityLargeFill1Wght700Grad0Opsz48 from '../components/DensityLargeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDensityLarge = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDensityLargeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDensityLargeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDensityLargeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDensityLargeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDensityLargeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDensityLargeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDensityLargeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDensityLargeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDensityLargeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDensityLargeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDensityLargeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDensityLargeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDensityLargeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDensityLargeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
