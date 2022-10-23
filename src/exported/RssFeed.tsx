import IconRssFeedFill0Wght100Grad0Opsz48 from '../components/RssFeedFill0Wght100Grad0Opsz48'
import IconRssFeedFill0Wght200Grad0Opsz48 from '../components/RssFeedFill0Wght200Grad0Opsz48'
import IconRssFeedFill0Wght300Grad0Opsz48 from '../components/RssFeedFill0Wght300Grad0Opsz48'
import IconRssFeedFill0Wght400Grad0Opsz48 from '../components/RssFeedFill0Wght400Grad0Opsz48'
import IconRssFeedFill0Wght500Grad0Opsz48 from '../components/RssFeedFill0Wght500Grad0Opsz48'
import IconRssFeedFill0Wght600Grad0Opsz48 from '../components/RssFeedFill0Wght600Grad0Opsz48'
import IconRssFeedFill0Wght700Grad0Opsz48 from '../components/RssFeedFill0Wght700Grad0Opsz48'
import IconRssFeedFill1Wght100Grad0Opsz48 from '../components/RssFeedFill1Wght100Grad0Opsz48'
import IconRssFeedFill1Wght200Grad0Opsz48 from '../components/RssFeedFill1Wght200Grad0Opsz48'
import IconRssFeedFill1Wght300Grad0Opsz48 from '../components/RssFeedFill1Wght300Grad0Opsz48'
import IconRssFeedFill1Wght400Grad0Opsz48 from '../components/RssFeedFill1Wght400Grad0Opsz48'
import IconRssFeedFill1Wght500Grad0Opsz48 from '../components/RssFeedFill1Wght500Grad0Opsz48'
import IconRssFeedFill1Wght600Grad0Opsz48 from '../components/RssFeedFill1Wght600Grad0Opsz48'
import IconRssFeedFill1Wght700Grad0Opsz48 from '../components/RssFeedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRssFeed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRssFeedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRssFeedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRssFeedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRssFeedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRssFeedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRssFeedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRssFeedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRssFeedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRssFeedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRssFeedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRssFeedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRssFeedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRssFeedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRssFeedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
