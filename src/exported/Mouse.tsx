import IconMouseFill0Wght100Grad0Opsz48 from '../components/MouseFill0Wght100Grad0Opsz48'
import IconMouseFill0Wght200Grad0Opsz48 from '../components/MouseFill0Wght200Grad0Opsz48'
import IconMouseFill0Wght300Grad0Opsz48 from '../components/MouseFill0Wght300Grad0Opsz48'
import IconMouseFill0Wght400Grad0Opsz48 from '../components/MouseFill0Wght400Grad0Opsz48'
import IconMouseFill0Wght500Grad0Opsz48 from '../components/MouseFill0Wght500Grad0Opsz48'
import IconMouseFill0Wght600Grad0Opsz48 from '../components/MouseFill0Wght600Grad0Opsz48'
import IconMouseFill0Wght700Grad0Opsz48 from '../components/MouseFill0Wght700Grad0Opsz48'
import IconMouseFill1Wght100Grad0Opsz48 from '../components/MouseFill1Wght100Grad0Opsz48'
import IconMouseFill1Wght200Grad0Opsz48 from '../components/MouseFill1Wght200Grad0Opsz48'
import IconMouseFill1Wght300Grad0Opsz48 from '../components/MouseFill1Wght300Grad0Opsz48'
import IconMouseFill1Wght400Grad0Opsz48 from '../components/MouseFill1Wght400Grad0Opsz48'
import IconMouseFill1Wght500Grad0Opsz48 from '../components/MouseFill1Wght500Grad0Opsz48'
import IconMouseFill1Wght600Grad0Opsz48 from '../components/MouseFill1Wght600Grad0Opsz48'
import IconMouseFill1Wght700Grad0Opsz48 from '../components/MouseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMouse = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMouseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMouseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMouseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMouseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMouseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMouseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMouseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMouseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMouseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMouseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMouseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMouseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMouseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMouseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
