import IconJoinFill0Wght100Grad0Opsz48 from '../components/JoinFill0Wght100Grad0Opsz48'
import IconJoinFill0Wght200Grad0Opsz48 from '../components/JoinFill0Wght200Grad0Opsz48'
import IconJoinFill0Wght300Grad0Opsz48 from '../components/JoinFill0Wght300Grad0Opsz48'
import IconJoinFill0Wght400Grad0Opsz48 from '../components/JoinFill0Wght400Grad0Opsz48'
import IconJoinFill0Wght500Grad0Opsz48 from '../components/JoinFill0Wght500Grad0Opsz48'
import IconJoinFill0Wght600Grad0Opsz48 from '../components/JoinFill0Wght600Grad0Opsz48'
import IconJoinFill0Wght700Grad0Opsz48 from '../components/JoinFill0Wght700Grad0Opsz48'
import IconJoinFill1Wght100Grad0Opsz48 from '../components/JoinFill1Wght100Grad0Opsz48'
import IconJoinFill1Wght200Grad0Opsz48 from '../components/JoinFill1Wght200Grad0Opsz48'
import IconJoinFill1Wght300Grad0Opsz48 from '../components/JoinFill1Wght300Grad0Opsz48'
import IconJoinFill1Wght400Grad0Opsz48 from '../components/JoinFill1Wght400Grad0Opsz48'
import IconJoinFill1Wght500Grad0Opsz48 from '../components/JoinFill1Wght500Grad0Opsz48'
import IconJoinFill1Wght600Grad0Opsz48 from '../components/JoinFill1Wght600Grad0Opsz48'
import IconJoinFill1Wght700Grad0Opsz48 from '../components/JoinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconJoin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconJoinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconJoinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconJoinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconJoinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconJoinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconJoinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconJoinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconJoinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconJoinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconJoinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconJoinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconJoinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconJoinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconJoinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
