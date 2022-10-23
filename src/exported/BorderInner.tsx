import IconBorderInnerFill0Wght100Grad0Opsz48 from '../components/BorderInnerFill0Wght100Grad0Opsz48'
import IconBorderInnerFill0Wght200Grad0Opsz48 from '../components/BorderInnerFill0Wght200Grad0Opsz48'
import IconBorderInnerFill0Wght300Grad0Opsz48 from '../components/BorderInnerFill0Wght300Grad0Opsz48'
import IconBorderInnerFill0Wght400Grad0Opsz48 from '../components/BorderInnerFill0Wght400Grad0Opsz48'
import IconBorderInnerFill0Wght500Grad0Opsz48 from '../components/BorderInnerFill0Wght500Grad0Opsz48'
import IconBorderInnerFill0Wght600Grad0Opsz48 from '../components/BorderInnerFill0Wght600Grad0Opsz48'
import IconBorderInnerFill0Wght700Grad0Opsz48 from '../components/BorderInnerFill0Wght700Grad0Opsz48'
import IconBorderInnerFill1Wght100Grad0Opsz48 from '../components/BorderInnerFill1Wght100Grad0Opsz48'
import IconBorderInnerFill1Wght200Grad0Opsz48 from '../components/BorderInnerFill1Wght200Grad0Opsz48'
import IconBorderInnerFill1Wght300Grad0Opsz48 from '../components/BorderInnerFill1Wght300Grad0Opsz48'
import IconBorderInnerFill1Wght400Grad0Opsz48 from '../components/BorderInnerFill1Wght400Grad0Opsz48'
import IconBorderInnerFill1Wght500Grad0Opsz48 from '../components/BorderInnerFill1Wght500Grad0Opsz48'
import IconBorderInnerFill1Wght600Grad0Opsz48 from '../components/BorderInnerFill1Wght600Grad0Opsz48'
import IconBorderInnerFill1Wght700Grad0Opsz48 from '../components/BorderInnerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderInner = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderInnerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderInnerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderInnerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderInnerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderInnerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderInnerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderInnerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderInnerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderInnerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderInnerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderInnerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderInnerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderInnerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderInnerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
