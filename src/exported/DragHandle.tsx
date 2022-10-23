import IconDragHandleFill0Wght100Grad0Opsz48 from '../components/DragHandleFill0Wght100Grad0Opsz48'
import IconDragHandleFill0Wght200Grad0Opsz48 from '../components/DragHandleFill0Wght200Grad0Opsz48'
import IconDragHandleFill0Wght300Grad0Opsz48 from '../components/DragHandleFill0Wght300Grad0Opsz48'
import IconDragHandleFill0Wght400Grad0Opsz48 from '../components/DragHandleFill0Wght400Grad0Opsz48'
import IconDragHandleFill0Wght500Grad0Opsz48 from '../components/DragHandleFill0Wght500Grad0Opsz48'
import IconDragHandleFill0Wght600Grad0Opsz48 from '../components/DragHandleFill0Wght600Grad0Opsz48'
import IconDragHandleFill0Wght700Grad0Opsz48 from '../components/DragHandleFill0Wght700Grad0Opsz48'
import IconDragHandleFill1Wght100Grad0Opsz48 from '../components/DragHandleFill1Wght100Grad0Opsz48'
import IconDragHandleFill1Wght200Grad0Opsz48 from '../components/DragHandleFill1Wght200Grad0Opsz48'
import IconDragHandleFill1Wght300Grad0Opsz48 from '../components/DragHandleFill1Wght300Grad0Opsz48'
import IconDragHandleFill1Wght400Grad0Opsz48 from '../components/DragHandleFill1Wght400Grad0Opsz48'
import IconDragHandleFill1Wght500Grad0Opsz48 from '../components/DragHandleFill1Wght500Grad0Opsz48'
import IconDragHandleFill1Wght600Grad0Opsz48 from '../components/DragHandleFill1Wght600Grad0Opsz48'
import IconDragHandleFill1Wght700Grad0Opsz48 from '../components/DragHandleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDragHandle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDragHandleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDragHandleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDragHandleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDragHandleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDragHandleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDragHandleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDragHandleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDragHandleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDragHandleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDragHandleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDragHandleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDragHandleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDragHandleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDragHandleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
