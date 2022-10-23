import IconFeedFill0Wght100Grad0Opsz48 from '../components/FeedFill0Wght100Grad0Opsz48'
import IconFeedFill0Wght200Grad0Opsz48 from '../components/FeedFill0Wght200Grad0Opsz48'
import IconFeedFill0Wght300Grad0Opsz48 from '../components/FeedFill0Wght300Grad0Opsz48'
import IconFeedFill0Wght400Grad0Opsz48 from '../components/FeedFill0Wght400Grad0Opsz48'
import IconFeedFill0Wght500Grad0Opsz48 from '../components/FeedFill0Wght500Grad0Opsz48'
import IconFeedFill0Wght600Grad0Opsz48 from '../components/FeedFill0Wght600Grad0Opsz48'
import IconFeedFill0Wght700Grad0Opsz48 from '../components/FeedFill0Wght700Grad0Opsz48'
import IconFeedFill1Wght100Grad0Opsz48 from '../components/FeedFill1Wght100Grad0Opsz48'
import IconFeedFill1Wght200Grad0Opsz48 from '../components/FeedFill1Wght200Grad0Opsz48'
import IconFeedFill1Wght300Grad0Opsz48 from '../components/FeedFill1Wght300Grad0Opsz48'
import IconFeedFill1Wght400Grad0Opsz48 from '../components/FeedFill1Wght400Grad0Opsz48'
import IconFeedFill1Wght500Grad0Opsz48 from '../components/FeedFill1Wght500Grad0Opsz48'
import IconFeedFill1Wght600Grad0Opsz48 from '../components/FeedFill1Wght600Grad0Opsz48'
import IconFeedFill1Wght700Grad0Opsz48 from '../components/FeedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFeed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFeedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFeedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFeedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFeedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFeedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFeedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFeedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFeedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFeedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFeedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFeedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFeedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFeedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFeedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
