import IconGridOffFill0Wght100Grad0Opsz48 from '../components/GridOffFill0Wght100Grad0Opsz48'
import IconGridOffFill0Wght200Grad0Opsz48 from '../components/GridOffFill0Wght200Grad0Opsz48'
import IconGridOffFill0Wght300Grad0Opsz48 from '../components/GridOffFill0Wght300Grad0Opsz48'
import IconGridOffFill0Wght400Grad0Opsz48 from '../components/GridOffFill0Wght400Grad0Opsz48'
import IconGridOffFill0Wght500Grad0Opsz48 from '../components/GridOffFill0Wght500Grad0Opsz48'
import IconGridOffFill0Wght600Grad0Opsz48 from '../components/GridOffFill0Wght600Grad0Opsz48'
import IconGridOffFill0Wght700Grad0Opsz48 from '../components/GridOffFill0Wght700Grad0Opsz48'
import IconGridOffFill1Wght100Grad0Opsz48 from '../components/GridOffFill1Wght100Grad0Opsz48'
import IconGridOffFill1Wght200Grad0Opsz48 from '../components/GridOffFill1Wght200Grad0Opsz48'
import IconGridOffFill1Wght300Grad0Opsz48 from '../components/GridOffFill1Wght300Grad0Opsz48'
import IconGridOffFill1Wght400Grad0Opsz48 from '../components/GridOffFill1Wght400Grad0Opsz48'
import IconGridOffFill1Wght500Grad0Opsz48 from '../components/GridOffFill1Wght500Grad0Opsz48'
import IconGridOffFill1Wght600Grad0Opsz48 from '../components/GridOffFill1Wght600Grad0Opsz48'
import IconGridOffFill1Wght700Grad0Opsz48 from '../components/GridOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGridOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGridOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGridOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGridOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGridOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGridOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGridOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGridOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGridOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGridOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGridOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGridOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGridOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGridOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGridOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
