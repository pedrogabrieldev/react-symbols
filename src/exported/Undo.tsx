import IconUndoFill0Wght100Grad0Opsz48 from '../components/UndoFill0Wght100Grad0Opsz48'
import IconUndoFill0Wght200Grad0Opsz48 from '../components/UndoFill0Wght200Grad0Opsz48'
import IconUndoFill0Wght300Grad0Opsz48 from '../components/UndoFill0Wght300Grad0Opsz48'
import IconUndoFill0Wght400Grad0Opsz48 from '../components/UndoFill0Wght400Grad0Opsz48'
import IconUndoFill0Wght500Grad0Opsz48 from '../components/UndoFill0Wght500Grad0Opsz48'
import IconUndoFill0Wght600Grad0Opsz48 from '../components/UndoFill0Wght600Grad0Opsz48'
import IconUndoFill0Wght700Grad0Opsz48 from '../components/UndoFill0Wght700Grad0Opsz48'
import IconUndoFill1Wght100Grad0Opsz48 from '../components/UndoFill1Wght100Grad0Opsz48'
import IconUndoFill1Wght200Grad0Opsz48 from '../components/UndoFill1Wght200Grad0Opsz48'
import IconUndoFill1Wght300Grad0Opsz48 from '../components/UndoFill1Wght300Grad0Opsz48'
import IconUndoFill1Wght400Grad0Opsz48 from '../components/UndoFill1Wght400Grad0Opsz48'
import IconUndoFill1Wght500Grad0Opsz48 from '../components/UndoFill1Wght500Grad0Opsz48'
import IconUndoFill1Wght600Grad0Opsz48 from '../components/UndoFill1Wght600Grad0Opsz48'
import IconUndoFill1Wght700Grad0Opsz48 from '../components/UndoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUndo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUndoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUndoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUndoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUndoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUndoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUndoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUndoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUndoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUndoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUndoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUndoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUndoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUndoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUndoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
