import IconAddToQueueFill0Wght100Grad0Opsz48 from '../components/AddToQueueFill0Wght100Grad0Opsz48'
import IconAddToQueueFill0Wght200Grad0Opsz48 from '../components/AddToQueueFill0Wght200Grad0Opsz48'
import IconAddToQueueFill0Wght300Grad0Opsz48 from '../components/AddToQueueFill0Wght300Grad0Opsz48'
import IconAddToQueueFill0Wght400Grad0Opsz48 from '../components/AddToQueueFill0Wght400Grad0Opsz48'
import IconAddToQueueFill0Wght500Grad0Opsz48 from '../components/AddToQueueFill0Wght500Grad0Opsz48'
import IconAddToQueueFill0Wght600Grad0Opsz48 from '../components/AddToQueueFill0Wght600Grad0Opsz48'
import IconAddToQueueFill0Wght700Grad0Opsz48 from '../components/AddToQueueFill0Wght700Grad0Opsz48'
import IconAddToQueueFill1Wght100Grad0Opsz48 from '../components/AddToQueueFill1Wght100Grad0Opsz48'
import IconAddToQueueFill1Wght200Grad0Opsz48 from '../components/AddToQueueFill1Wght200Grad0Opsz48'
import IconAddToQueueFill1Wght300Grad0Opsz48 from '../components/AddToQueueFill1Wght300Grad0Opsz48'
import IconAddToQueueFill1Wght400Grad0Opsz48 from '../components/AddToQueueFill1Wght400Grad0Opsz48'
import IconAddToQueueFill1Wght500Grad0Opsz48 from '../components/AddToQueueFill1Wght500Grad0Opsz48'
import IconAddToQueueFill1Wght600Grad0Opsz48 from '../components/AddToQueueFill1Wght600Grad0Opsz48'
import IconAddToQueueFill1Wght700Grad0Opsz48 from '../components/AddToQueueFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddToQueue = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddToQueueFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddToQueueFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddToQueueFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddToQueueFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddToQueueFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddToQueueFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddToQueueFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddToQueueFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddToQueueFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddToQueueFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddToQueueFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddToQueueFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddToQueueFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddToQueueFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
