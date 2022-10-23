import IconEggAltFill0Wght100Grad0Opsz48 from '../components/EggAltFill0Wght100Grad0Opsz48'
import IconEggAltFill0Wght200Grad0Opsz48 from '../components/EggAltFill0Wght200Grad0Opsz48'
import IconEggAltFill0Wght300Grad0Opsz48 from '../components/EggAltFill0Wght300Grad0Opsz48'
import IconEggAltFill0Wght400Grad0Opsz48 from '../components/EggAltFill0Wght400Grad0Opsz48'
import IconEggAltFill0Wght500Grad0Opsz48 from '../components/EggAltFill0Wght500Grad0Opsz48'
import IconEggAltFill0Wght600Grad0Opsz48 from '../components/EggAltFill0Wght600Grad0Opsz48'
import IconEggAltFill0Wght700Grad0Opsz48 from '../components/EggAltFill0Wght700Grad0Opsz48'
import IconEggAltFill1Wght100Grad0Opsz48 from '../components/EggAltFill1Wght100Grad0Opsz48'
import IconEggAltFill1Wght200Grad0Opsz48 from '../components/EggAltFill1Wght200Grad0Opsz48'
import IconEggAltFill1Wght300Grad0Opsz48 from '../components/EggAltFill1Wght300Grad0Opsz48'
import IconEggAltFill1Wght400Grad0Opsz48 from '../components/EggAltFill1Wght400Grad0Opsz48'
import IconEggAltFill1Wght500Grad0Opsz48 from '../components/EggAltFill1Wght500Grad0Opsz48'
import IconEggAltFill1Wght600Grad0Opsz48 from '../components/EggAltFill1Wght600Grad0Opsz48'
import IconEggAltFill1Wght700Grad0Opsz48 from '../components/EggAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEggAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEggAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEggAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEggAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEggAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEggAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEggAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEggAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEggAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEggAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEggAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEggAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEggAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEggAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEggAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
