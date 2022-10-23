import IconGridOnFill0Wght100Grad0Opsz48 from '../components/GridOnFill0Wght100Grad0Opsz48'
import IconGridOnFill0Wght200Grad0Opsz48 from '../components/GridOnFill0Wght200Grad0Opsz48'
import IconGridOnFill0Wght300Grad0Opsz48 from '../components/GridOnFill0Wght300Grad0Opsz48'
import IconGridOnFill0Wght400Grad0Opsz48 from '../components/GridOnFill0Wght400Grad0Opsz48'
import IconGridOnFill0Wght500Grad0Opsz48 from '../components/GridOnFill0Wght500Grad0Opsz48'
import IconGridOnFill0Wght600Grad0Opsz48 from '../components/GridOnFill0Wght600Grad0Opsz48'
import IconGridOnFill0Wght700Grad0Opsz48 from '../components/GridOnFill0Wght700Grad0Opsz48'
import IconGridOnFill1Wght100Grad0Opsz48 from '../components/GridOnFill1Wght100Grad0Opsz48'
import IconGridOnFill1Wght200Grad0Opsz48 from '../components/GridOnFill1Wght200Grad0Opsz48'
import IconGridOnFill1Wght300Grad0Opsz48 from '../components/GridOnFill1Wght300Grad0Opsz48'
import IconGridOnFill1Wght400Grad0Opsz48 from '../components/GridOnFill1Wght400Grad0Opsz48'
import IconGridOnFill1Wght500Grad0Opsz48 from '../components/GridOnFill1Wght500Grad0Opsz48'
import IconGridOnFill1Wght600Grad0Opsz48 from '../components/GridOnFill1Wght600Grad0Opsz48'
import IconGridOnFill1Wght700Grad0Opsz48 from '../components/GridOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGridOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGridOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGridOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGridOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGridOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGridOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGridOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGridOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGridOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGridOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGridOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGridOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGridOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGridOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGridOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
