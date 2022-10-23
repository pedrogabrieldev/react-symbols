import IconBookmarkFill0Wght100Grad0Opsz48 from '../components/BookmarkFill0Wght100Grad0Opsz48'
import IconBookmarkFill0Wght200Grad0Opsz48 from '../components/BookmarkFill0Wght200Grad0Opsz48'
import IconBookmarkFill0Wght300Grad0Opsz48 from '../components/BookmarkFill0Wght300Grad0Opsz48'
import IconBookmarkFill0Wght400Grad0Opsz48 from '../components/BookmarkFill0Wght400Grad0Opsz48'
import IconBookmarkFill0Wght500Grad0Opsz48 from '../components/BookmarkFill0Wght500Grad0Opsz48'
import IconBookmarkFill0Wght600Grad0Opsz48 from '../components/BookmarkFill0Wght600Grad0Opsz48'
import IconBookmarkFill0Wght700Grad0Opsz48 from '../components/BookmarkFill0Wght700Grad0Opsz48'
import IconBookmarkFill1Wght100Grad0Opsz48 from '../components/BookmarkFill1Wght100Grad0Opsz48'
import IconBookmarkFill1Wght200Grad0Opsz48 from '../components/BookmarkFill1Wght200Grad0Opsz48'
import IconBookmarkFill1Wght300Grad0Opsz48 from '../components/BookmarkFill1Wght300Grad0Opsz48'
import IconBookmarkFill1Wght400Grad0Opsz48 from '../components/BookmarkFill1Wght400Grad0Opsz48'
import IconBookmarkFill1Wght500Grad0Opsz48 from '../components/BookmarkFill1Wght500Grad0Opsz48'
import IconBookmarkFill1Wght600Grad0Opsz48 from '../components/BookmarkFill1Wght600Grad0Opsz48'
import IconBookmarkFill1Wght700Grad0Opsz48 from '../components/BookmarkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBookmark = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBookmarkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBookmarkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBookmarkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBookmarkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBookmarkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBookmarkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBookmarkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBookmarkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBookmarkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBookmarkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBookmarkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBookmarkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBookmarkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBookmarkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
