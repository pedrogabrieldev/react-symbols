import IconAlignHorizontalRightFill0Wght100Grad0Opsz48 from '../components/AlignHorizontalRightFill0Wght100Grad0Opsz48'
import IconAlignHorizontalRightFill0Wght200Grad0Opsz48 from '../components/AlignHorizontalRightFill0Wght200Grad0Opsz48'
import IconAlignHorizontalRightFill0Wght300Grad0Opsz48 from '../components/AlignHorizontalRightFill0Wght300Grad0Opsz48'
import IconAlignHorizontalRightFill0Wght400Grad0Opsz48 from '../components/AlignHorizontalRightFill0Wght400Grad0Opsz48'
import IconAlignHorizontalRightFill0Wght500Grad0Opsz48 from '../components/AlignHorizontalRightFill0Wght500Grad0Opsz48'
import IconAlignHorizontalRightFill0Wght600Grad0Opsz48 from '../components/AlignHorizontalRightFill0Wght600Grad0Opsz48'
import IconAlignHorizontalRightFill0Wght700Grad0Opsz48 from '../components/AlignHorizontalRightFill0Wght700Grad0Opsz48'
import IconAlignHorizontalRightFill1Wght100Grad0Opsz48 from '../components/AlignHorizontalRightFill1Wght100Grad0Opsz48'
import IconAlignHorizontalRightFill1Wght200Grad0Opsz48 from '../components/AlignHorizontalRightFill1Wght200Grad0Opsz48'
import IconAlignHorizontalRightFill1Wght300Grad0Opsz48 from '../components/AlignHorizontalRightFill1Wght300Grad0Opsz48'
import IconAlignHorizontalRightFill1Wght400Grad0Opsz48 from '../components/AlignHorizontalRightFill1Wght400Grad0Opsz48'
import IconAlignHorizontalRightFill1Wght500Grad0Opsz48 from '../components/AlignHorizontalRightFill1Wght500Grad0Opsz48'
import IconAlignHorizontalRightFill1Wght600Grad0Opsz48 from '../components/AlignHorizontalRightFill1Wght600Grad0Opsz48'
import IconAlignHorizontalRightFill1Wght700Grad0Opsz48 from '../components/AlignHorizontalRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlignHorizontalRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlignHorizontalRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlignHorizontalRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlignHorizontalRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlignHorizontalRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlignHorizontalRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlignHorizontalRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlignHorizontalRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlignHorizontalRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlignHorizontalRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlignHorizontalRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlignHorizontalRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlignHorizontalRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlignHorizontalRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlignHorizontalRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
