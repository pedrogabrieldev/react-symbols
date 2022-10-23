import IconJoinFullFill0Wght100Grad0Opsz48 from '../components/JoinFullFill0Wght100Grad0Opsz48'
import IconJoinFullFill0Wght200Grad0Opsz48 from '../components/JoinFullFill0Wght200Grad0Opsz48'
import IconJoinFullFill0Wght300Grad0Opsz48 from '../components/JoinFullFill0Wght300Grad0Opsz48'
import IconJoinFullFill0Wght400Grad0Opsz48 from '../components/JoinFullFill0Wght400Grad0Opsz48'
import IconJoinFullFill0Wght500Grad0Opsz48 from '../components/JoinFullFill0Wght500Grad0Opsz48'
import IconJoinFullFill0Wght600Grad0Opsz48 from '../components/JoinFullFill0Wght600Grad0Opsz48'
import IconJoinFullFill0Wght700Grad0Opsz48 from '../components/JoinFullFill0Wght700Grad0Opsz48'
import IconJoinFullFill1Wght100Grad0Opsz48 from '../components/JoinFullFill1Wght100Grad0Opsz48'
import IconJoinFullFill1Wght200Grad0Opsz48 from '../components/JoinFullFill1Wght200Grad0Opsz48'
import IconJoinFullFill1Wght300Grad0Opsz48 from '../components/JoinFullFill1Wght300Grad0Opsz48'
import IconJoinFullFill1Wght400Grad0Opsz48 from '../components/JoinFullFill1Wght400Grad0Opsz48'
import IconJoinFullFill1Wght500Grad0Opsz48 from '../components/JoinFullFill1Wght500Grad0Opsz48'
import IconJoinFullFill1Wght600Grad0Opsz48 from '../components/JoinFullFill1Wght600Grad0Opsz48'
import IconJoinFullFill1Wght700Grad0Opsz48 from '../components/JoinFullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconJoinFull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconJoinFullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconJoinFullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconJoinFullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconJoinFullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconJoinFullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconJoinFullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconJoinFullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconJoinFullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconJoinFullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconJoinFullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconJoinFullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconJoinFullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconJoinFullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconJoinFullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
