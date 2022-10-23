import IconJoinRightFill0Wght100Grad0Opsz48 from '../components/JoinRightFill0Wght100Grad0Opsz48'
import IconJoinRightFill0Wght200Grad0Opsz48 from '../components/JoinRightFill0Wght200Grad0Opsz48'
import IconJoinRightFill0Wght300Grad0Opsz48 from '../components/JoinRightFill0Wght300Grad0Opsz48'
import IconJoinRightFill0Wght400Grad0Opsz48 from '../components/JoinRightFill0Wght400Grad0Opsz48'
import IconJoinRightFill0Wght500Grad0Opsz48 from '../components/JoinRightFill0Wght500Grad0Opsz48'
import IconJoinRightFill0Wght600Grad0Opsz48 from '../components/JoinRightFill0Wght600Grad0Opsz48'
import IconJoinRightFill0Wght700Grad0Opsz48 from '../components/JoinRightFill0Wght700Grad0Opsz48'
import IconJoinRightFill1Wght100Grad0Opsz48 from '../components/JoinRightFill1Wght100Grad0Opsz48'
import IconJoinRightFill1Wght200Grad0Opsz48 from '../components/JoinRightFill1Wght200Grad0Opsz48'
import IconJoinRightFill1Wght300Grad0Opsz48 from '../components/JoinRightFill1Wght300Grad0Opsz48'
import IconJoinRightFill1Wght400Grad0Opsz48 from '../components/JoinRightFill1Wght400Grad0Opsz48'
import IconJoinRightFill1Wght500Grad0Opsz48 from '../components/JoinRightFill1Wght500Grad0Opsz48'
import IconJoinRightFill1Wght600Grad0Opsz48 from '../components/JoinRightFill1Wght600Grad0Opsz48'
import IconJoinRightFill1Wght700Grad0Opsz48 from '../components/JoinRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconJoinRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconJoinRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconJoinRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconJoinRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconJoinRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconJoinRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconJoinRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconJoinRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconJoinRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconJoinRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconJoinRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconJoinRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconJoinRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconJoinRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconJoinRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
