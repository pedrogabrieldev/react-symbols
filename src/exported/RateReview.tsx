import IconRateReviewFill0Wght100Grad0Opsz48 from '../components/RateReviewFill0Wght100Grad0Opsz48'
import IconRateReviewFill0Wght200Grad0Opsz48 from '../components/RateReviewFill0Wght200Grad0Opsz48'
import IconRateReviewFill0Wght300Grad0Opsz48 from '../components/RateReviewFill0Wght300Grad0Opsz48'
import IconRateReviewFill0Wght400Grad0Opsz48 from '../components/RateReviewFill0Wght400Grad0Opsz48'
import IconRateReviewFill0Wght500Grad0Opsz48 from '../components/RateReviewFill0Wght500Grad0Opsz48'
import IconRateReviewFill0Wght600Grad0Opsz48 from '../components/RateReviewFill0Wght600Grad0Opsz48'
import IconRateReviewFill0Wght700Grad0Opsz48 from '../components/RateReviewFill0Wght700Grad0Opsz48'
import IconRateReviewFill1Wght100Grad0Opsz48 from '../components/RateReviewFill1Wght100Grad0Opsz48'
import IconRateReviewFill1Wght200Grad0Opsz48 from '../components/RateReviewFill1Wght200Grad0Opsz48'
import IconRateReviewFill1Wght300Grad0Opsz48 from '../components/RateReviewFill1Wght300Grad0Opsz48'
import IconRateReviewFill1Wght400Grad0Opsz48 from '../components/RateReviewFill1Wght400Grad0Opsz48'
import IconRateReviewFill1Wght500Grad0Opsz48 from '../components/RateReviewFill1Wght500Grad0Opsz48'
import IconRateReviewFill1Wght600Grad0Opsz48 from '../components/RateReviewFill1Wght600Grad0Opsz48'
import IconRateReviewFill1Wght700Grad0Opsz48 from '../components/RateReviewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRateReview = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRateReviewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRateReviewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRateReviewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRateReviewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRateReviewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRateReviewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRateReviewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRateReviewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRateReviewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRateReviewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRateReviewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRateReviewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRateReviewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRateReviewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
