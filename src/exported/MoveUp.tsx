import IconMoveUpFill0Wght100Grad0Opsz48 from '../components/MoveUpFill0Wght100Grad0Opsz48'
import IconMoveUpFill0Wght200Grad0Opsz48 from '../components/MoveUpFill0Wght200Grad0Opsz48'
import IconMoveUpFill0Wght300Grad0Opsz48 from '../components/MoveUpFill0Wght300Grad0Opsz48'
import IconMoveUpFill0Wght400Grad0Opsz48 from '../components/MoveUpFill0Wght400Grad0Opsz48'
import IconMoveUpFill0Wght500Grad0Opsz48 from '../components/MoveUpFill0Wght500Grad0Opsz48'
import IconMoveUpFill0Wght600Grad0Opsz48 from '../components/MoveUpFill0Wght600Grad0Opsz48'
import IconMoveUpFill0Wght700Grad0Opsz48 from '../components/MoveUpFill0Wght700Grad0Opsz48'
import IconMoveUpFill1Wght100Grad0Opsz48 from '../components/MoveUpFill1Wght100Grad0Opsz48'
import IconMoveUpFill1Wght200Grad0Opsz48 from '../components/MoveUpFill1Wght200Grad0Opsz48'
import IconMoveUpFill1Wght300Grad0Opsz48 from '../components/MoveUpFill1Wght300Grad0Opsz48'
import IconMoveUpFill1Wght400Grad0Opsz48 from '../components/MoveUpFill1Wght400Grad0Opsz48'
import IconMoveUpFill1Wght500Grad0Opsz48 from '../components/MoveUpFill1Wght500Grad0Opsz48'
import IconMoveUpFill1Wght600Grad0Opsz48 from '../components/MoveUpFill1Wght600Grad0Opsz48'
import IconMoveUpFill1Wght700Grad0Opsz48 from '../components/MoveUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoveUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoveUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoveUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoveUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoveUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoveUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoveUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoveUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoveUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoveUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoveUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoveUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoveUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoveUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoveUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
