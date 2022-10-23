import IconBookmarkAddedFill0Wght100Grad0Opsz48 from '../components/BookmarkAddedFill0Wght100Grad0Opsz48'
import IconBookmarkAddedFill0Wght200Grad0Opsz48 from '../components/BookmarkAddedFill0Wght200Grad0Opsz48'
import IconBookmarkAddedFill0Wght300Grad0Opsz48 from '../components/BookmarkAddedFill0Wght300Grad0Opsz48'
import IconBookmarkAddedFill0Wght400Grad0Opsz48 from '../components/BookmarkAddedFill0Wght400Grad0Opsz48'
import IconBookmarkAddedFill0Wght500Grad0Opsz48 from '../components/BookmarkAddedFill0Wght500Grad0Opsz48'
import IconBookmarkAddedFill0Wght600Grad0Opsz48 from '../components/BookmarkAddedFill0Wght600Grad0Opsz48'
import IconBookmarkAddedFill0Wght700Grad0Opsz48 from '../components/BookmarkAddedFill0Wght700Grad0Opsz48'
import IconBookmarkAddedFill1Wght100Grad0Opsz48 from '../components/BookmarkAddedFill1Wght100Grad0Opsz48'
import IconBookmarkAddedFill1Wght200Grad0Opsz48 from '../components/BookmarkAddedFill1Wght200Grad0Opsz48'
import IconBookmarkAddedFill1Wght300Grad0Opsz48 from '../components/BookmarkAddedFill1Wght300Grad0Opsz48'
import IconBookmarkAddedFill1Wght400Grad0Opsz48 from '../components/BookmarkAddedFill1Wght400Grad0Opsz48'
import IconBookmarkAddedFill1Wght500Grad0Opsz48 from '../components/BookmarkAddedFill1Wght500Grad0Opsz48'
import IconBookmarkAddedFill1Wght600Grad0Opsz48 from '../components/BookmarkAddedFill1Wght600Grad0Opsz48'
import IconBookmarkAddedFill1Wght700Grad0Opsz48 from '../components/BookmarkAddedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBookmarkAdded = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBookmarkAddedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBookmarkAddedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBookmarkAddedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBookmarkAddedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBookmarkAddedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBookmarkAddedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBookmarkAddedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBookmarkAddedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBookmarkAddedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBookmarkAddedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBookmarkAddedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBookmarkAddedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBookmarkAddedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBookmarkAddedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
