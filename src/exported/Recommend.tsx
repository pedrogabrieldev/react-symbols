import IconRecommendFill0Wght100Grad0Opsz48 from '../components/RecommendFill0Wght100Grad0Opsz48'
import IconRecommendFill0Wght200Grad0Opsz48 from '../components/RecommendFill0Wght200Grad0Opsz48'
import IconRecommendFill0Wght300Grad0Opsz48 from '../components/RecommendFill0Wght300Grad0Opsz48'
import IconRecommendFill0Wght400Grad0Opsz48 from '../components/RecommendFill0Wght400Grad0Opsz48'
import IconRecommendFill0Wght500Grad0Opsz48 from '../components/RecommendFill0Wght500Grad0Opsz48'
import IconRecommendFill0Wght600Grad0Opsz48 from '../components/RecommendFill0Wght600Grad0Opsz48'
import IconRecommendFill0Wght700Grad0Opsz48 from '../components/RecommendFill0Wght700Grad0Opsz48'
import IconRecommendFill1Wght100Grad0Opsz48 from '../components/RecommendFill1Wght100Grad0Opsz48'
import IconRecommendFill1Wght200Grad0Opsz48 from '../components/RecommendFill1Wght200Grad0Opsz48'
import IconRecommendFill1Wght300Grad0Opsz48 from '../components/RecommendFill1Wght300Grad0Opsz48'
import IconRecommendFill1Wght400Grad0Opsz48 from '../components/RecommendFill1Wght400Grad0Opsz48'
import IconRecommendFill1Wght500Grad0Opsz48 from '../components/RecommendFill1Wght500Grad0Opsz48'
import IconRecommendFill1Wght600Grad0Opsz48 from '../components/RecommendFill1Wght600Grad0Opsz48'
import IconRecommendFill1Wght700Grad0Opsz48 from '../components/RecommendFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRecommend = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRecommendFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRecommendFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRecommendFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRecommendFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRecommendFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRecommendFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRecommendFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRecommendFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRecommendFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRecommendFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRecommendFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRecommendFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRecommendFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRecommendFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
