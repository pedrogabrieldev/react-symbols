import IconMoveToInboxFill0Wght100Grad0Opsz48 from '../components/MoveToInboxFill0Wght100Grad0Opsz48'
import IconMoveToInboxFill0Wght200Grad0Opsz48 from '../components/MoveToInboxFill0Wght200Grad0Opsz48'
import IconMoveToInboxFill0Wght300Grad0Opsz48 from '../components/MoveToInboxFill0Wght300Grad0Opsz48'
import IconMoveToInboxFill0Wght400Grad0Opsz48 from '../components/MoveToInboxFill0Wght400Grad0Opsz48'
import IconMoveToInboxFill0Wght500Grad0Opsz48 from '../components/MoveToInboxFill0Wght500Grad0Opsz48'
import IconMoveToInboxFill0Wght600Grad0Opsz48 from '../components/MoveToInboxFill0Wght600Grad0Opsz48'
import IconMoveToInboxFill0Wght700Grad0Opsz48 from '../components/MoveToInboxFill0Wght700Grad0Opsz48'
import IconMoveToInboxFill1Wght100Grad0Opsz48 from '../components/MoveToInboxFill1Wght100Grad0Opsz48'
import IconMoveToInboxFill1Wght200Grad0Opsz48 from '../components/MoveToInboxFill1Wght200Grad0Opsz48'
import IconMoveToInboxFill1Wght300Grad0Opsz48 from '../components/MoveToInboxFill1Wght300Grad0Opsz48'
import IconMoveToInboxFill1Wght400Grad0Opsz48 from '../components/MoveToInboxFill1Wght400Grad0Opsz48'
import IconMoveToInboxFill1Wght500Grad0Opsz48 from '../components/MoveToInboxFill1Wght500Grad0Opsz48'
import IconMoveToInboxFill1Wght600Grad0Opsz48 from '../components/MoveToInboxFill1Wght600Grad0Opsz48'
import IconMoveToInboxFill1Wght700Grad0Opsz48 from '../components/MoveToInboxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoveToInbox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoveToInboxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoveToInboxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoveToInboxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoveToInboxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoveToInboxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoveToInboxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoveToInboxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoveToInboxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoveToInboxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoveToInboxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoveToInboxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoveToInboxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoveToInboxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoveToInboxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
