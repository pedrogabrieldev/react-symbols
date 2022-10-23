import IconLocationOffFill0Wght100Grad0Opsz48 from '../components/LocationOffFill0Wght100Grad0Opsz48'
import IconLocationOffFill0Wght200Grad0Opsz48 from '../components/LocationOffFill0Wght200Grad0Opsz48'
import IconLocationOffFill0Wght300Grad0Opsz48 from '../components/LocationOffFill0Wght300Grad0Opsz48'
import IconLocationOffFill0Wght400Grad0Opsz48 from '../components/LocationOffFill0Wght400Grad0Opsz48'
import IconLocationOffFill0Wght500Grad0Opsz48 from '../components/LocationOffFill0Wght500Grad0Opsz48'
import IconLocationOffFill0Wght600Grad0Opsz48 from '../components/LocationOffFill0Wght600Grad0Opsz48'
import IconLocationOffFill0Wght700Grad0Opsz48 from '../components/LocationOffFill0Wght700Grad0Opsz48'
import IconLocationOffFill1Wght100Grad0Opsz48 from '../components/LocationOffFill1Wght100Grad0Opsz48'
import IconLocationOffFill1Wght200Grad0Opsz48 from '../components/LocationOffFill1Wght200Grad0Opsz48'
import IconLocationOffFill1Wght300Grad0Opsz48 from '../components/LocationOffFill1Wght300Grad0Opsz48'
import IconLocationOffFill1Wght400Grad0Opsz48 from '../components/LocationOffFill1Wght400Grad0Opsz48'
import IconLocationOffFill1Wght500Grad0Opsz48 from '../components/LocationOffFill1Wght500Grad0Opsz48'
import IconLocationOffFill1Wght600Grad0Opsz48 from '../components/LocationOffFill1Wght600Grad0Opsz48'
import IconLocationOffFill1Wght700Grad0Opsz48 from '../components/LocationOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
