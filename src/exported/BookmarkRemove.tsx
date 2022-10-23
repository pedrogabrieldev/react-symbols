import IconBookmarkRemoveFill0Wght100Grad0Opsz48 from '../components/BookmarkRemoveFill0Wght100Grad0Opsz48'
import IconBookmarkRemoveFill0Wght200Grad0Opsz48 from '../components/BookmarkRemoveFill0Wght200Grad0Opsz48'
import IconBookmarkRemoveFill0Wght300Grad0Opsz48 from '../components/BookmarkRemoveFill0Wght300Grad0Opsz48'
import IconBookmarkRemoveFill0Wght400Grad0Opsz48 from '../components/BookmarkRemoveFill0Wght400Grad0Opsz48'
import IconBookmarkRemoveFill0Wght500Grad0Opsz48 from '../components/BookmarkRemoveFill0Wght500Grad0Opsz48'
import IconBookmarkRemoveFill0Wght600Grad0Opsz48 from '../components/BookmarkRemoveFill0Wght600Grad0Opsz48'
import IconBookmarkRemoveFill0Wght700Grad0Opsz48 from '../components/BookmarkRemoveFill0Wght700Grad0Opsz48'
import IconBookmarkRemoveFill1Wght100Grad0Opsz48 from '../components/BookmarkRemoveFill1Wght100Grad0Opsz48'
import IconBookmarkRemoveFill1Wght200Grad0Opsz48 from '../components/BookmarkRemoveFill1Wght200Grad0Opsz48'
import IconBookmarkRemoveFill1Wght300Grad0Opsz48 from '../components/BookmarkRemoveFill1Wght300Grad0Opsz48'
import IconBookmarkRemoveFill1Wght400Grad0Opsz48 from '../components/BookmarkRemoveFill1Wght400Grad0Opsz48'
import IconBookmarkRemoveFill1Wght500Grad0Opsz48 from '../components/BookmarkRemoveFill1Wght500Grad0Opsz48'
import IconBookmarkRemoveFill1Wght600Grad0Opsz48 from '../components/BookmarkRemoveFill1Wght600Grad0Opsz48'
import IconBookmarkRemoveFill1Wght700Grad0Opsz48 from '../components/BookmarkRemoveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBookmarkRemove = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBookmarkRemoveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBookmarkRemoveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBookmarkRemoveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBookmarkRemoveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBookmarkRemoveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBookmarkRemoveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBookmarkRemoveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBookmarkRemoveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBookmarkRemoveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBookmarkRemoveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBookmarkRemoveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBookmarkRemoveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBookmarkRemoveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBookmarkRemoveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
