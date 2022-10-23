import IconAlignVerticalCenterFill0Wght100Grad0Opsz48 from '../components/AlignVerticalCenterFill0Wght100Grad0Opsz48'
import IconAlignVerticalCenterFill0Wght200Grad0Opsz48 from '../components/AlignVerticalCenterFill0Wght200Grad0Opsz48'
import IconAlignVerticalCenterFill0Wght300Grad0Opsz48 from '../components/AlignVerticalCenterFill0Wght300Grad0Opsz48'
import IconAlignVerticalCenterFill0Wght400Grad0Opsz48 from '../components/AlignVerticalCenterFill0Wght400Grad0Opsz48'
import IconAlignVerticalCenterFill0Wght500Grad0Opsz48 from '../components/AlignVerticalCenterFill0Wght500Grad0Opsz48'
import IconAlignVerticalCenterFill0Wght600Grad0Opsz48 from '../components/AlignVerticalCenterFill0Wght600Grad0Opsz48'
import IconAlignVerticalCenterFill0Wght700Grad0Opsz48 from '../components/AlignVerticalCenterFill0Wght700Grad0Opsz48'
import IconAlignVerticalCenterFill1Wght100Grad0Opsz48 from '../components/AlignVerticalCenterFill1Wght100Grad0Opsz48'
import IconAlignVerticalCenterFill1Wght200Grad0Opsz48 from '../components/AlignVerticalCenterFill1Wght200Grad0Opsz48'
import IconAlignVerticalCenterFill1Wght300Grad0Opsz48 from '../components/AlignVerticalCenterFill1Wght300Grad0Opsz48'
import IconAlignVerticalCenterFill1Wght400Grad0Opsz48 from '../components/AlignVerticalCenterFill1Wght400Grad0Opsz48'
import IconAlignVerticalCenterFill1Wght500Grad0Opsz48 from '../components/AlignVerticalCenterFill1Wght500Grad0Opsz48'
import IconAlignVerticalCenterFill1Wght600Grad0Opsz48 from '../components/AlignVerticalCenterFill1Wght600Grad0Opsz48'
import IconAlignVerticalCenterFill1Wght700Grad0Opsz48 from '../components/AlignVerticalCenterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlignVerticalCenter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlignVerticalCenterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlignVerticalCenterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlignVerticalCenterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlignVerticalCenterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlignVerticalCenterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlignVerticalCenterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlignVerticalCenterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlignVerticalCenterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlignVerticalCenterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlignVerticalCenterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlignVerticalCenterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlignVerticalCenterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlignVerticalCenterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlignVerticalCenterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
