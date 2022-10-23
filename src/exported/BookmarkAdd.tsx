import IconBookmarkAddFill0Wght100Grad0Opsz48 from '../components/BookmarkAddFill0Wght100Grad0Opsz48'
import IconBookmarkAddFill0Wght200Grad0Opsz48 from '../components/BookmarkAddFill0Wght200Grad0Opsz48'
import IconBookmarkAddFill0Wght300Grad0Opsz48 from '../components/BookmarkAddFill0Wght300Grad0Opsz48'
import IconBookmarkAddFill0Wght400Grad0Opsz48 from '../components/BookmarkAddFill0Wght400Grad0Opsz48'
import IconBookmarkAddFill0Wght500Grad0Opsz48 from '../components/BookmarkAddFill0Wght500Grad0Opsz48'
import IconBookmarkAddFill0Wght600Grad0Opsz48 from '../components/BookmarkAddFill0Wght600Grad0Opsz48'
import IconBookmarkAddFill0Wght700Grad0Opsz48 from '../components/BookmarkAddFill0Wght700Grad0Opsz48'
import IconBookmarkAddFill1Wght100Grad0Opsz48 from '../components/BookmarkAddFill1Wght100Grad0Opsz48'
import IconBookmarkAddFill1Wght200Grad0Opsz48 from '../components/BookmarkAddFill1Wght200Grad0Opsz48'
import IconBookmarkAddFill1Wght300Grad0Opsz48 from '../components/BookmarkAddFill1Wght300Grad0Opsz48'
import IconBookmarkAddFill1Wght400Grad0Opsz48 from '../components/BookmarkAddFill1Wght400Grad0Opsz48'
import IconBookmarkAddFill1Wght500Grad0Opsz48 from '../components/BookmarkAddFill1Wght500Grad0Opsz48'
import IconBookmarkAddFill1Wght600Grad0Opsz48 from '../components/BookmarkAddFill1Wght600Grad0Opsz48'
import IconBookmarkAddFill1Wght700Grad0Opsz48 from '../components/BookmarkAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBookmarkAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBookmarkAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBookmarkAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBookmarkAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBookmarkAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBookmarkAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBookmarkAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBookmarkAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBookmarkAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBookmarkAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBookmarkAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBookmarkAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBookmarkAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBookmarkAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBookmarkAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
