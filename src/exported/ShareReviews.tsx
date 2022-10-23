import IconShareReviewsFill0Wght100Grad0Opsz48 from '../components/ShareReviewsFill0Wght100Grad0Opsz48'
import IconShareReviewsFill0Wght200Grad0Opsz48 from '../components/ShareReviewsFill0Wght200Grad0Opsz48'
import IconShareReviewsFill0Wght300Grad0Opsz48 from '../components/ShareReviewsFill0Wght300Grad0Opsz48'
import IconShareReviewsFill0Wght400Grad0Opsz48 from '../components/ShareReviewsFill0Wght400Grad0Opsz48'
import IconShareReviewsFill0Wght500Grad0Opsz48 from '../components/ShareReviewsFill0Wght500Grad0Opsz48'
import IconShareReviewsFill0Wght600Grad0Opsz48 from '../components/ShareReviewsFill0Wght600Grad0Opsz48'
import IconShareReviewsFill0Wght700Grad0Opsz48 from '../components/ShareReviewsFill0Wght700Grad0Opsz48'
import IconShareReviewsFill1Wght100Grad0Opsz48 from '../components/ShareReviewsFill1Wght100Grad0Opsz48'
import IconShareReviewsFill1Wght200Grad0Opsz48 from '../components/ShareReviewsFill1Wght200Grad0Opsz48'
import IconShareReviewsFill1Wght300Grad0Opsz48 from '../components/ShareReviewsFill1Wght300Grad0Opsz48'
import IconShareReviewsFill1Wght400Grad0Opsz48 from '../components/ShareReviewsFill1Wght400Grad0Opsz48'
import IconShareReviewsFill1Wght500Grad0Opsz48 from '../components/ShareReviewsFill1Wght500Grad0Opsz48'
import IconShareReviewsFill1Wght600Grad0Opsz48 from '../components/ShareReviewsFill1Wght600Grad0Opsz48'
import IconShareReviewsFill1Wght700Grad0Opsz48 from '../components/ShareReviewsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShareReviews = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShareReviewsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShareReviewsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShareReviewsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShareReviewsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShareReviewsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShareReviewsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShareReviewsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShareReviewsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShareReviewsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShareReviewsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShareReviewsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShareReviewsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShareReviewsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShareReviewsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
