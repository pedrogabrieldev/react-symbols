import IconBorderOuterFill0Wght100Grad0Opsz48 from '../components/BorderOuterFill0Wght100Grad0Opsz48'
import IconBorderOuterFill0Wght200Grad0Opsz48 from '../components/BorderOuterFill0Wght200Grad0Opsz48'
import IconBorderOuterFill0Wght300Grad0Opsz48 from '../components/BorderOuterFill0Wght300Grad0Opsz48'
import IconBorderOuterFill0Wght400Grad0Opsz48 from '../components/BorderOuterFill0Wght400Grad0Opsz48'
import IconBorderOuterFill0Wght500Grad0Opsz48 from '../components/BorderOuterFill0Wght500Grad0Opsz48'
import IconBorderOuterFill0Wght600Grad0Opsz48 from '../components/BorderOuterFill0Wght600Grad0Opsz48'
import IconBorderOuterFill0Wght700Grad0Opsz48 from '../components/BorderOuterFill0Wght700Grad0Opsz48'
import IconBorderOuterFill1Wght100Grad0Opsz48 from '../components/BorderOuterFill1Wght100Grad0Opsz48'
import IconBorderOuterFill1Wght200Grad0Opsz48 from '../components/BorderOuterFill1Wght200Grad0Opsz48'
import IconBorderOuterFill1Wght300Grad0Opsz48 from '../components/BorderOuterFill1Wght300Grad0Opsz48'
import IconBorderOuterFill1Wght400Grad0Opsz48 from '../components/BorderOuterFill1Wght400Grad0Opsz48'
import IconBorderOuterFill1Wght500Grad0Opsz48 from '../components/BorderOuterFill1Wght500Grad0Opsz48'
import IconBorderOuterFill1Wght600Grad0Opsz48 from '../components/BorderOuterFill1Wght600Grad0Opsz48'
import IconBorderOuterFill1Wght700Grad0Opsz48 from '../components/BorderOuterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderOuter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderOuterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderOuterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderOuterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderOuterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderOuterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderOuterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderOuterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderOuterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderOuterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderOuterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderOuterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderOuterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderOuterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderOuterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
