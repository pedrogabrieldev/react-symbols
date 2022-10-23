import IconAlignHorizontalLeftFill0Wght100Grad0Opsz48 from '../components/AlignHorizontalLeftFill0Wght100Grad0Opsz48'
import IconAlignHorizontalLeftFill0Wght200Grad0Opsz48 from '../components/AlignHorizontalLeftFill0Wght200Grad0Opsz48'
import IconAlignHorizontalLeftFill0Wght300Grad0Opsz48 from '../components/AlignHorizontalLeftFill0Wght300Grad0Opsz48'
import IconAlignHorizontalLeftFill0Wght400Grad0Opsz48 from '../components/AlignHorizontalLeftFill0Wght400Grad0Opsz48'
import IconAlignHorizontalLeftFill0Wght500Grad0Opsz48 from '../components/AlignHorizontalLeftFill0Wght500Grad0Opsz48'
import IconAlignHorizontalLeftFill0Wght600Grad0Opsz48 from '../components/AlignHorizontalLeftFill0Wght600Grad0Opsz48'
import IconAlignHorizontalLeftFill0Wght700Grad0Opsz48 from '../components/AlignHorizontalLeftFill0Wght700Grad0Opsz48'
import IconAlignHorizontalLeftFill1Wght100Grad0Opsz48 from '../components/AlignHorizontalLeftFill1Wght100Grad0Opsz48'
import IconAlignHorizontalLeftFill1Wght200Grad0Opsz48 from '../components/AlignHorizontalLeftFill1Wght200Grad0Opsz48'
import IconAlignHorizontalLeftFill1Wght300Grad0Opsz48 from '../components/AlignHorizontalLeftFill1Wght300Grad0Opsz48'
import IconAlignHorizontalLeftFill1Wght400Grad0Opsz48 from '../components/AlignHorizontalLeftFill1Wght400Grad0Opsz48'
import IconAlignHorizontalLeftFill1Wght500Grad0Opsz48 from '../components/AlignHorizontalLeftFill1Wght500Grad0Opsz48'
import IconAlignHorizontalLeftFill1Wght600Grad0Opsz48 from '../components/AlignHorizontalLeftFill1Wght600Grad0Opsz48'
import IconAlignHorizontalLeftFill1Wght700Grad0Opsz48 from '../components/AlignHorizontalLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlignHorizontalLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlignHorizontalLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlignHorizontalLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlignHorizontalLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlignHorizontalLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlignHorizontalLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlignHorizontalLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlignHorizontalLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlignHorizontalLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlignHorizontalLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlignHorizontalLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlignHorizontalLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlignHorizontalLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlignHorizontalLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlignHorizontalLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
