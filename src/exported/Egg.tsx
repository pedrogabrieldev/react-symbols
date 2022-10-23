import IconEggFill0Wght100Grad0Opsz48 from '../components/EggFill0Wght100Grad0Opsz48'
import IconEggFill0Wght200Grad0Opsz48 from '../components/EggFill0Wght200Grad0Opsz48'
import IconEggFill0Wght300Grad0Opsz48 from '../components/EggFill0Wght300Grad0Opsz48'
import IconEggFill0Wght400Grad0Opsz48 from '../components/EggFill0Wght400Grad0Opsz48'
import IconEggFill0Wght500Grad0Opsz48 from '../components/EggFill0Wght500Grad0Opsz48'
import IconEggFill0Wght600Grad0Opsz48 from '../components/EggFill0Wght600Grad0Opsz48'
import IconEggFill0Wght700Grad0Opsz48 from '../components/EggFill0Wght700Grad0Opsz48'
import IconEggFill1Wght100Grad0Opsz48 from '../components/EggFill1Wght100Grad0Opsz48'
import IconEggFill1Wght200Grad0Opsz48 from '../components/EggFill1Wght200Grad0Opsz48'
import IconEggFill1Wght300Grad0Opsz48 from '../components/EggFill1Wght300Grad0Opsz48'
import IconEggFill1Wght400Grad0Opsz48 from '../components/EggFill1Wght400Grad0Opsz48'
import IconEggFill1Wght500Grad0Opsz48 from '../components/EggFill1Wght500Grad0Opsz48'
import IconEggFill1Wght600Grad0Opsz48 from '../components/EggFill1Wght600Grad0Opsz48'
import IconEggFill1Wght700Grad0Opsz48 from '../components/EggFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEgg = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEggFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEggFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEggFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEggFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEggFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEggFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEggFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEggFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEggFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEggFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEggFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEggFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEggFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEggFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
