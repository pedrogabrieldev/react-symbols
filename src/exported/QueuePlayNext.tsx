import IconQueuePlayNextFill0Wght100Grad0Opsz48 from '../components/QueuePlayNextFill0Wght100Grad0Opsz48'
import IconQueuePlayNextFill0Wght200Grad0Opsz48 from '../components/QueuePlayNextFill0Wght200Grad0Opsz48'
import IconQueuePlayNextFill0Wght300Grad0Opsz48 from '../components/QueuePlayNextFill0Wght300Grad0Opsz48'
import IconQueuePlayNextFill0Wght400Grad0Opsz48 from '../components/QueuePlayNextFill0Wght400Grad0Opsz48'
import IconQueuePlayNextFill0Wght500Grad0Opsz48 from '../components/QueuePlayNextFill0Wght500Grad0Opsz48'
import IconQueuePlayNextFill0Wght600Grad0Opsz48 from '../components/QueuePlayNextFill0Wght600Grad0Opsz48'
import IconQueuePlayNextFill0Wght700Grad0Opsz48 from '../components/QueuePlayNextFill0Wght700Grad0Opsz48'
import IconQueuePlayNextFill1Wght100Grad0Opsz48 from '../components/QueuePlayNextFill1Wght100Grad0Opsz48'
import IconQueuePlayNextFill1Wght200Grad0Opsz48 from '../components/QueuePlayNextFill1Wght200Grad0Opsz48'
import IconQueuePlayNextFill1Wght300Grad0Opsz48 from '../components/QueuePlayNextFill1Wght300Grad0Opsz48'
import IconQueuePlayNextFill1Wght400Grad0Opsz48 from '../components/QueuePlayNextFill1Wght400Grad0Opsz48'
import IconQueuePlayNextFill1Wght500Grad0Opsz48 from '../components/QueuePlayNextFill1Wght500Grad0Opsz48'
import IconQueuePlayNextFill1Wght600Grad0Opsz48 from '../components/QueuePlayNextFill1Wght600Grad0Opsz48'
import IconQueuePlayNextFill1Wght700Grad0Opsz48 from '../components/QueuePlayNextFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQueuePlayNext = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQueuePlayNextFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQueuePlayNextFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQueuePlayNextFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQueuePlayNextFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQueuePlayNextFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQueuePlayNextFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQueuePlayNextFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQueuePlayNextFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQueuePlayNextFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQueuePlayNextFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQueuePlayNextFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQueuePlayNextFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQueuePlayNextFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQueuePlayNextFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
