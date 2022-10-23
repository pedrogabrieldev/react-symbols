import IconJoinInnerFill0Wght100Grad0Opsz48 from '../components/JoinInnerFill0Wght100Grad0Opsz48'
import IconJoinInnerFill0Wght200Grad0Opsz48 from '../components/JoinInnerFill0Wght200Grad0Opsz48'
import IconJoinInnerFill0Wght300Grad0Opsz48 from '../components/JoinInnerFill0Wght300Grad0Opsz48'
import IconJoinInnerFill0Wght400Grad0Opsz48 from '../components/JoinInnerFill0Wght400Grad0Opsz48'
import IconJoinInnerFill0Wght500Grad0Opsz48 from '../components/JoinInnerFill0Wght500Grad0Opsz48'
import IconJoinInnerFill0Wght600Grad0Opsz48 from '../components/JoinInnerFill0Wght600Grad0Opsz48'
import IconJoinInnerFill0Wght700Grad0Opsz48 from '../components/JoinInnerFill0Wght700Grad0Opsz48'
import IconJoinInnerFill1Wght100Grad0Opsz48 from '../components/JoinInnerFill1Wght100Grad0Opsz48'
import IconJoinInnerFill1Wght200Grad0Opsz48 from '../components/JoinInnerFill1Wght200Grad0Opsz48'
import IconJoinInnerFill1Wght300Grad0Opsz48 from '../components/JoinInnerFill1Wght300Grad0Opsz48'
import IconJoinInnerFill1Wght400Grad0Opsz48 from '../components/JoinInnerFill1Wght400Grad0Opsz48'
import IconJoinInnerFill1Wght500Grad0Opsz48 from '../components/JoinInnerFill1Wght500Grad0Opsz48'
import IconJoinInnerFill1Wght600Grad0Opsz48 from '../components/JoinInnerFill1Wght600Grad0Opsz48'
import IconJoinInnerFill1Wght700Grad0Opsz48 from '../components/JoinInnerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconJoinInner = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconJoinInnerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconJoinInnerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconJoinInnerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconJoinInnerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconJoinInnerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconJoinInnerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconJoinInnerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconJoinInnerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconJoinInnerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconJoinInnerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconJoinInnerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconJoinInnerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconJoinInnerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconJoinInnerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
