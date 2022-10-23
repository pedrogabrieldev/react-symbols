import IconCodeOffFill0Wght100Grad0Opsz48 from '../components/CodeOffFill0Wght100Grad0Opsz48'
import IconCodeOffFill0Wght200Grad0Opsz48 from '../components/CodeOffFill0Wght200Grad0Opsz48'
import IconCodeOffFill0Wght300Grad0Opsz48 from '../components/CodeOffFill0Wght300Grad0Opsz48'
import IconCodeOffFill0Wght400Grad0Opsz48 from '../components/CodeOffFill0Wght400Grad0Opsz48'
import IconCodeOffFill0Wght500Grad0Opsz48 from '../components/CodeOffFill0Wght500Grad0Opsz48'
import IconCodeOffFill0Wght600Grad0Opsz48 from '../components/CodeOffFill0Wght600Grad0Opsz48'
import IconCodeOffFill0Wght700Grad0Opsz48 from '../components/CodeOffFill0Wght700Grad0Opsz48'
import IconCodeOffFill1Wght100Grad0Opsz48 from '../components/CodeOffFill1Wght100Grad0Opsz48'
import IconCodeOffFill1Wght200Grad0Opsz48 from '../components/CodeOffFill1Wght200Grad0Opsz48'
import IconCodeOffFill1Wght300Grad0Opsz48 from '../components/CodeOffFill1Wght300Grad0Opsz48'
import IconCodeOffFill1Wght400Grad0Opsz48 from '../components/CodeOffFill1Wght400Grad0Opsz48'
import IconCodeOffFill1Wght500Grad0Opsz48 from '../components/CodeOffFill1Wght500Grad0Opsz48'
import IconCodeOffFill1Wght600Grad0Opsz48 from '../components/CodeOffFill1Wght600Grad0Opsz48'
import IconCodeOffFill1Wght700Grad0Opsz48 from '../components/CodeOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCodeOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCodeOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCodeOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCodeOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCodeOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCodeOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCodeOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCodeOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCodeOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCodeOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCodeOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCodeOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCodeOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCodeOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCodeOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
