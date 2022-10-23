import IconViewKanbanFill0Wght100Grad0Opsz48 from '../components/ViewKanbanFill0Wght100Grad0Opsz48'
import IconViewKanbanFill0Wght200Grad0Opsz48 from '../components/ViewKanbanFill0Wght200Grad0Opsz48'
import IconViewKanbanFill0Wght300Grad0Opsz48 from '../components/ViewKanbanFill0Wght300Grad0Opsz48'
import IconViewKanbanFill0Wght400Grad0Opsz48 from '../components/ViewKanbanFill0Wght400Grad0Opsz48'
import IconViewKanbanFill0Wght500Grad0Opsz48 from '../components/ViewKanbanFill0Wght500Grad0Opsz48'
import IconViewKanbanFill0Wght600Grad0Opsz48 from '../components/ViewKanbanFill0Wght600Grad0Opsz48'
import IconViewKanbanFill0Wght700Grad0Opsz48 from '../components/ViewKanbanFill0Wght700Grad0Opsz48'
import IconViewKanbanFill1Wght100Grad0Opsz48 from '../components/ViewKanbanFill1Wght100Grad0Opsz48'
import IconViewKanbanFill1Wght200Grad0Opsz48 from '../components/ViewKanbanFill1Wght200Grad0Opsz48'
import IconViewKanbanFill1Wght300Grad0Opsz48 from '../components/ViewKanbanFill1Wght300Grad0Opsz48'
import IconViewKanbanFill1Wght400Grad0Opsz48 from '../components/ViewKanbanFill1Wght400Grad0Opsz48'
import IconViewKanbanFill1Wght500Grad0Opsz48 from '../components/ViewKanbanFill1Wght500Grad0Opsz48'
import IconViewKanbanFill1Wght600Grad0Opsz48 from '../components/ViewKanbanFill1Wght600Grad0Opsz48'
import IconViewKanbanFill1Wght700Grad0Opsz48 from '../components/ViewKanbanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewKanban = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewKanbanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewKanbanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewKanbanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewKanbanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewKanbanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewKanbanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewKanbanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewKanbanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewKanbanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewKanbanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewKanbanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewKanbanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewKanbanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewKanbanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
