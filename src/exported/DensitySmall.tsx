import IconDensitySmallFill0Wght100Grad0Opsz48 from '../components/DensitySmallFill0Wght100Grad0Opsz48'
import IconDensitySmallFill0Wght200Grad0Opsz48 from '../components/DensitySmallFill0Wght200Grad0Opsz48'
import IconDensitySmallFill0Wght300Grad0Opsz48 from '../components/DensitySmallFill0Wght300Grad0Opsz48'
import IconDensitySmallFill0Wght400Grad0Opsz48 from '../components/DensitySmallFill0Wght400Grad0Opsz48'
import IconDensitySmallFill0Wght500Grad0Opsz48 from '../components/DensitySmallFill0Wght500Grad0Opsz48'
import IconDensitySmallFill0Wght600Grad0Opsz48 from '../components/DensitySmallFill0Wght600Grad0Opsz48'
import IconDensitySmallFill0Wght700Grad0Opsz48 from '../components/DensitySmallFill0Wght700Grad0Opsz48'
import IconDensitySmallFill1Wght100Grad0Opsz48 from '../components/DensitySmallFill1Wght100Grad0Opsz48'
import IconDensitySmallFill1Wght200Grad0Opsz48 from '../components/DensitySmallFill1Wght200Grad0Opsz48'
import IconDensitySmallFill1Wght300Grad0Opsz48 from '../components/DensitySmallFill1Wght300Grad0Opsz48'
import IconDensitySmallFill1Wght400Grad0Opsz48 from '../components/DensitySmallFill1Wght400Grad0Opsz48'
import IconDensitySmallFill1Wght500Grad0Opsz48 from '../components/DensitySmallFill1Wght500Grad0Opsz48'
import IconDensitySmallFill1Wght600Grad0Opsz48 from '../components/DensitySmallFill1Wght600Grad0Opsz48'
import IconDensitySmallFill1Wght700Grad0Opsz48 from '../components/DensitySmallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDensitySmall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDensitySmallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDensitySmallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDensitySmallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDensitySmallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDensitySmallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDensitySmallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDensitySmallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDensitySmallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDensitySmallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDensitySmallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDensitySmallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDensitySmallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDensitySmallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDensitySmallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
