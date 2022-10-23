import IconCloudQueueFill0Wght100Grad0Opsz48 from '../components/CloudQueueFill0Wght100Grad0Opsz48'
import IconCloudQueueFill0Wght200Grad0Opsz48 from '../components/CloudQueueFill0Wght200Grad0Opsz48'
import IconCloudQueueFill0Wght300Grad0Opsz48 from '../components/CloudQueueFill0Wght300Grad0Opsz48'
import IconCloudQueueFill0Wght400Grad0Opsz48 from '../components/CloudQueueFill0Wght400Grad0Opsz48'
import IconCloudQueueFill0Wght500Grad0Opsz48 from '../components/CloudQueueFill0Wght500Grad0Opsz48'
import IconCloudQueueFill0Wght600Grad0Opsz48 from '../components/CloudQueueFill0Wght600Grad0Opsz48'
import IconCloudQueueFill0Wght700Grad0Opsz48 from '../components/CloudQueueFill0Wght700Grad0Opsz48'
import IconCloudQueueFill1Wght100Grad0Opsz48 from '../components/CloudQueueFill1Wght100Grad0Opsz48'
import IconCloudQueueFill1Wght200Grad0Opsz48 from '../components/CloudQueueFill1Wght200Grad0Opsz48'
import IconCloudQueueFill1Wght300Grad0Opsz48 from '../components/CloudQueueFill1Wght300Grad0Opsz48'
import IconCloudQueueFill1Wght400Grad0Opsz48 from '../components/CloudQueueFill1Wght400Grad0Opsz48'
import IconCloudQueueFill1Wght500Grad0Opsz48 from '../components/CloudQueueFill1Wght500Grad0Opsz48'
import IconCloudQueueFill1Wght600Grad0Opsz48 from '../components/CloudQueueFill1Wght600Grad0Opsz48'
import IconCloudQueueFill1Wght700Grad0Opsz48 from '../components/CloudQueueFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudQueue = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudQueueFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudQueueFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudQueueFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudQueueFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudQueueFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudQueueFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudQueueFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudQueueFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudQueueFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudQueueFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudQueueFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudQueueFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudQueueFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudQueueFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
