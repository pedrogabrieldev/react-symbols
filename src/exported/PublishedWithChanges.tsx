import IconPublishedWithChangesFill0Wght100Grad0Opsz48 from '../components/PublishedWithChangesFill0Wght100Grad0Opsz48'
import IconPublishedWithChangesFill0Wght200Grad0Opsz48 from '../components/PublishedWithChangesFill0Wght200Grad0Opsz48'
import IconPublishedWithChangesFill0Wght300Grad0Opsz48 from '../components/PublishedWithChangesFill0Wght300Grad0Opsz48'
import IconPublishedWithChangesFill0Wght400Grad0Opsz48 from '../components/PublishedWithChangesFill0Wght400Grad0Opsz48'
import IconPublishedWithChangesFill0Wght500Grad0Opsz48 from '../components/PublishedWithChangesFill0Wght500Grad0Opsz48'
import IconPublishedWithChangesFill0Wght600Grad0Opsz48 from '../components/PublishedWithChangesFill0Wght600Grad0Opsz48'
import IconPublishedWithChangesFill0Wght700Grad0Opsz48 from '../components/PublishedWithChangesFill0Wght700Grad0Opsz48'
import IconPublishedWithChangesFill1Wght100Grad0Opsz48 from '../components/PublishedWithChangesFill1Wght100Grad0Opsz48'
import IconPublishedWithChangesFill1Wght200Grad0Opsz48 from '../components/PublishedWithChangesFill1Wght200Grad0Opsz48'
import IconPublishedWithChangesFill1Wght300Grad0Opsz48 from '../components/PublishedWithChangesFill1Wght300Grad0Opsz48'
import IconPublishedWithChangesFill1Wght400Grad0Opsz48 from '../components/PublishedWithChangesFill1Wght400Grad0Opsz48'
import IconPublishedWithChangesFill1Wght500Grad0Opsz48 from '../components/PublishedWithChangesFill1Wght500Grad0Opsz48'
import IconPublishedWithChangesFill1Wght600Grad0Opsz48 from '../components/PublishedWithChangesFill1Wght600Grad0Opsz48'
import IconPublishedWithChangesFill1Wght700Grad0Opsz48 from '../components/PublishedWithChangesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPublishedWithChanges = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPublishedWithChangesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPublishedWithChangesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPublishedWithChangesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPublishedWithChangesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPublishedWithChangesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPublishedWithChangesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPublishedWithChangesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPublishedWithChangesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPublishedWithChangesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPublishedWithChangesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPublishedWithChangesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPublishedWithChangesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPublishedWithChangesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPublishedWithChangesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
