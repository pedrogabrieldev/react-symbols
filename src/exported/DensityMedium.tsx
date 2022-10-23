import IconDensityMediumFill0Wght100Grad0Opsz48 from '../components/DensityMediumFill0Wght100Grad0Opsz48'
import IconDensityMediumFill0Wght200Grad0Opsz48 from '../components/DensityMediumFill0Wght200Grad0Opsz48'
import IconDensityMediumFill0Wght300Grad0Opsz48 from '../components/DensityMediumFill0Wght300Grad0Opsz48'
import IconDensityMediumFill0Wght400Grad0Opsz48 from '../components/DensityMediumFill0Wght400Grad0Opsz48'
import IconDensityMediumFill0Wght500Grad0Opsz48 from '../components/DensityMediumFill0Wght500Grad0Opsz48'
import IconDensityMediumFill0Wght600Grad0Opsz48 from '../components/DensityMediumFill0Wght600Grad0Opsz48'
import IconDensityMediumFill0Wght700Grad0Opsz48 from '../components/DensityMediumFill0Wght700Grad0Opsz48'
import IconDensityMediumFill1Wght100Grad0Opsz48 from '../components/DensityMediumFill1Wght100Grad0Opsz48'
import IconDensityMediumFill1Wght200Grad0Opsz48 from '../components/DensityMediumFill1Wght200Grad0Opsz48'
import IconDensityMediumFill1Wght300Grad0Opsz48 from '../components/DensityMediumFill1Wght300Grad0Opsz48'
import IconDensityMediumFill1Wght400Grad0Opsz48 from '../components/DensityMediumFill1Wght400Grad0Opsz48'
import IconDensityMediumFill1Wght500Grad0Opsz48 from '../components/DensityMediumFill1Wght500Grad0Opsz48'
import IconDensityMediumFill1Wght600Grad0Opsz48 from '../components/DensityMediumFill1Wght600Grad0Opsz48'
import IconDensityMediumFill1Wght700Grad0Opsz48 from '../components/DensityMediumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDensityMedium = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDensityMediumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDensityMediumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDensityMediumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDensityMediumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDensityMediumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDensityMediumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDensityMediumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDensityMediumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDensityMediumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDensityMediumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDensityMediumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDensityMediumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDensityMediumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDensityMediumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
