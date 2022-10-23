import IconReviewsFill0Wght100Grad0Opsz48 from '../components/ReviewsFill0Wght100Grad0Opsz48'
import IconReviewsFill0Wght200Grad0Opsz48 from '../components/ReviewsFill0Wght200Grad0Opsz48'
import IconReviewsFill0Wght300Grad0Opsz48 from '../components/ReviewsFill0Wght300Grad0Opsz48'
import IconReviewsFill0Wght400Grad0Opsz48 from '../components/ReviewsFill0Wght400Grad0Opsz48'
import IconReviewsFill0Wght500Grad0Opsz48 from '../components/ReviewsFill0Wght500Grad0Opsz48'
import IconReviewsFill0Wght600Grad0Opsz48 from '../components/ReviewsFill0Wght600Grad0Opsz48'
import IconReviewsFill0Wght700Grad0Opsz48 from '../components/ReviewsFill0Wght700Grad0Opsz48'
import IconReviewsFill1Wght100Grad0Opsz48 from '../components/ReviewsFill1Wght100Grad0Opsz48'
import IconReviewsFill1Wght200Grad0Opsz48 from '../components/ReviewsFill1Wght200Grad0Opsz48'
import IconReviewsFill1Wght300Grad0Opsz48 from '../components/ReviewsFill1Wght300Grad0Opsz48'
import IconReviewsFill1Wght400Grad0Opsz48 from '../components/ReviewsFill1Wght400Grad0Opsz48'
import IconReviewsFill1Wght500Grad0Opsz48 from '../components/ReviewsFill1Wght500Grad0Opsz48'
import IconReviewsFill1Wght600Grad0Opsz48 from '../components/ReviewsFill1Wght600Grad0Opsz48'
import IconReviewsFill1Wght700Grad0Opsz48 from '../components/ReviewsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReviews = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReviewsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReviewsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReviewsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReviewsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReviewsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReviewsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReviewsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReviewsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReviewsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReviewsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReviewsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReviewsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReviewsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReviewsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
