import IconVisibilityOffFill0Wght100Grad0Opsz48 from '../components/VisibilityOffFill0Wght100Grad0Opsz48'
import IconVisibilityOffFill0Wght200Grad0Opsz48 from '../components/VisibilityOffFill0Wght200Grad0Opsz48'
import IconVisibilityOffFill0Wght300Grad0Opsz48 from '../components/VisibilityOffFill0Wght300Grad0Opsz48'
import IconVisibilityOffFill0Wght400Grad0Opsz48 from '../components/VisibilityOffFill0Wght400Grad0Opsz48'
import IconVisibilityOffFill0Wght500Grad0Opsz48 from '../components/VisibilityOffFill0Wght500Grad0Opsz48'
import IconVisibilityOffFill0Wght600Grad0Opsz48 from '../components/VisibilityOffFill0Wght600Grad0Opsz48'
import IconVisibilityOffFill0Wght700Grad0Opsz48 from '../components/VisibilityOffFill0Wght700Grad0Opsz48'
import IconVisibilityOffFill1Wght100Grad0Opsz48 from '../components/VisibilityOffFill1Wght100Grad0Opsz48'
import IconVisibilityOffFill1Wght200Grad0Opsz48 from '../components/VisibilityOffFill1Wght200Grad0Opsz48'
import IconVisibilityOffFill1Wght300Grad0Opsz48 from '../components/VisibilityOffFill1Wght300Grad0Opsz48'
import IconVisibilityOffFill1Wght400Grad0Opsz48 from '../components/VisibilityOffFill1Wght400Grad0Opsz48'
import IconVisibilityOffFill1Wght500Grad0Opsz48 from '../components/VisibilityOffFill1Wght500Grad0Opsz48'
import IconVisibilityOffFill1Wght600Grad0Opsz48 from '../components/VisibilityOffFill1Wght600Grad0Opsz48'
import IconVisibilityOffFill1Wght700Grad0Opsz48 from '../components/VisibilityOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVisibilityOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVisibilityOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVisibilityOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVisibilityOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVisibilityOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVisibilityOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVisibilityOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVisibilityOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVisibilityOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVisibilityOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVisibilityOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVisibilityOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVisibilityOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVisibilityOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVisibilityOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
