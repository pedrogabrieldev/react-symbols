import IconMoveDownFill0Wght100Grad0Opsz48 from '../components/MoveDownFill0Wght100Grad0Opsz48'
import IconMoveDownFill0Wght200Grad0Opsz48 from '../components/MoveDownFill0Wght200Grad0Opsz48'
import IconMoveDownFill0Wght300Grad0Opsz48 from '../components/MoveDownFill0Wght300Grad0Opsz48'
import IconMoveDownFill0Wght400Grad0Opsz48 from '../components/MoveDownFill0Wght400Grad0Opsz48'
import IconMoveDownFill0Wght500Grad0Opsz48 from '../components/MoveDownFill0Wght500Grad0Opsz48'
import IconMoveDownFill0Wght600Grad0Opsz48 from '../components/MoveDownFill0Wght600Grad0Opsz48'
import IconMoveDownFill0Wght700Grad0Opsz48 from '../components/MoveDownFill0Wght700Grad0Opsz48'
import IconMoveDownFill1Wght100Grad0Opsz48 from '../components/MoveDownFill1Wght100Grad0Opsz48'
import IconMoveDownFill1Wght200Grad0Opsz48 from '../components/MoveDownFill1Wght200Grad0Opsz48'
import IconMoveDownFill1Wght300Grad0Opsz48 from '../components/MoveDownFill1Wght300Grad0Opsz48'
import IconMoveDownFill1Wght400Grad0Opsz48 from '../components/MoveDownFill1Wght400Grad0Opsz48'
import IconMoveDownFill1Wght500Grad0Opsz48 from '../components/MoveDownFill1Wght500Grad0Opsz48'
import IconMoveDownFill1Wght600Grad0Opsz48 from '../components/MoveDownFill1Wght600Grad0Opsz48'
import IconMoveDownFill1Wght700Grad0Opsz48 from '../components/MoveDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoveDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoveDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoveDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoveDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoveDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoveDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoveDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoveDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoveDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoveDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoveDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoveDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoveDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoveDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoveDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
