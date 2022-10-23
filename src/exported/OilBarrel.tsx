import IconOilBarrelFill0Wght100Grad0Opsz48 from '../components/OilBarrelFill0Wght100Grad0Opsz48'
import IconOilBarrelFill0Wght200Grad0Opsz48 from '../components/OilBarrelFill0Wght200Grad0Opsz48'
import IconOilBarrelFill0Wght300Grad0Opsz48 from '../components/OilBarrelFill0Wght300Grad0Opsz48'
import IconOilBarrelFill0Wght400Grad0Opsz48 from '../components/OilBarrelFill0Wght400Grad0Opsz48'
import IconOilBarrelFill0Wght500Grad0Opsz48 from '../components/OilBarrelFill0Wght500Grad0Opsz48'
import IconOilBarrelFill0Wght600Grad0Opsz48 from '../components/OilBarrelFill0Wght600Grad0Opsz48'
import IconOilBarrelFill0Wght700Grad0Opsz48 from '../components/OilBarrelFill0Wght700Grad0Opsz48'
import IconOilBarrelFill1Wght100Grad0Opsz48 from '../components/OilBarrelFill1Wght100Grad0Opsz48'
import IconOilBarrelFill1Wght200Grad0Opsz48 from '../components/OilBarrelFill1Wght200Grad0Opsz48'
import IconOilBarrelFill1Wght300Grad0Opsz48 from '../components/OilBarrelFill1Wght300Grad0Opsz48'
import IconOilBarrelFill1Wght400Grad0Opsz48 from '../components/OilBarrelFill1Wght400Grad0Opsz48'
import IconOilBarrelFill1Wght500Grad0Opsz48 from '../components/OilBarrelFill1Wght500Grad0Opsz48'
import IconOilBarrelFill1Wght600Grad0Opsz48 from '../components/OilBarrelFill1Wght600Grad0Opsz48'
import IconOilBarrelFill1Wght700Grad0Opsz48 from '../components/OilBarrelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOilBarrel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOilBarrelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOilBarrelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOilBarrelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOilBarrelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOilBarrelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOilBarrelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOilBarrelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOilBarrelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOilBarrelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOilBarrelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOilBarrelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOilBarrelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOilBarrelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOilBarrelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
