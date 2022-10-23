import IconRemoveFromQueueFill0Wght100Grad0Opsz48 from '../components/RemoveFromQueueFill0Wght100Grad0Opsz48'
import IconRemoveFromQueueFill0Wght200Grad0Opsz48 from '../components/RemoveFromQueueFill0Wght200Grad0Opsz48'
import IconRemoveFromQueueFill0Wght300Grad0Opsz48 from '../components/RemoveFromQueueFill0Wght300Grad0Opsz48'
import IconRemoveFromQueueFill0Wght400Grad0Opsz48 from '../components/RemoveFromQueueFill0Wght400Grad0Opsz48'
import IconRemoveFromQueueFill0Wght500Grad0Opsz48 from '../components/RemoveFromQueueFill0Wght500Grad0Opsz48'
import IconRemoveFromQueueFill0Wght600Grad0Opsz48 from '../components/RemoveFromQueueFill0Wght600Grad0Opsz48'
import IconRemoveFromQueueFill0Wght700Grad0Opsz48 from '../components/RemoveFromQueueFill0Wght700Grad0Opsz48'
import IconRemoveFromQueueFill1Wght100Grad0Opsz48 from '../components/RemoveFromQueueFill1Wght100Grad0Opsz48'
import IconRemoveFromQueueFill1Wght200Grad0Opsz48 from '../components/RemoveFromQueueFill1Wght200Grad0Opsz48'
import IconRemoveFromQueueFill1Wght300Grad0Opsz48 from '../components/RemoveFromQueueFill1Wght300Grad0Opsz48'
import IconRemoveFromQueueFill1Wght400Grad0Opsz48 from '../components/RemoveFromQueueFill1Wght400Grad0Opsz48'
import IconRemoveFromQueueFill1Wght500Grad0Opsz48 from '../components/RemoveFromQueueFill1Wght500Grad0Opsz48'
import IconRemoveFromQueueFill1Wght600Grad0Opsz48 from '../components/RemoveFromQueueFill1Wght600Grad0Opsz48'
import IconRemoveFromQueueFill1Wght700Grad0Opsz48 from '../components/RemoveFromQueueFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRemoveFromQueue = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRemoveFromQueueFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRemoveFromQueueFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRemoveFromQueueFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRemoveFromQueueFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRemoveFromQueueFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRemoveFromQueueFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRemoveFromQueueFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRemoveFromQueueFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRemoveFromQueueFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRemoveFromQueueFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRemoveFromQueueFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRemoveFromQueueFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRemoveFromQueueFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRemoveFromQueueFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
