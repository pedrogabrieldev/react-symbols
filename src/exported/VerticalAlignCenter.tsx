import IconVerticalAlignCenterFill0Wght100Grad0Opsz48 from '../components/VerticalAlignCenterFill0Wght100Grad0Opsz48'
import IconVerticalAlignCenterFill0Wght200Grad0Opsz48 from '../components/VerticalAlignCenterFill0Wght200Grad0Opsz48'
import IconVerticalAlignCenterFill0Wght300Grad0Opsz48 from '../components/VerticalAlignCenterFill0Wght300Grad0Opsz48'
import IconVerticalAlignCenterFill0Wght400Grad0Opsz48 from '../components/VerticalAlignCenterFill0Wght400Grad0Opsz48'
import IconVerticalAlignCenterFill0Wght500Grad0Opsz48 from '../components/VerticalAlignCenterFill0Wght500Grad0Opsz48'
import IconVerticalAlignCenterFill0Wght600Grad0Opsz48 from '../components/VerticalAlignCenterFill0Wght600Grad0Opsz48'
import IconVerticalAlignCenterFill0Wght700Grad0Opsz48 from '../components/VerticalAlignCenterFill0Wght700Grad0Opsz48'
import IconVerticalAlignCenterFill1Wght100Grad0Opsz48 from '../components/VerticalAlignCenterFill1Wght100Grad0Opsz48'
import IconVerticalAlignCenterFill1Wght200Grad0Opsz48 from '../components/VerticalAlignCenterFill1Wght200Grad0Opsz48'
import IconVerticalAlignCenterFill1Wght300Grad0Opsz48 from '../components/VerticalAlignCenterFill1Wght300Grad0Opsz48'
import IconVerticalAlignCenterFill1Wght400Grad0Opsz48 from '../components/VerticalAlignCenterFill1Wght400Grad0Opsz48'
import IconVerticalAlignCenterFill1Wght500Grad0Opsz48 from '../components/VerticalAlignCenterFill1Wght500Grad0Opsz48'
import IconVerticalAlignCenterFill1Wght600Grad0Opsz48 from '../components/VerticalAlignCenterFill1Wght600Grad0Opsz48'
import IconVerticalAlignCenterFill1Wght700Grad0Opsz48 from '../components/VerticalAlignCenterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerticalAlignCenter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerticalAlignCenterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerticalAlignCenterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerticalAlignCenterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerticalAlignCenterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerticalAlignCenterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerticalAlignCenterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerticalAlignCenterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerticalAlignCenterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerticalAlignCenterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerticalAlignCenterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerticalAlignCenterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerticalAlignCenterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerticalAlignCenterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerticalAlignCenterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
