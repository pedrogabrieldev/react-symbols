import IconDynamicFeedFill0Wght100Grad0Opsz48 from '../components/DynamicFeedFill0Wght100Grad0Opsz48'
import IconDynamicFeedFill0Wght200Grad0Opsz48 from '../components/DynamicFeedFill0Wght200Grad0Opsz48'
import IconDynamicFeedFill0Wght300Grad0Opsz48 from '../components/DynamicFeedFill0Wght300Grad0Opsz48'
import IconDynamicFeedFill0Wght400Grad0Opsz48 from '../components/DynamicFeedFill0Wght400Grad0Opsz48'
import IconDynamicFeedFill0Wght500Grad0Opsz48 from '../components/DynamicFeedFill0Wght500Grad0Opsz48'
import IconDynamicFeedFill0Wght600Grad0Opsz48 from '../components/DynamicFeedFill0Wght600Grad0Opsz48'
import IconDynamicFeedFill0Wght700Grad0Opsz48 from '../components/DynamicFeedFill0Wght700Grad0Opsz48'
import IconDynamicFeedFill1Wght100Grad0Opsz48 from '../components/DynamicFeedFill1Wght100Grad0Opsz48'
import IconDynamicFeedFill1Wght200Grad0Opsz48 from '../components/DynamicFeedFill1Wght200Grad0Opsz48'
import IconDynamicFeedFill1Wght300Grad0Opsz48 from '../components/DynamicFeedFill1Wght300Grad0Opsz48'
import IconDynamicFeedFill1Wght400Grad0Opsz48 from '../components/DynamicFeedFill1Wght400Grad0Opsz48'
import IconDynamicFeedFill1Wght500Grad0Opsz48 from '../components/DynamicFeedFill1Wght500Grad0Opsz48'
import IconDynamicFeedFill1Wght600Grad0Opsz48 from '../components/DynamicFeedFill1Wght600Grad0Opsz48'
import IconDynamicFeedFill1Wght700Grad0Opsz48 from '../components/DynamicFeedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDynamicFeed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDynamicFeedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDynamicFeedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDynamicFeedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDynamicFeedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDynamicFeedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDynamicFeedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDynamicFeedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDynamicFeedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDynamicFeedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDynamicFeedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDynamicFeedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDynamicFeedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDynamicFeedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDynamicFeedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
