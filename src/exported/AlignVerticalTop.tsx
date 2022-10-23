import IconAlignVerticalTopFill0Wght100Grad0Opsz48 from '../components/AlignVerticalTopFill0Wght100Grad0Opsz48'
import IconAlignVerticalTopFill0Wght200Grad0Opsz48 from '../components/AlignVerticalTopFill0Wght200Grad0Opsz48'
import IconAlignVerticalTopFill0Wght300Grad0Opsz48 from '../components/AlignVerticalTopFill0Wght300Grad0Opsz48'
import IconAlignVerticalTopFill0Wght400Grad0Opsz48 from '../components/AlignVerticalTopFill0Wght400Grad0Opsz48'
import IconAlignVerticalTopFill0Wght500Grad0Opsz48 from '../components/AlignVerticalTopFill0Wght500Grad0Opsz48'
import IconAlignVerticalTopFill0Wght600Grad0Opsz48 from '../components/AlignVerticalTopFill0Wght600Grad0Opsz48'
import IconAlignVerticalTopFill0Wght700Grad0Opsz48 from '../components/AlignVerticalTopFill0Wght700Grad0Opsz48'
import IconAlignVerticalTopFill1Wght100Grad0Opsz48 from '../components/AlignVerticalTopFill1Wght100Grad0Opsz48'
import IconAlignVerticalTopFill1Wght200Grad0Opsz48 from '../components/AlignVerticalTopFill1Wght200Grad0Opsz48'
import IconAlignVerticalTopFill1Wght300Grad0Opsz48 from '../components/AlignVerticalTopFill1Wght300Grad0Opsz48'
import IconAlignVerticalTopFill1Wght400Grad0Opsz48 from '../components/AlignVerticalTopFill1Wght400Grad0Opsz48'
import IconAlignVerticalTopFill1Wght500Grad0Opsz48 from '../components/AlignVerticalTopFill1Wght500Grad0Opsz48'
import IconAlignVerticalTopFill1Wght600Grad0Opsz48 from '../components/AlignVerticalTopFill1Wght600Grad0Opsz48'
import IconAlignVerticalTopFill1Wght700Grad0Opsz48 from '../components/AlignVerticalTopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlignVerticalTop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlignVerticalTopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlignVerticalTopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlignVerticalTopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlignVerticalTopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlignVerticalTopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlignVerticalTopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlignVerticalTopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlignVerticalTopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlignVerticalTopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlignVerticalTopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlignVerticalTopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlignVerticalTopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlignVerticalTopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlignVerticalTopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
