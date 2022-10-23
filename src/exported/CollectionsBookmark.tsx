import IconCollectionsBookmarkFill0Wght100Grad0Opsz48 from '../components/CollectionsBookmarkFill0Wght100Grad0Opsz48'
import IconCollectionsBookmarkFill0Wght200Grad0Opsz48 from '../components/CollectionsBookmarkFill0Wght200Grad0Opsz48'
import IconCollectionsBookmarkFill0Wght300Grad0Opsz48 from '../components/CollectionsBookmarkFill0Wght300Grad0Opsz48'
import IconCollectionsBookmarkFill0Wght400Grad0Opsz48 from '../components/CollectionsBookmarkFill0Wght400Grad0Opsz48'
import IconCollectionsBookmarkFill0Wght500Grad0Opsz48 from '../components/CollectionsBookmarkFill0Wght500Grad0Opsz48'
import IconCollectionsBookmarkFill0Wght600Grad0Opsz48 from '../components/CollectionsBookmarkFill0Wght600Grad0Opsz48'
import IconCollectionsBookmarkFill0Wght700Grad0Opsz48 from '../components/CollectionsBookmarkFill0Wght700Grad0Opsz48'
import IconCollectionsBookmarkFill1Wght100Grad0Opsz48 from '../components/CollectionsBookmarkFill1Wght100Grad0Opsz48'
import IconCollectionsBookmarkFill1Wght200Grad0Opsz48 from '../components/CollectionsBookmarkFill1Wght200Grad0Opsz48'
import IconCollectionsBookmarkFill1Wght300Grad0Opsz48 from '../components/CollectionsBookmarkFill1Wght300Grad0Opsz48'
import IconCollectionsBookmarkFill1Wght400Grad0Opsz48 from '../components/CollectionsBookmarkFill1Wght400Grad0Opsz48'
import IconCollectionsBookmarkFill1Wght500Grad0Opsz48 from '../components/CollectionsBookmarkFill1Wght500Grad0Opsz48'
import IconCollectionsBookmarkFill1Wght600Grad0Opsz48 from '../components/CollectionsBookmarkFill1Wght600Grad0Opsz48'
import IconCollectionsBookmarkFill1Wght700Grad0Opsz48 from '../components/CollectionsBookmarkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCollectionsBookmark = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCollectionsBookmarkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCollectionsBookmarkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCollectionsBookmarkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCollectionsBookmarkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCollectionsBookmarkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCollectionsBookmarkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCollectionsBookmarkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCollectionsBookmarkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCollectionsBookmarkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCollectionsBookmarkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCollectionsBookmarkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCollectionsBookmarkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCollectionsBookmarkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCollectionsBookmarkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
