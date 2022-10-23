import IconAlignHorizontalCenterFill0Wght100Grad0Opsz48 from '../components/AlignHorizontalCenterFill0Wght100Grad0Opsz48'
import IconAlignHorizontalCenterFill0Wght200Grad0Opsz48 from '../components/AlignHorizontalCenterFill0Wght200Grad0Opsz48'
import IconAlignHorizontalCenterFill0Wght300Grad0Opsz48 from '../components/AlignHorizontalCenterFill0Wght300Grad0Opsz48'
import IconAlignHorizontalCenterFill0Wght400Grad0Opsz48 from '../components/AlignHorizontalCenterFill0Wght400Grad0Opsz48'
import IconAlignHorizontalCenterFill0Wght500Grad0Opsz48 from '../components/AlignHorizontalCenterFill0Wght500Grad0Opsz48'
import IconAlignHorizontalCenterFill0Wght600Grad0Opsz48 from '../components/AlignHorizontalCenterFill0Wght600Grad0Opsz48'
import IconAlignHorizontalCenterFill0Wght700Grad0Opsz48 from '../components/AlignHorizontalCenterFill0Wght700Grad0Opsz48'
import IconAlignHorizontalCenterFill1Wght100Grad0Opsz48 from '../components/AlignHorizontalCenterFill1Wght100Grad0Opsz48'
import IconAlignHorizontalCenterFill1Wght200Grad0Opsz48 from '../components/AlignHorizontalCenterFill1Wght200Grad0Opsz48'
import IconAlignHorizontalCenterFill1Wght300Grad0Opsz48 from '../components/AlignHorizontalCenterFill1Wght300Grad0Opsz48'
import IconAlignHorizontalCenterFill1Wght400Grad0Opsz48 from '../components/AlignHorizontalCenterFill1Wght400Grad0Opsz48'
import IconAlignHorizontalCenterFill1Wght500Grad0Opsz48 from '../components/AlignHorizontalCenterFill1Wght500Grad0Opsz48'
import IconAlignHorizontalCenterFill1Wght600Grad0Opsz48 from '../components/AlignHorizontalCenterFill1Wght600Grad0Opsz48'
import IconAlignHorizontalCenterFill1Wght700Grad0Opsz48 from '../components/AlignHorizontalCenterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlignHorizontalCenter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlignHorizontalCenterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlignHorizontalCenterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlignHorizontalCenterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlignHorizontalCenterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlignHorizontalCenterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlignHorizontalCenterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlignHorizontalCenterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlignHorizontalCenterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlignHorizontalCenterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlignHorizontalCenterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlignHorizontalCenterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlignHorizontalCenterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlignHorizontalCenterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlignHorizontalCenterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
