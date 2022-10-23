import IconVisibilityFill0Wght100Grad0Opsz48 from '../components/VisibilityFill0Wght100Grad0Opsz48'
import IconVisibilityFill0Wght200Grad0Opsz48 from '../components/VisibilityFill0Wght200Grad0Opsz48'
import IconVisibilityFill0Wght300Grad0Opsz48 from '../components/VisibilityFill0Wght300Grad0Opsz48'
import IconVisibilityFill0Wght400Grad0Opsz48 from '../components/VisibilityFill0Wght400Grad0Opsz48'
import IconVisibilityFill0Wght500Grad0Opsz48 from '../components/VisibilityFill0Wght500Grad0Opsz48'
import IconVisibilityFill0Wght600Grad0Opsz48 from '../components/VisibilityFill0Wght600Grad0Opsz48'
import IconVisibilityFill0Wght700Grad0Opsz48 from '../components/VisibilityFill0Wght700Grad0Opsz48'
import IconVisibilityFill1Wght100Grad0Opsz48 from '../components/VisibilityFill1Wght100Grad0Opsz48'
import IconVisibilityFill1Wght200Grad0Opsz48 from '../components/VisibilityFill1Wght200Grad0Opsz48'
import IconVisibilityFill1Wght300Grad0Opsz48 from '../components/VisibilityFill1Wght300Grad0Opsz48'
import IconVisibilityFill1Wght400Grad0Opsz48 from '../components/VisibilityFill1Wght400Grad0Opsz48'
import IconVisibilityFill1Wght500Grad0Opsz48 from '../components/VisibilityFill1Wght500Grad0Opsz48'
import IconVisibilityFill1Wght600Grad0Opsz48 from '../components/VisibilityFill1Wght600Grad0Opsz48'
import IconVisibilityFill1Wght700Grad0Opsz48 from '../components/VisibilityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVisibility = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVisibilityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVisibilityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVisibilityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVisibilityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVisibilityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVisibilityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVisibilityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVisibilityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVisibilityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVisibilityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVisibilityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVisibilityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVisibilityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVisibilityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
