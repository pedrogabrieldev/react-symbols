import IconDragIndicatorFill0Wght100Grad0Opsz48 from '../components/DragIndicatorFill0Wght100Grad0Opsz48'
import IconDragIndicatorFill0Wght200Grad0Opsz48 from '../components/DragIndicatorFill0Wght200Grad0Opsz48'
import IconDragIndicatorFill0Wght300Grad0Opsz48 from '../components/DragIndicatorFill0Wght300Grad0Opsz48'
import IconDragIndicatorFill0Wght400Grad0Opsz48 from '../components/DragIndicatorFill0Wght400Grad0Opsz48'
import IconDragIndicatorFill0Wght500Grad0Opsz48 from '../components/DragIndicatorFill0Wght500Grad0Opsz48'
import IconDragIndicatorFill0Wght600Grad0Opsz48 from '../components/DragIndicatorFill0Wght600Grad0Opsz48'
import IconDragIndicatorFill0Wght700Grad0Opsz48 from '../components/DragIndicatorFill0Wght700Grad0Opsz48'
import IconDragIndicatorFill1Wght100Grad0Opsz48 from '../components/DragIndicatorFill1Wght100Grad0Opsz48'
import IconDragIndicatorFill1Wght200Grad0Opsz48 from '../components/DragIndicatorFill1Wght200Grad0Opsz48'
import IconDragIndicatorFill1Wght300Grad0Opsz48 from '../components/DragIndicatorFill1Wght300Grad0Opsz48'
import IconDragIndicatorFill1Wght400Grad0Opsz48 from '../components/DragIndicatorFill1Wght400Grad0Opsz48'
import IconDragIndicatorFill1Wght500Grad0Opsz48 from '../components/DragIndicatorFill1Wght500Grad0Opsz48'
import IconDragIndicatorFill1Wght600Grad0Opsz48 from '../components/DragIndicatorFill1Wght600Grad0Opsz48'
import IconDragIndicatorFill1Wght700Grad0Opsz48 from '../components/DragIndicatorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDragIndicator = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDragIndicatorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDragIndicatorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDragIndicatorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDragIndicatorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDragIndicatorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDragIndicatorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDragIndicatorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDragIndicatorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDragIndicatorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDragIndicatorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDragIndicatorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDragIndicatorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDragIndicatorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDragIndicatorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
