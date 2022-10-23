import IconAlignVerticalBottomFill0Wght100Grad0Opsz48 from '../components/AlignVerticalBottomFill0Wght100Grad0Opsz48'
import IconAlignVerticalBottomFill0Wght200Grad0Opsz48 from '../components/AlignVerticalBottomFill0Wght200Grad0Opsz48'
import IconAlignVerticalBottomFill0Wght300Grad0Opsz48 from '../components/AlignVerticalBottomFill0Wght300Grad0Opsz48'
import IconAlignVerticalBottomFill0Wght400Grad0Opsz48 from '../components/AlignVerticalBottomFill0Wght400Grad0Opsz48'
import IconAlignVerticalBottomFill0Wght500Grad0Opsz48 from '../components/AlignVerticalBottomFill0Wght500Grad0Opsz48'
import IconAlignVerticalBottomFill0Wght600Grad0Opsz48 from '../components/AlignVerticalBottomFill0Wght600Grad0Opsz48'
import IconAlignVerticalBottomFill0Wght700Grad0Opsz48 from '../components/AlignVerticalBottomFill0Wght700Grad0Opsz48'
import IconAlignVerticalBottomFill1Wght100Grad0Opsz48 from '../components/AlignVerticalBottomFill1Wght100Grad0Opsz48'
import IconAlignVerticalBottomFill1Wght200Grad0Opsz48 from '../components/AlignVerticalBottomFill1Wght200Grad0Opsz48'
import IconAlignVerticalBottomFill1Wght300Grad0Opsz48 from '../components/AlignVerticalBottomFill1Wght300Grad0Opsz48'
import IconAlignVerticalBottomFill1Wght400Grad0Opsz48 from '../components/AlignVerticalBottomFill1Wght400Grad0Opsz48'
import IconAlignVerticalBottomFill1Wght500Grad0Opsz48 from '../components/AlignVerticalBottomFill1Wght500Grad0Opsz48'
import IconAlignVerticalBottomFill1Wght600Grad0Opsz48 from '../components/AlignVerticalBottomFill1Wght600Grad0Opsz48'
import IconAlignVerticalBottomFill1Wght700Grad0Opsz48 from '../components/AlignVerticalBottomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlignVerticalBottom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlignVerticalBottomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlignVerticalBottomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlignVerticalBottomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlignVerticalBottomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlignVerticalBottomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlignVerticalBottomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlignVerticalBottomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlignVerticalBottomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlignVerticalBottomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlignVerticalBottomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlignVerticalBottomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlignVerticalBottomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlignVerticalBottomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlignVerticalBottomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
