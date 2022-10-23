import IconJoinLeftFill0Wght100Grad0Opsz48 from '../components/JoinLeftFill0Wght100Grad0Opsz48'
import IconJoinLeftFill0Wght200Grad0Opsz48 from '../components/JoinLeftFill0Wght200Grad0Opsz48'
import IconJoinLeftFill0Wght300Grad0Opsz48 from '../components/JoinLeftFill0Wght300Grad0Opsz48'
import IconJoinLeftFill0Wght400Grad0Opsz48 from '../components/JoinLeftFill0Wght400Grad0Opsz48'
import IconJoinLeftFill0Wght500Grad0Opsz48 from '../components/JoinLeftFill0Wght500Grad0Opsz48'
import IconJoinLeftFill0Wght600Grad0Opsz48 from '../components/JoinLeftFill0Wght600Grad0Opsz48'
import IconJoinLeftFill0Wght700Grad0Opsz48 from '../components/JoinLeftFill0Wght700Grad0Opsz48'
import IconJoinLeftFill1Wght100Grad0Opsz48 from '../components/JoinLeftFill1Wght100Grad0Opsz48'
import IconJoinLeftFill1Wght200Grad0Opsz48 from '../components/JoinLeftFill1Wght200Grad0Opsz48'
import IconJoinLeftFill1Wght300Grad0Opsz48 from '../components/JoinLeftFill1Wght300Grad0Opsz48'
import IconJoinLeftFill1Wght400Grad0Opsz48 from '../components/JoinLeftFill1Wght400Grad0Opsz48'
import IconJoinLeftFill1Wght500Grad0Opsz48 from '../components/JoinLeftFill1Wght500Grad0Opsz48'
import IconJoinLeftFill1Wght600Grad0Opsz48 from '../components/JoinLeftFill1Wght600Grad0Opsz48'
import IconJoinLeftFill1Wght700Grad0Opsz48 from '../components/JoinLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconJoinLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconJoinLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconJoinLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconJoinLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconJoinLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconJoinLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconJoinLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconJoinLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconJoinLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconJoinLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconJoinLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconJoinLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconJoinLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconJoinLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconJoinLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
