import IconBookmarksFill0Wght100Grad0Opsz48 from '../components/BookmarksFill0Wght100Grad0Opsz48'
import IconBookmarksFill0Wght200Grad0Opsz48 from '../components/BookmarksFill0Wght200Grad0Opsz48'
import IconBookmarksFill0Wght300Grad0Opsz48 from '../components/BookmarksFill0Wght300Grad0Opsz48'
import IconBookmarksFill0Wght400Grad0Opsz48 from '../components/BookmarksFill0Wght400Grad0Opsz48'
import IconBookmarksFill0Wght500Grad0Opsz48 from '../components/BookmarksFill0Wght500Grad0Opsz48'
import IconBookmarksFill0Wght600Grad0Opsz48 from '../components/BookmarksFill0Wght600Grad0Opsz48'
import IconBookmarksFill0Wght700Grad0Opsz48 from '../components/BookmarksFill0Wght700Grad0Opsz48'
import IconBookmarksFill1Wght100Grad0Opsz48 from '../components/BookmarksFill1Wght100Grad0Opsz48'
import IconBookmarksFill1Wght200Grad0Opsz48 from '../components/BookmarksFill1Wght200Grad0Opsz48'
import IconBookmarksFill1Wght300Grad0Opsz48 from '../components/BookmarksFill1Wght300Grad0Opsz48'
import IconBookmarksFill1Wght400Grad0Opsz48 from '../components/BookmarksFill1Wght400Grad0Opsz48'
import IconBookmarksFill1Wght500Grad0Opsz48 from '../components/BookmarksFill1Wght500Grad0Opsz48'
import IconBookmarksFill1Wght600Grad0Opsz48 from '../components/BookmarksFill1Wght600Grad0Opsz48'
import IconBookmarksFill1Wght700Grad0Opsz48 from '../components/BookmarksFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBookmarks = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBookmarksFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBookmarksFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBookmarksFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBookmarksFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBookmarksFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBookmarksFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBookmarksFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBookmarksFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBookmarksFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBookmarksFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBookmarksFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBookmarksFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBookmarksFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBookmarksFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
