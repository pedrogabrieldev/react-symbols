import IconOpacityFill0Wght100Grad0Opsz48 from '../components/OpacityFill0Wght100Grad0Opsz48'
import IconOpacityFill0Wght200Grad0Opsz48 from '../components/OpacityFill0Wght200Grad0Opsz48'
import IconOpacityFill0Wght300Grad0Opsz48 from '../components/OpacityFill0Wght300Grad0Opsz48'
import IconOpacityFill0Wght400Grad0Opsz48 from '../components/OpacityFill0Wght400Grad0Opsz48'
import IconOpacityFill0Wght500Grad0Opsz48 from '../components/OpacityFill0Wght500Grad0Opsz48'
import IconOpacityFill0Wght600Grad0Opsz48 from '../components/OpacityFill0Wght600Grad0Opsz48'
import IconOpacityFill0Wght700Grad0Opsz48 from '../components/OpacityFill0Wght700Grad0Opsz48'
import IconOpacityFill1Wght100Grad0Opsz48 from '../components/OpacityFill1Wght100Grad0Opsz48'
import IconOpacityFill1Wght200Grad0Opsz48 from '../components/OpacityFill1Wght200Grad0Opsz48'
import IconOpacityFill1Wght300Grad0Opsz48 from '../components/OpacityFill1Wght300Grad0Opsz48'
import IconOpacityFill1Wght400Grad0Opsz48 from '../components/OpacityFill1Wght400Grad0Opsz48'
import IconOpacityFill1Wght500Grad0Opsz48 from '../components/OpacityFill1Wght500Grad0Opsz48'
import IconOpacityFill1Wght600Grad0Opsz48 from '../components/OpacityFill1Wght600Grad0Opsz48'
import IconOpacityFill1Wght700Grad0Opsz48 from '../components/OpacityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOpacity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOpacityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOpacityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOpacityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOpacityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOpacityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOpacityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOpacityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOpacityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOpacityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOpacityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOpacityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOpacityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOpacityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOpacityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
